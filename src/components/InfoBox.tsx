'use client';

import Image from 'next/image';
import ThemeToggle from './ThemeToggle';

export default function InfoBox() {
    const handleGetStarted = () => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="info-box">
            <ThemeToggle />

            <div className="profile-section">
                <div className="avatar-wrapper">
                    <Image
                        src="/images/emoji.webp"
                        alt="Profile"
                        width={80}
                        height={80}
                        className="avatar"
                    />
                </div>

                <div className="profile-info">
                    <h2>Huzaifa Ahmed</h2>
                    <p className="title">Full Stack Developer</p>
                    <a href="mailto:freelancersoftuae@gmail.com" className="email">
                        freelancersoftuae@gmail.com
                    </a>
                </div>

                <div className="status-badge">
                    <span className="status-dot"></span>
                    <span>Available for Work</span>
                </div>
            </div>

            <div className="social-links">
                <a href="#" className="social-icon" aria-label="LinkedIn">
                    <Image src="/icon/linkedin.png" alt="LinkedIn" width={20} height={20} />
                </a>
                <a href="#" className="social-icon" aria-label="Facebook">
                    <Image src="/icon/facebook.png" alt="Facebook" width={20} height={20} />
                </a>
                <a href="#" className="social-icon" aria-label="Twitter">
                    <Image src="/icon/twitter.png" alt="Twitter" width={20} height={20} />
                </a>
            </div>

            <button className="get-started-btn" onClick={handleGetStarted}>
                Get Started
                <Image src="/icon/right-arrow.svg" alt="" width={16} height={16} />
            </button>
        </div>
    );
}
