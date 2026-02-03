'use client';

interface SpotlightProps {
    className?: string;
    fill?: string;
}

export function Spotlight({ className = '', fill = 'white' }: SpotlightProps) {
    return (
        <div
            className={`spotlight ${className}`}
            style={{
                background: `radial-gradient(circle, ${fill}15 0%, transparent 70%)`,
            }}
        />
    );
}
