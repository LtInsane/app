import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <button
              onClick={() => scrollToSection('hero')}
              className="text-2xl font-bold text-[#0a5f5f] hover:text-[#083d3d] transition-colors"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Dr. Anderson
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('about')}
              className="text-[#1a1a1a] hover:text-[#0a5f5f] transition-colors font-medium"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('publications')}
              className="text-[#1a1a1a] hover:text-[#0a5f5f] transition-colors font-medium"
            >
              Publications
            </button>
            <button
              onClick={() => scrollToSection('teaching')}
              className="text-[#1a1a1a] hover:text-[#0a5f5f] transition-colors font-medium"
            >
              Teaching
            </button>
            <button
              onClick={() => scrollToSection('blog')}
              className="text-[#1a1a1a] hover:text-[#0a5f5f] transition-colors font-medium"
            >
              Blog
            </button>
            <Button
              onClick={() => scrollToSection('contact')}
              className="bg-[#0a5f5f] hover:bg-[#083d3d] text-white"
            >
              Contact
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-6 py-4 space-y-3">
            <button
              onClick={() => scrollToSection('about')}
              className="block w-full text-left text-[#1a1a1a] hover:text-[#0a5f5f] py-2 font-medium"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('publications')}
              className="block w-full text-left text-[#1a1a1a] hover:text-[#0a5f5f] py-2 font-medium"
            >
              Publications
            </button>
            <button
              onClick={() => scrollToSection('teaching')}
              className="block w-full text-left text-[#1a1a1a] hover:text-[#0a5f5f] py-2 font-medium"
            >
              Teaching
            </button>
            <button
              onClick={() => scrollToSection('blog')}
              className="block w-full text-left text-[#1a1a1a] hover:text-[#0a5f5f] py-2 font-medium"
            >
              Blog
            </button>
            <Button
              onClick={() => scrollToSection('contact')}
              className="w-full bg-[#0a5f5f] hover:bg-[#083d3d] text-white"
            >
              Contact
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;