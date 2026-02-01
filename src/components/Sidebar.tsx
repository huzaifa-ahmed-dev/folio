'use client';

import { useState, useEffect } from 'react';

const navItems = [
    { id: 'home', icon: 'fa-house', label: 'Home' },
    { id: 'works', icon: 'fa-briefcase', label: 'Works' },
    { id: 'about', icon: 'fa-user', label: 'About' },
    { id: 'contact', icon: 'fa-envelope', label: 'Contact' },
];

export default function Sidebar() {
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            const sections = navItems.map(item => document.getElementById(item.id));
            const scrollPosition = window.scrollY + 200;

            for (let i = sections.length - 1; i >= 0; i--) {
                const section = sections[i];
                if (section && section.offsetTop <= scrollPosition) {
                    setActiveSection(navItems[i].id);
                    break;
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className="sidebar">
            {navItems.map((item) => (
                <button
                    key={item.id}
                    className={`nav-item ${activeSection === item.id ? 'active' : ''}`}
                    onClick={() => handleNavClick(item.id)}
                    aria-label={item.label}
                    title={item.label}
                >
                    <i className={`fa-solid ${item.icon}`}></i>
                </button>
            ))}
        </nav>
    );
}
