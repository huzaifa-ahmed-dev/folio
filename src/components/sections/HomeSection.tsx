'use client';

import { SplineScene } from '@/components/ui/spline';
import { Card } from '@/components/ui/card';
import { Spotlight } from '@/components/ui/spotlight';

export default function HomeSection() {
    return (
        <section id="home" className="home-section">
            <div className="home-content">
                <div className="home-text">
                    <span className="greeting">HI THERE, I&apos;M</span>
                    <h1 className="name">Huzaifa Ahmed</h1>
                    <p className="subtitle">
                        Creative and detail-oriented Frontend Engineer passionate about building responsive, user-friendly, and visually appealing websites. Skilled in modern web technologies, UI/UX design, and delivering seamless digital experiences.
                    </p>

                    <div className="expertise-tags">
                        <span className="tag">UI/UX Design</span>
                        <span className="tag">Web Development</span>
                        <span className="tag">Mobile Apps</span>
                    </div>
                </div>

                <div className="home-visual">
                    <Card className="spline-card">
                        <Spotlight
                            className="spline-spotlight"
                            fill="white"
                        />
                        <div className="spline-wrapper">
                            <SplineScene
                                scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                                className="spline-scene"
                            />
                        </div>
                    </Card>
                </div>
            </div>
        </section>
    );
}
