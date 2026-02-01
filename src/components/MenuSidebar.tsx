'use client';

import Link from 'next/link';

interface MenuSidebarProps {
    isOpen: boolean;
    onClose: () => void;
}

const menuItems = [
    { id: 'home', label: 'Home' },
    { id: 'works', label: 'Works' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
];

export default function MenuSidebar({ isOpen, onClose }: MenuSidebarProps) {
    const handleNavClick = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        onClose();
    };

    return (
        <div className={`menu-sidebar ${isOpen ? 'active' : ''}`}>
            <button className="close-btn" onClick={onClose}>
                <i className="fa-solid fa-xmark"></i>
            </button>
            <nav className="menu-nav">
                {menuItems.map((item) => (
                    <button
                        key={item.id}
                        className="menu-item"
                        onClick={() => handleNavClick(item.id)}
                    >
                        {item.label}
                    </button>
                ))}
            </nav>
        </div>
    );
}
