'use client';

import { useEffect, useState } from 'react';
import { useTheme } from '@/context/ThemeContext';

interface Orb {
    id: number;
    x: number;
    y: number;
    size: number;
    duration: number;
    delay: number;
    moveX: number;
    moveY: number;
}

export default function FloatingOrbs() {
    const { floatingOrbsEnabled, accentColor } = useTheme();
    const [orbs, setOrbs] = useState<Orb[]>([]);

    useEffect(() => {
        // Generate orbs on client side
        const generatedOrbs = Array.from({ length: 6 }, (_, i) => ({
            id: i,
            x: Math.random() * 100,
            y: Math.random() * 100,
            size: 150 + Math.random() * 250,
            duration: 15 + Math.random() * 20,
            delay: Math.random() * -20,
            moveX: (Math.random() - 0.5) * 30,
            moveY: (Math.random() - 0.5) * 30,
        }));
        setOrbs(generatedOrbs);
    }, []);

    if (!floatingOrbsEnabled || orbs.length === 0) return null;

    return (
        <div className="floating-orbs-container">
            {orbs.map((orb) => (
                <div
                    key={orb.id}
                    className="floating-orb"
                    style={{
                        left: `${orb.x}%`,
                        top: `${orb.y}%`,
                        width: orb.size,
                        height: orb.size,
                        background: `radial-gradient(circle, ${accentColor}40 0%, ${accentColor}15 40%, transparent 70%)`,
                        animationDuration: `${orb.duration}s`,
                        animationDelay: `${orb.delay}s`,
                        ['--move-x' as string]: `${orb.moveX}vw`,
                        ['--move-y' as string]: `${orb.moveY}vh`,
                    }}
                />
            ))}
        </div>
    );
}
