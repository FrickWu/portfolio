import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <h1 className="text-xl font-bold text-gray-900 dark:text-white">
              fffffrick
            </h1>
          </div>
          <div className="flex items-center space-x-8">
            <Link
              href="https://github.com/FrickWu"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors duration-200"
            >
              github
            </Link>
            <Link
              href="https://www.linkedin.com/in/frick-wu/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors duration-200"
            >
              linkedin
            </Link>
            <Link
              href="https://drive.google.com/file/d/1x5uVe2gZU0G_BHfXl4XKoyxJF7L5T1_n/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors duration-200"
            >
              resume
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}