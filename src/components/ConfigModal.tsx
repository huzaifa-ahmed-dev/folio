'use client';

import { useTheme } from '@/context/ThemeContext';

interface ConfigModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const colorOptions = [
    '#ff6b35', // Orange
    '#00d4ff', // Cyan
    '#ff3366', // Pink
    '#00ff88', // Green
    '#ffcc00', // Yellow
    '#9966ff', // Purple
    '#ffffff', // White
    '#000000', // Black
];

export default function ConfigModal({ isOpen, onClose }: ConfigModalProps) {
    const {
        accentColor,
        setAccentColor,
        activeEffect,
        setActiveEffect
    } = useTheme();

    if (!isOpen) return null;

    return (
        <div className="config-modal-overlay" onClick={onClose}>
            <div className="config-modal" onClick={(e) => e.stopPropagation()}>
                <h3>Theme Configuration</h3>

                <div className="color-options">
                    {colorOptions.map((color) => (
                        <button
                            key={color}
                            className={`color-circle ${accentColor === color ? 'active' : ''}`}
                            style={{ backgroundColor: color }}
                            onClick={() => setAccentColor(color)}
                            aria-label={`Select color ${color}`}
                        />
                    ))}
                </div>

                <div className="effects-section">
                    <h4>Visual Effects <span className="effect-hint">(one at a time)</span></h4>

                    <div className="effect-toggle">
                        <div className="effect-info">
                            <span className="effect-name">✨ Particles</span>
                            <span className="effect-desc">Floating particle animation</span>
                        </div>
                        <button
                            className={`toggle-btn ${activeEffect === 'particles' ? 'active' : ''}`}
                            onClick={() => setActiveEffect('particles')}
                            aria-label="Toggle particles"
                        >
                            <span className="toggle-slider"></span>
                        </button>
                    </div>

                    <div className="effect-toggle">
                        <div className="effect-info">
                            <span className="effect-name">💫 Glow Trail</span>
                            <span className="effect-desc">Mouse cursor glow effect</span>
                        </div>
                        <button
                            className={`toggle-btn ${activeEffect === 'glowTrail' ? 'active' : ''}`}
                            onClick={() => setActiveEffect('glowTrail')}
                            aria-label="Toggle glow trail"
                        >
                            <span className="toggle-slider"></span>
                        </button>
                    </div>

                    <div className="effect-toggle">
                        <div className="effect-info">
                            <span className="effect-name">🔮 Floating Orbs</span>
                            <span className="effect-desc">Ambient glowing orbs</span>
                        </div>
                        <button
                            className={`toggle-btn ${activeEffect === 'floatingOrbs' ? 'active' : ''}`}
                            onClick={() => setActiveEffect('floatingOrbs')}
                            aria-label="Toggle floating orbs"
                        >
                            <span className="toggle-slider"></span>
                        </button>
                    </div>

                    <div className="effect-toggle">
                        <div className="effect-info">
                            <span className="effect-name">📺 Scan Lines</span>
                            <span className="effect-desc">Retro CRT effect</span>
                        </div>
                        <button
                            className={`toggle-btn ${activeEffect === 'scanLines' ? 'active' : ''}`}
                            onClick={() => setActiveEffect('scanLines')}
                            aria-label="Toggle scan lines"
                        >
                            <span className="toggle-slider"></span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
