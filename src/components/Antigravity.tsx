'use client';

import { useRef, useMemo, useEffect, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { useTheme } from '@/context/ThemeContext';

interface ParticlesProps {
    color: string;
    mousePosition: { x: number; y: number };
}

function Particles({ color, mousePosition }: ParticlesProps) {
    const meshRef = useRef<THREE.Points>(null);
    const particleCount = 400;
    const { viewport } = useThree();

    // Create particle positions and velocities
    const { positions, velocities } = useMemo(() => {
        const positions = new Float32Array(particleCount * 3);
        const velocities = new Float32Array(particleCount * 3);

        for (let i = 0; i < particleCount; i++) {
            const i3 = i * 3;

            // Random spherical distribution
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.acos(Math.random() * 2 - 1);
            const radius = 3 + Math.random() * 7;

            positions[i3] = radius * Math.sin(phi) * Math.cos(theta);
            positions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
            positions[i3 + 2] = radius * Math.cos(phi);

            // Random velocities
            velocities[i3] = (Math.random() - 0.5) * 0.02;
            velocities[i3 + 1] = (Math.random() - 0.5) * 0.02;
            velocities[i3 + 2] = (Math.random() - 0.5) * 0.02;
        }

        return { positions, velocities };
    }, []);

    // Animation loop
    useFrame((state) => {
        if (!meshRef.current) return;

        const geometry = meshRef.current.geometry;
        const positionAttr = geometry.getAttribute('position') as THREE.BufferAttribute;
        const array = positionAttr.array as Float32Array;

        const time = state.clock.getElapsedTime();

        // Convert mouse position to 3D coordinates
        const mouseX = (mousePosition.x / window.innerWidth) * 2 - 1;
        const mouseY = -(mousePosition.y / window.innerHeight) * 2 + 1;
        const mouse3D = new THREE.Vector3(
            mouseX * viewport.width / 2,
            mouseY * viewport.height / 2,
            0
        );

        for (let i = 0; i < particleCount; i++) {
            const i3 = i * 3;

            // Calculate distance from mouse
            const dx = array[i3] - mouse3D.x;
            const dy = array[i3 + 1] - mouse3D.y;
            const dz = array[i3 + 2];
            const distanceToMouse = Math.sqrt(dx * dx + dy * dy + dz * dz);

            // Push particles away from mouse (antigravity effect)
            const pushRadius = 3;
            const pushStrength = 0.15;
            if (distanceToMouse < pushRadius && distanceToMouse > 0.1) {
                const pushForce = (pushRadius - distanceToMouse) / pushRadius * pushStrength;
                array[i3] += (dx / distanceToMouse) * pushForce;
                array[i3 + 1] += (dy / distanceToMouse) * pushForce;
                array[i3 + 2] += (dz / distanceToMouse) * pushForce * 0.5;
            }

            // Add oscillation
            array[i3] += velocities[i3] + Math.sin(time * 0.5 + i) * 0.003;
            array[i3 + 1] += velocities[i3 + 1] + Math.cos(time * 0.3 + i) * 0.003;
            array[i3 + 2] += velocities[i3 + 2] + Math.sin(time * 0.7 + i) * 0.002;

            // Boundary check - respawn if too far
            const distance = Math.sqrt(
                array[i3] ** 2 + array[i3 + 1] ** 2 + array[i3 + 2] ** 2
            );

            if (distance > 12 || distance < 2) {
                const theta = Math.random() * Math.PI * 2;
                const phi = Math.acos(Math.random() * 2 - 1);
                const newRadius = 3 + Math.random() * 5;

                array[i3] = newRadius * Math.sin(phi) * Math.cos(theta);
                array[i3 + 1] = newRadius * Math.sin(phi) * Math.sin(theta);
                array[i3 + 2] = newRadius * Math.cos(phi);
            }
        }

        positionAttr.needsUpdate = true;

        // Rotate overall
        meshRef.current.rotation.y = time * 0.05;
        meshRef.current.rotation.x = Math.sin(time * 0.1) * 0.1;
    });

    const parsedColor = useMemo(() => new THREE.Color(color), [color]);

    // Create circular texture for round particles
    const circleTexture = useMemo(() => {
        const canvas = document.createElement('canvas');
        canvas.width = 64;
        canvas.height = 64;
        const ctx = canvas.getContext('2d');
        if (ctx) {
            const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
            gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
            gradient.addColorStop(0.5, 'rgba(255, 255, 255, 0.8)');
            gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, 64, 64);
        }
        const texture = new THREE.CanvasTexture(canvas);
        return texture;
    }, []);

    return (
        <points ref={meshRef}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    args={[positions, 3]}
                />
            </bufferGeometry>
            <pointsMaterial
                size={0.12}
                color={parsedColor}
                map={circleTexture}
                transparent
                opacity={0.9}
                sizeAttenuation
                blending={THREE.AdditiveBlending}
                depthWrite={false}
            />
        </points>
    );
}

export default function Antigravity() {
    const { accentColor, particlesEnabled } = useTheme();
    const containerRef = useRef<HTMLDivElement>(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    if (!particlesEnabled) return null;

    return (
        <div ref={containerRef} className="antigravity-container">
            <Canvas
                camera={{ position: [0, 0, 10], fov: 60 }}
                style={{ background: 'transparent' }}
            >
                <Particles color={accentColor} mousePosition={mousePosition} />
            </Canvas>
        </div>
    );
}
