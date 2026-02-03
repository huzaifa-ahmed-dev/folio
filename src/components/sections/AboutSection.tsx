'use client';

const experiences = [
    {
        id: 1,
        role: 'Frontend Designer',
        company: 'Smart Print Solution',
        period: '2022 - 2025',
        description: 'Crafts responsive, user-focused interfaces with clean code and pixel-perfect design execution.',
    },
    {
        id: 2,
        role: 'Web Designer',
        company: 'Epic Studio',
        period: '2021 - 2022',
        description: 'Designs visually engaging, intuitive websites that balance aesthetics, usability, and brand identity.',
    },
    {
        id: 3,
        role: 'IT Support Specialist',
        company: 'Shift Enterprises',
        period: '2020 - 2021',
        description: 'Provides reliable technical support, troubleshooting hardware, software, and system issues efficiently.',
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
