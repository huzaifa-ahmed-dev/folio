'use client';

import { useEffect, useState } from 'react';
import { useTheme } from '@/context/ThemeContext';

interface TrailPoint {
    x: number;
    y: number;
    id: number;
}

export default function GlowTrail() {
    const { glowTrailEnabled, accentColor } = useTheme();
    const [trail, setTrail] = useState<TrailPoint[]>([]);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        if (!glowTrailEnabled) return;

        let idCounter = 0;

        const handleMouseMove = (e: MouseEvent) => {
            setMousePos({ x: e.clientX, y: e.clientY });

            const newPoint: TrailPoint = {
                x: e.clientX,
                y: e.clientY,
                id: idCounter++
            };

            setTrail(prev => [...prev.slice(-20), newPoint]);
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [glowTrailEnabled]);

    // Clean up old trail points
    useEffect(() => {
        if (!glowTrailEnabled) return;

        const interval = setInterval(() => {
            setTrail(prev => prev.slice(1));
        }, 50);

        return () => clearInterval(interval);
    }, [glowTrailEnabled]);

    if (!glowTrailEnabled) return null;

    return (
        <div className="glow-trail-container">
            {trail.map((point, index) => (
                <div
                    key={point.id}
                    className="trail-point"
                    style={{
                        left: point.x,
                        top: point.y,
                        opacity: (index + 1) / trail.length * 0.6,
                        transform: `translate(-50%, -50%) scale(${(index + 1) / trail.length})`,
                        background: accentColor,
                        boxShadow: `0 0 ${10 + index}px ${accentColor}, 0 0 ${20 + index * 2}px ${accentColor}`,
                    }}
                />
            ))}
            <div
                className="trail-cursor"
                style={{
                    left: mousePos.x,
                    top: mousePos.y,
                    background: accentColor,
                    boxShadow: `0 0 20px ${accentColor}, 0 0 40px ${accentColor}, 0 0 60px ${accentColor}`,
                }}
            />
        </div>
    );
}
