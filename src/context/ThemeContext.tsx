'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type EffectType = 'particles' | 'glowTrail' | 'floatingOrbs' | 'scanLines' | null;

interface ThemeContextType {
  isDarkMode: boolean;
  toggleTheme: () => void;
  accentColor: string;
  setAccentColor: (color: string) => void;
  // Individual effect states
  particlesEnabled: boolean;
  glowTrailEnabled: boolean;
  floatingOrbsEnabled: boolean;
  scanLinesEnabled: boolean;
  // Toggle function that makes effects mutually exclusive
  setActiveEffect: (effect: EffectType) => void;
  activeEffect: EffectType;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [accentColor, setAccentColor] = useState('#ff6b35');
  const [activeEffect, setActiveEffectState] = useState<EffectType>('particles');

  useEffect(() => {
    // Load saved preferences
    const savedTheme = localStorage.getItem('theme');
    const savedColor = localStorage.getItem('accentColor');
    const savedEffect = localStorage.getItem('activeEffect');

    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
    }
    if (savedColor) {
      setAccentColor(savedColor);
    }
    if (savedEffect !== null) {
      setActiveEffectState(savedEffect === 'null' ? null : savedEffect as EffectType);
    }
  }, []);

  useEffect(() => {
    document.body.classList.toggle('light-mode', !isDarkMode);
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  useEffect(() => {
    document.documentElement.style.setProperty('--accent-color', accentColor);

    const hex = accentColor.replace('#', '');
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

    const contrastColor = luminance > 0.5 ? '#000000' : '#ffffff';
    document.documentElement.style.setProperty('--accent-contrast', contrastColor);

    localStorage.setItem('accentColor', accentColor);
  }, [accentColor]);

  useEffect(() => {
    localStorage.setItem('activeEffect', activeEffect === null ? 'null' : activeEffect);
  }, [activeEffect]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  // Toggle effect - if clicking the active one, turn it off; otherwise switch to it
  const setActiveEffect = (effect: EffectType) => {
    if (activeEffect === effect) {
      setActiveEffectState(null); // Turn off if clicking the active effect
    } else {
      setActiveEffectState(effect); // Switch to new effect
    }
  };

  // Derived states for individual effects
  const particlesEnabled = activeEffect === 'particles';
  const glowTrailEnabled = activeEffect === 'glowTrail';
  const floatingOrbsEnabled = activeEffect === 'floatingOrbs';
  const scanLinesEnabled = activeEffect === 'scanLines';

  return (
    <ThemeContext.Provider value={{
      isDarkMode,
      toggleTheme,
      accentColor,
      setAccentColor,
      particlesEnabled,
      glowTrailEnabled,
      floatingOrbsEnabled,
      scanLinesEnabled,
      setActiveEffect,
      activeEffect
    }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
