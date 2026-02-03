'use client';

import { Suspense, lazy } from 'react';

const Spline = lazy(() => import('@splinetool/react-spline'));

interface SplineSceneProps {
    scene: string;
    className?: string;
}

export function SplineScene({ scene, className }: SplineSceneProps) {
    return (
        <Suspense
            fallback={
                <div className="spline-loading">
                    <div className="loading-spinner"></div>
                </div>
            }
        >
            <Spline scene={scene} className={className} />
        </Suspense>
    );
}
