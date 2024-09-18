'use client';

import { useState, useEffect } from 'react';

const Navbar = () => {
  const [theme, setTheme] = useState('light'); // Default theme
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    if (typeof window !== 'undefined') {
      const storedTheme = localStorage.getItem('theme');
      if (storedTheme) {
        setTheme(storedTheme);
        document.documentElement.setAttribute('data-theme', storedTheme);
      }
    }
  }, []);

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  if (!mounted) return null;

  return (
    <nav className={`flex items-center justify-between px-4 py-2 bg-base-200 text-${theme === 'light' ? 'text-light' : theme === 'dark' ? 'text-dark' : 'text-emerald'}`}>
      <div className="text-2xl text-dynamic   font-bold">My Website</div>

      {/* Theme Toggle Buttons */}
      <div className="flex items-center gap-2">
        <button
          onClick={() => handleThemeChange('light')}
          className={`px-4 py-2 rounded ${theme === 'light' ? 'bg-gray-200' : ''}`}
        >
          Light
        </button>
        <button
          onClick={() => handleThemeChange('dark')}
          className={`px-4 py-2 rounded ${theme === 'dark' ? 'bg-gray-700 text-white' : ''}`}
        >
          Dark
        </button>
       
      </div>
    </nav>
  );
};

export default Navbar;
