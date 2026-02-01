'use client';

const experiences = [
    {
        id: 1,
        role: 'Senior Full Stack Developer',
        company: 'Tech Company',
        period: '2022 - Present',
        description: 'Leading development of web applications using React, Next.js, and Node.js.',
    },
    {
        id: 2,
        role: 'Full Stack Developer',
        company: 'Startup Inc.',
        period: '2020 - 2022',
        description: 'Built scalable web applications and APIs for various clients.',
    },
    {
        id: 3,
        role: 'Frontend Developer',
        company: 'Digital Agency',
        period: '2018 - 2020',
        description: 'Developed responsive websites and user interfaces.',
    },
];

export default function AboutSection() {
    return (
        <section id="about" className="about-section">
            <div className="section-header">
                <h2>About Me</h2>
                <p>A bit about my journey</p>
            </div>

            <div className="about-content">
                <div className="about-text">
                    <p>
                        I&apos;m a passionate Full Stack Developer based in Dubai, UAE, with over 5 years
                        of experience in creating digital experiences. I specialize in building modern,
                        responsive web applications that are both beautiful and functional.
                    </p>
                    <p>
                        My expertise spans across frontend technologies like React and Next.js,
                        backend development with Node.js and Python, and database management.
                        I&apos;m always eager to learn new technologies and take on challenging projects.
                    </p>
                </div>

                <div className="experience-timeline">
                    <h3>Experience</h3>
                    <div className="timeline">
                        {experiences.map((exp) => (
                            <div key={exp.id} className="timeline-item">
                                <div className="timeline-dot"></div>
                                <div className="timeline-content">
                                    <h4>{exp.role}</h4>
                                    <span className="company">{exp.company}</span>
                                    <span className="period">{exp.period}</span>
                                    <p>{exp.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
