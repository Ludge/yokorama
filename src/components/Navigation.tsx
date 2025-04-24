import React, { useState, useRef } from 'react';
import { Menu as MenuIcon, X, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleNavigation = () => {
    setIsMenuOpen(false);
    setIsOpen(false);
  };

  return (
    <nav className="fixed w-full bg-white shadow-md z-50 border-b border-gray-200 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" onClick={handleNavigation} className="flex items-center">
              <span className="text-2xl font-japanese text-indigo-900">横浜</span>
              <span className="ml-2 text-lg text-gray-600">YOKORAMA</span>
            </Link>
          </div>
          
          {/* Menu principal */}
          <div className="hidden md:flex items-center space-x-8">
            <div 
              className="relative inline-block"
              onMouseEnter={() => setIsMenuOpen(true)}
              onMouseLeave={() => setIsMenuOpen(false)}
            >
              <motion.div
                className="flex items-center text-gray-600 hover:text-indigo-900 transition-colors duration-200 cursor-pointer"
              >
                Notre carte
                <motion.div
                  animate={{ rotate: isMenuOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown className="ml-1 h-4 w-4" />
                </motion.div>
              </motion.div>
              
              {/* Sous-menu with contained dimensions */}
              <div className="absolute left-0 w-48" style={{ top: '100%' }}>
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ 
                    opacity: isMenuOpen ? 1 : 0,
                    y: isMenuOpen ? 0 : -10,
                    pointerEvents: isMenuOpen ? "auto" : "none"
                  }}
                  transition={{ duration: 0.2 }}
                  className="mt-2 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5"
                >
                  <div className="py-1" role="menu">
                    <Link
                      to="/menu/classique"
                      onClick={handleNavigation}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-900 transition-colors duration-200"
                      role="menuitem"
                    >
                      Menu
                    </Link>
                    <Link
                      to="/menu/hors-doeuvre"
                      onClick={handleNavigation}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-900 transition-colors duration-200"
                      role="menuitem"
                    >
                      Hors d'œuvre
                    </Link>
                    <Link
                      to="/menu/desserts"
                      onClick={handleNavigation}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-900 transition-colors duration-200"
                      role="menuitem"
                    >
                      Desserts
                    </Link>
                  </div>
                </motion.div>
              </div>
            </div>

            <Link 
              to="/contact" 
              onClick={handleNavigation}
              className="text-gray-600 hover:text-indigo-900 transition-colors duration-200"
            >
              Contact
            </Link>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-indigo-900 text-white px-6 py-2 rounded-full text-sm font-medium
                       hover:bg-indigo-800 transition-all duration-300 shadow-md
                       hover:shadow-lg hover:shadow-indigo-900/20"
            >
              Réserver
            </motion.button>
          </div>

          {/* Menu mobile */}
          <div className="md:hidden flex items-center">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-indigo-900 transition-colors duration-200"
            >
              {isOpen ? <X className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <div className="space-y-1">
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="w-full flex items-center justify-between px-3 py-2 text-gray-600 
                         hover:text-indigo-900 hover:bg-indigo-50 rounded-md transition-colors duration-200"
              >
                Notre carte
                <motion.div
                  animate={{ rotate: isMenuOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown className="h-4 w-4" />
                </motion.div>
              </motion.button>
              {isMenuOpen && (
                <div className="pl-4 space-y-1">
                  <Link
                    to="/menu/classique"
                    onClick={handleNavigation}
                    className="block px-3 py-2 text-gray-600 hover:text-indigo-900 
                             hover:bg-indigo-50 rounded-md transition-colors duration-200"
                  >
                    Menu
                  </Link>
                  <Link
                    to="/menu/hors-doeuvre"
                    onClick={handleNavigation}
                    className="block px-3 py-2 text-gray-600 hover:text-indigo-900 
                             hover:bg-indigo-50 rounded-md transition-colors duration-200"
                  >
                    Hors d'œuvre
                  </Link>
                  <Link
                    to="/menu/desserts"
                    onClick={handleNavigation}
                    className="block px-3 py-2 text-gray-600 hover:text-indigo-900 
                             hover:bg-indigo-50 rounded-md transition-colors duration-200"
                  >
                    Desserts
                  </Link>
                </div>
              )}
            </div>
            <Link 
              to="/contact"
              onClick={handleNavigation}
              className="block px-3 py-2 text-gray-600 hover:text-indigo-900 
                       hover:bg-indigo-50 rounded-md transition-colors duration-200"
            >
              Contact
            </Link>
            <motion.button
              whileTap={{ scale: 0.95 }}
              className="w-full text-left px-3 py-2 text-gray-600 hover:text-indigo-900 
                       hover:bg-indigo-50 rounded-md transition-colors duration-200"
            >
              Réserver
            </motion.button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;