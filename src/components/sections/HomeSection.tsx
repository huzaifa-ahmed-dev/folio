'use client';

import Image from 'next/image';

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
                    <div className="video-wrapper">
                        <Image
                            src="/images/teddy-bear-video.gif"
                            alt="Animation"
                            width={300}
                            height={300}
                            className="home-animation"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
