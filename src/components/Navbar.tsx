'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [showEmailBubble, setShowEmailBubble] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Simple section detection - check which section header is closest to top
      const sections = [
        { id: 'about', element: document.getElementById('about') },
        { id: 'experience', element: document.getElementById('experience') },
        { id: 'projects', element: document.getElementById('projects') }
      ];
      
      let current = 'about';
      let minDistance = Infinity;
      
      sections.forEach(({ id, element }) => {
        if (element) {
          const rect = element.getBoundingClientRect();
          const distance = Math.abs(rect.top - 100); // Distance from navbar
          
          // If this section is closer to the navbar position
          if (distance < minDistance && rect.top <= 300) {
            minDistance = distance;
            current = id;
          }
        }
      });
      
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleContactClick = () => {
    setShowEmailBubble(!showEmailBubble);
  };

  const handleEmailClick = () => {
    navigator.clipboard.writeText('frick.wu@torontomu.ca');
    setShowEmailBubble(false);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navSections = [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'backdrop-blur-md bg-white/95 dark:bg-black/90 shadow-xl border-b border-white/30 dark:border-blue-900/30' 
        : 'backdrop-blur-sm bg-white/80 dark:bg-black/70'
    }`}>
      <div className="max-w-6xl mx-auto px-6 lg:px-16">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <button
              onClick={() => scrollToSection('about')}
              className="text-xl font-bold bg-gradient-to-r from-slate-700 to-slate-800 dark:from-white dark:to-blue-100 bg-clip-text text-transparent hover:from-slate-600 hover:to-blue-800 dark:hover:from-blue-200 dark:hover:to-white transition-all duration-300"
            >
              Frick
            </button>
          </div>

          <div className="hidden lg:flex items-center space-x-8">
            <div className="flex items-center space-x-6">
              {navSections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`relative px-3 py-2 text-sm font-medium transition-all duration-300 hover:text-slate-700 dark:hover:text-blue-300 ${
                    activeSection === section.id
                      ? 'text-slate-800 dark:text-blue-300'
                      : 'text-slate-600 dark:text-slate-300'
                  }`}
                >
                  {section.label}
                  {activeSection === section.id && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-slate-600 to-slate-700 dark:from-blue-400 dark:to-blue-300 rounded-full"></div>
                  )}
                </button>
              ))}
            </div>

            <div className="h-6 w-px bg-slate-400 dark:bg-slate-600"></div>

            <div className="flex items-center space-x-6">
              <Link
                href="https://github.com/FrickWu"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-600 dark:text-slate-300 hover:text-slate-800 dark:hover:text-blue-300 transition-colors duration-300 font-medium text-sm"
              >
                GitHub
              </Link>
              <Link
                href="https://www.linkedin.com/in/frick-wu/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-600 dark:text-slate-300 hover:text-slate-800 dark:hover:text-blue-300 transition-colors duration-300 font-medium text-sm"
              >
                LinkedIn
              </Link>
              <Link
                href="https://drive.google.com/file/d/1x5uVe2gZU0G_BHfXl4XKoyxJF7L5T1_n/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-slate-700 to-slate-800 dark:from-blue-600 dark:to-blue-700 text-white px-4 py-2 rounded-full hover:from-slate-800 hover:to-slate-900 dark:hover:from-blue-700 dark:hover:to-blue-800 transition-all duration-300 font-medium text-sm shadow-md hover:shadow-lg"
              >
                Resume
              </Link>
              
              <div className="relative">
                <button
                  onClick={handleContactClick}
                  className="text-slate-600 dark:text-slate-300 hover:text-slate-800 dark:hover:text-blue-300 transition-colors duration-300 font-medium text-sm"
                >
                  Contact
                </button>
                {showEmailBubble && (
                  <div className="absolute right-0 mt-2 w-72 backdrop-blur-md bg-white/95 dark:bg-black/90 rounded-xl shadow-xl border border-white/30 dark:border-blue-900/30 p-4 z-10">
                    <div className="text-sm text-slate-500 dark:text-slate-300 mb-3 font-medium">
                      Get in touch:
                    </div>
                    <button
                      onClick={handleEmailClick}
                      className="w-full text-left bg-gradient-to-r from-slate-100 to-slate-200 hover:from-slate-200 hover:to-slate-300 dark:from-blue-900/30 dark:to-blue-800/30 dark:hover:from-blue-900/50 dark:hover:to-blue-800/50 text-slate-700 dark:text-blue-200 px-4 py-3 rounded-lg transition-all duration-300 border border-slate-300/50 dark:border-blue-700/50"
                    >
                      📧 frick.wu@torontomu.ca
                    </button>
                    <div className="text-xs text-slate-400 dark:text-slate-400 mt-2 text-center">
                      Click to copy email address
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          <MobileMenu 
            navSections={navSections} 
            scrollToSection={scrollToSection} 
            activeSection={activeSection}
            showEmailBubble={showEmailBubble}
            setShowEmailBubble={setShowEmailBubble}
            handleEmailClick={handleEmailClick}
          />
        </div>
      </div>
    </nav>
  );
}

function MobileMenu({ 
  navSections, 
  scrollToSection, 
  activeSection, 
  showEmailBubble, 
  setShowEmailBubble, 
  handleEmailClick 
}: {
  navSections: { id: string; label: string }[];
  scrollToSection: (id: string) => void;
  activeSection: string;
  showEmailBubble: boolean;
  setShowEmailBubble: (show: boolean) => void;
  handleEmailClick: () => void;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-md text-slate-600 dark:text-slate-300 hover:text-slate-800 dark:hover:text-blue-300 transition-colors"
      >
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          {isOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-6 top-16 w-64 backdrop-blur-md bg-white/95 dark:bg-black/90 rounded-xl shadow-xl border border-white/30 dark:border-blue-900/30 py-2">
          {navSections.map((section) => (
            <button
              key={section.id}
              onClick={() => {
                scrollToSection(section.id);
                setIsOpen(false);
              }}
              className={`w-full text-left px-4 py-3 text-sm font-medium transition-colors hover:bg-slate-100/50 dark:hover:bg-slate-700/50 ${
                activeSection === section.id
                  ? 'text-slate-800 dark:text-blue-300 bg-slate-100/30 dark:bg-slate-700/30'
                  : 'text-slate-600 dark:text-slate-300'
              }`}
            >
              {section.label}
            </button>
          ))}
          
          <div className="border-t border-slate-300 dark:border-slate-700 my-2"></div>
          
          <Link
            href="https://github.com/FrickWu"
            target="_blank"
            rel="noopener noreferrer"
            className="block px-4 py-3 text-sm font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-100/50 dark:hover:bg-slate-700/50 transition-colors"
          >
            GitHub
          </Link>
          <Link
            href="https://www.linkedin.com/in/frick-wu/"
            target="_blank"
            rel="noopener noreferrer"
            className="block px-4 py-3 text-sm font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-100/50 dark:hover:bg-slate-700/50 transition-colors"
          >
            LinkedIn
          </Link>
          <Link
            href="https://drive.google.com/file/d/1x5uVe2gZU0G_BHfXl4XKoyxJF7L5T1_n/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="block px-4 py-3 text-sm font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-100/50 dark:hover:bg-slate-700/50 transition-colors"
          >
            Resume
          </Link>
          <button
            onClick={() => setShowEmailBubble(!showEmailBubble)}
            className="w-full text-left px-4 py-3 text-sm font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-100/50 dark:hover:bg-slate-700/50 transition-colors"
          >
            Contact
          </button>
          
          {showEmailBubble && (
            <div className="px-4 pb-3">
              <button
                onClick={() => {
                  handleEmailClick();
                  setIsOpen(false);
                }}
                className="w-full text-left bg-gradient-to-r from-slate-100 to-slate-200 dark:from-blue-900/30 dark:to-blue-800/30 text-slate-700 dark:text-blue-200 px-3 py-2 rounded-lg transition-colors text-sm"
              >
                📧 frick.wu@torontomu.ca
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}