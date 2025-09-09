import { useEffect, useState } from 'react';
import moon from '../assets/images/moon.webp'
import sun from '../assets/images/sun.webp'

const ThemeToggle = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  return (
    <button className="theme-toggle bounce" onClick={toggleTheme}>
      {theme === 'light' ? (
        <img src={moon} className="moon"></img>
      ) : (
        <img src={sun} className="moon"></img>
      )}
    </button>
  );
};

export default ThemeToggle;