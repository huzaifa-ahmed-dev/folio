'use client';

import { useTheme } from '@/context/ThemeContext';

export default function ScanLines() {
    const { scanLinesEnabled, accentColor } = useTheme();

    if (!scanLinesEnabled) return null;

    return (
        <div className="scan-lines-container">
            <div className="scan-lines" />
            <div
                className="scan-beam"
                style={{
                    background: `linear-gradient(to bottom, transparent, ${accentColor}10 50%, transparent)`
                }}
            />
        </div>
    );
}
