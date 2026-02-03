'use client';

import Image from 'next/image';
import { SplineScene } from '@/components/ui/spline';

const works = [
    {
        id: 1,
        image: '/images/works-1.jpg',
        category: 'Website Design',
        title: 'Vedis Berlin',
        year: '2025',
        link: 'https://vedis.berlin/',
        use3D: false, // Set to true when you have a valid Spline scene URL
        splineScene: '', // Add your Spline scene URL here
    },
    {
        id: 2,
        image: '/images/works-1.jpg',
        category: 'Mobile App',
        title: 'Crypto Wallet',
        year: '2024',
        link: '#',
        use3D: false,
    },
    {
        id: 3,
        image: '/images/works-1.jpg',
        category: 'UI/UX Design',
        title: 'E-Commerce Platform',
        year: '2024',
        link: '#',
        use3D: false,
    },
];

export default function WorksSection() {
    return (
        <section id="works" className="works-section">
            <div className="section-header">
                <h2>Selected Work</h2>
                <p>Here are some of my recent projects</p>
            </div>

            <div className="works-grid">
                {works.map((work) => (
                    <a
                        key={work.id}
                        href={work.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="work-card"
                    >
                        <div className="work-image">
                            {work.use3D && work.splineScene ? (
                                <div className="work-spline-container">
                                    <SplineScene
                                        scene={work.splineScene}
                                        className="work-spline"
                                    />
                                </div>
                            ) : (
                                <Image
                                    src={work.image}
                                    alt={work.title}
                                    width={400}
                                    height={300}
                                    className="work-img"
                                />
                            )}
                        </div>
                        <div className="work-content">
                            <div className="work-info">
                                <span className="work-category">{work.category}</span>
                                <h3 className="work-title">{work.title}</h3>
                                <span className="work-year">{work.year}</span>
                            </div>
                            <div className="work-arrow">
                                <i className="fa-solid fa-arrow-right"></i>
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </section>
    );
}
