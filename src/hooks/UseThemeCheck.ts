"use client"
import { useState, useEffect } from 'react';

export default function UseThemeCheck() {
  const [themeCheck, setThemeCheck] = useState<boolean>(false);

  useEffect(() => {
    try {
      localStorage.setItem('tp_theme_scheme', 'tp-theme-dark');
    } catch {}
    document.documentElement.setAttribute('tp-theme', 'tp-theme-dark');
    setThemeCheck(true);
  }, []);

  return {
    themeCheck,
    toggleTheme: () => {},
    active: true,
  };
}
