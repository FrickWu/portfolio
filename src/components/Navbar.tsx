'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [showEmailBubble, setShowEmailBubble] = useState(false);

  const handleContactClick = () => {
    setShowEmailBubble(!showEmailBubble);
  };

  const handleEmailClick = () => {
    navigator.clipboard.writeText('frick.wu@torontomu.ca');
    setShowEmailBubble(false);
  };

  return (
    <nav className="bg-white shadow-md dark:bg-gray-900 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <h1 className="text-xl font-bold text-gray-900 dark:text-white">
              Frick - Retired LoL Player
            </h1>
          </div>
          <div className="flex items-center space-x-8">
            <Link
              href="https://github.com/FrickWu"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors duration-200"
            >
              GitHub
            </Link>
            <Link
              href="https://www.linkedin.com/in/frick-wu/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors duration-200"
            >
              LinkedIn
            </Link>
            <Link
              href="https://drive.google.com/file/d/1x5uVe2gZU0G_BHfXl4XKoyxJF7L5T1_n/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors duration-200"
            >
              Resume
            </Link>
            <div className="relative">
              <button
                onClick={handleContactClick}
                className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors duration-200"
              >
                Contact
              </button>
              {showEmailBubble && (
                <div className="absolute right-0 mt-2 w-64 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 p-4 z-10">
                  <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                    Get in touch:
                  </div>
                  <button
                    onClick={handleEmailClick}
                    className="w-full text-left bg-blue-50 hover:bg-blue-100 dark:bg-blue-900 dark:hover:bg-blue-800 text-blue-700 dark:text-blue-300 px-3 py-2 rounded transition-colors duration-200"
                  >
                    📧 frick.wu@torontomu.ca
                  </button>
                  <div className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                    Click to copy email address
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}