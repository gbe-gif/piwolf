import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-noir-black/95 shadow-lg backdrop-blur-sm py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="font-display font-bold text-xl md:text-2xl text-white tracking-widest cursor-pointer" onClick={() => scrollTo('hero')}>
          Чёрный Дунай
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {['Main Character', 'Story', 'Crew', 'World'].map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item.toLowerCase().replace(' ', '-'))}
              className="text-gray-300 hover:text-gold-accent transition-colors text-sm uppercase tracking-widest font-serif"
            >
              {item}
            </button>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-noir-black border-t border-gray-800">
          <div className="flex flex-col p-6 space-y-4">
            {['Main Character', 'Story', 'Crew', 'World'].map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item.toLowerCase().replace(' ', '-'))}
                className="text-gray-300 hover:text-gold-accent text-left uppercase tracking-widest font-serif"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;