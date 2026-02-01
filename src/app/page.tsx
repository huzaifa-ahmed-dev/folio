'use client';

import dynamic from 'next/dynamic';
import Header from '@/components/Header';
import InfoBox from '@/components/InfoBox';
import Sidebar from '@/components/Sidebar';
import HomeSection from '@/components/sections/HomeSection';
import WorksSection from '@/components/sections/WorksSection';
import AboutSection from '@/components/sections/AboutSection';
import ContactSection from '@/components/sections/ContactSection';

// Dynamically import effects to avoid SSR issues
const Antigravity = dynamic(() => import('@/components/Antigravity'), {
  ssr: false,
  loading: () => <div className="antigravity-container" />
});

const GlowTrail = dynamic(() => import('@/components/effects/GlowTrail'), {
  ssr: false
});

const FloatingOrbs = dynamic(() => import('@/components/effects/FloatingOrbs'), {
  ssr: false
});

const ScanLines = dynamic(() => import('@/components/effects/ScanLines'), {
  ssr: false
});

export default function Home() {
  return (
    <>
      {/* Background Effects */}
      <Antigravity />
      <FloatingOrbs />
      <ScanLines />
      <GlowTrail />

      <div className="main-container">
        <Header />
        <Sidebar />

        <div className="content-wrapper">
          <InfoBox />

          <main className="main-content">
            <HomeSection />
            <WorksSection />
            <AboutSection />
            <ContactSection />
          </main>
        </div>
      </div>
    </>
  );
}
