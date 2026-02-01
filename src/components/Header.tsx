'use client';

import Image from 'next/image';
import { useState } from 'react';
import ConfigModal from './ConfigModal';
import MenuSidebar from './MenuSidebar';

export default function Header() {
    const [isConfigOpen, setIsConfigOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            <header className="header">
                <div className="location-box">
                    <Image src="/icon/pin.png" alt="Location" width={16} height={16} />
                    <span>DUBAI, UAE</span>
                </div>

                <div className="header-icons">
                    <button className="icon-btn" onClick={() => setIsConfigOpen(true)}>
                        <Image src="/images/setting.png" alt="Settings" width={20} height={20} />
                    </button>
                    <button className="icon-btn menu-btn" onClick={() => setIsMenuOpen(true)}>
                        <Image src="/images/menu.png" alt="Menu" width={24} height={24} />
                    </button>
                </div>
            </header>

            <ConfigModal isOpen={isConfigOpen} onClose={() => setIsConfigOpen(false)} />
            <MenuSidebar isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
        </>
    );
}
