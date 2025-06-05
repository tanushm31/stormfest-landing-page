import React, { useState, useEffect } from 'react';
import { Toaster } from '@/components/ui/toaster';
import { GradientText } from '@/components/common';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navItems = ['Mission', 'Principles', 'Experience', 'Audience', 'Enigma', 'Legal'];

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMobileMenuOpen]);

  return (
    <header className="sticky top-0 z-50 bg-gray-900/80 backdrop-blur-md shadow-lg">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4 flex justify-between items-center" aria-label="Main navigation">
        <a href="#hero" className="focus:outline-none focus:ring-2 focus:ring-primary rounded-sm">
          <GradientText className="text-2xl sm:text-3xl font-bold tracking-tight">⚡️ Stormfest</GradientText>
          <span className="sr-only">Stormfest Home</span>
        </a>
        <div className="hidden md:flex space-x-3 lg:space-x-4">
          {navItems.map(item => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-gray-300 hover:text-white transition-colors duration-300 px-2 py-1 rounded-md text-sm lg:text-base focus:outline-none focus:ring-2 focus:ring-primary">
              {item}
            </a>
          ))}
        </div>
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMobileMenu}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMobileMenuOpen ? "Close main menu" : "Open main menu"}
            className="text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-primary"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </nav>
      {isMobileMenuOpen && (
        <div id="mobile-menu" className="md:hidden bg-gray-800/90">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map(item => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-gray-300 hover:text-white hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium focus:outline-none focus:ring-2 focus:ring-primary"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export const Footer = () => (
  <footer className="bg-gray-900 border-t border-gray-800 py-8 md:py-12 text-center">
    <div className="container mx-auto px-4">
      <GradientText className="text-xl md:text-2xl font-bold">⚡️ Stormfest</GradientText>
      <p className="text-gray-400 mt-2 text-sm md:text-base">The Cultural Supernova. Reimagined.</p>
      <div className="mt-4 space-x-2 sm:space-x-4">
        <a href="#legal" className="text-xs sm:text-sm text-gray-400 hover:text-white transition-colors focus:outline-none focus:ring-1 focus:ring-primary rounded-sm p-1">Privacy Policy</a>
        <span className="text-gray-500">|</span>
        <a href="#legal" className="text-xs sm:text-sm text-gray-400 hover:text-white transition-colors focus:outline-none focus:ring-1 focus:ring-primary rounded-sm p-1">Refund Policy</a>
      </div>
      <p className="text-xs sm:text-sm text-gray-500 mt-4">© {new Date().getFullYear()} Stormcrew. All Rights Reserved. (Registered MSME)</p>
      <p className="text-xs text-gray-600 mt-1">NCR | 29th–31st Dec</p>
    </div>
  </footer>
);

export const PageLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black text-gray-100 flex flex-col">
      <Toaster />
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};