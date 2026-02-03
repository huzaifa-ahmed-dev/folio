'use client';

import dynamic from 'next/dynamic';
import { useState } from 'react';

const Spline = dynamic(() => import('@splinetool/react-spline'), {
    ssr: false,
    loading: () => (
        <div className="spline-loading">
            <div className="loading-spinner"></div>
        </div>
    ),
});

interface SplineSceneProps {
    scene: string;
    className?: string;
}

export function SplineScene({ scene, className }: SplineSceneProps) {
    const [hasError, setHasError] = useState(false);

    if (hasError) {
        return (
            <div className="spline-loading">
                <div className="loading-spinner"></div>
            </div>
        );
    }

    return (
        <Spline
            scene={scene}
            className={className}
            onError={() => setHasError(true)}
        />
    );
}
