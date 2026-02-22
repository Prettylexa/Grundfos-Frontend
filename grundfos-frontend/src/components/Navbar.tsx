import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Monitor scroll to add a subtle background only when moving away from the top
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { label: "Home", href: "#home" },
    { label: "Features", href: "#features" },
    { label: "About", href: "#about" },
  ];

  return (
    /* FIXED positioning keeps it with the user. 
       TRANSITION makes the background fade in smoothly. */
    <header className={`fixed top-0 left-0 z-100 w-full transition-all duration-300 ${
      isScrolled ? 'bg-[#011d3d]/80 backdrop-blur-md py-4' : 'bg-transparent py-6'
    }`}>
      <nav className="max-w-360 mx-auto px-6 md:px-12 flex items-center justify-between">

        {/* DESKTOP NAV */}
        <div className="hidden md:flex items-center gap-12 ml-auto">
          <ul className="flex items-center gap-10">
            {navigationItems.map((item, index) => (
              <li key={index} className="relative group">
                <a href={item.href} className="text-xl text-white hover:text-blue-300 transition-all">
                  {item.label}
                </a>
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-300 transition-all group-hover:w-full" />
              </li>
            ))}
          </ul>
          <button className="bg-white text-[#011d3d] px-8 py-2 rounded-full font-bold text-lg hover:scale-105 transition-transform">
            Login
          </button>
        </div>

        {/* MOBILE TOGGLE */}
        <button 
          className="md:hidden text-3xl text-white focus:outline-none ml-auto"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? '✕' : '☰'}
        </button>
      </nav>

      {/* MOBILE OVERLAY MENU */}
      <div className={`
        fixed inset-0 top-20 w-full bg-[#011d3d] transition-all duration-300 md:hidden
        ${isMenuOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-4'}
      `}>
        <ul className="flex flex-col items-center gap-8 py-10">
          {navigationItems.map((item, index) => (
            <li key={index}>
              <a href={item.href} className="text-2xl text-white" onClick={() => setIsMenuOpen(false)}>
                {item.label}
              </a>
            </li>
          ))}
          <button className="bg-white text-[#011d3d] px-12 py-3 rounded-full font-bold text-xl">Login</button>
        </ul>
      </div>
    </header>
  );
}

export default Navbar;