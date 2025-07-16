'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function ToggleDarkMode() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem('theme');
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      setIsDarkMode(true);
    } else {
      document.documentElement.classList.remove('dark');
      setIsDarkMode(false);
    }
  }, []); // [] => ça s'execute une seul fois

  const toggleTheme = () => {
    if (document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDarkMode(true);
    }
  };

  return (
    <div
      onClick={toggleTheme}
      className="blur-card fixed cursor-pointer top-2.5 right-2.5 z-30 h-8 w-8 p-1 rounded-sm select-none flex items-center justify-center"
    >
      <Image height={18} width={18} src={`${isDarkMode ? "/light_mode.png" : "/dark_mode.png"}`} alt={`Button pour activer le ${isDarkMode ? "mode clair" : "mode sombre"}`}/>
    </div>
  );
}