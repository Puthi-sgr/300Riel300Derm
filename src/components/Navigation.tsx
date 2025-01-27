import React, { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();
  const { language, toggleLanguage, t } = useLanguage();
  
  const headerHeight = useTransform(scrollY, [0, 100], ['4rem', '3.5rem']);
  const headerBackground = useTransform(
    scrollY,
    [0, 100],
    ['rgba(242, 247, 242, 0)', 'rgba(242, 247, 242, 0.95)']
  );
  const headerShadow = useTransform(
    scrollY,
    [0, 100],
    ['0 0 0 transparent', '0 4px 6px -1px rgba(0, 0, 0, 0.1)']
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const navItems = ['home', 'about', 'gallery', 'donate', 'contact'];

  return (
    <motion.nav
      style={{
        height: headerHeight,
        backgroundColor: headerBackground,
        boxShadow: headerShadow,
      }}
      className="fixed w-full z-50 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex items-center justify-between h-full">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-shrink-0"
          >
            <span className="text-2xl font-bold text-eco-600">EcoVoice</span>
          </motion.div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-baseline space-x-4">
              {navItems.map((item, index) => (
                <motion.button
                  key={item}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection(item)}
                  className="text-earth-700 hover:text-eco-600 px-3 py-2 rounded-md text-sm font-medium capitalize"
                >
                  {t(`nav.${item}`)}
                </motion.button>
              ))}
            </div>
            
            {/* Language Toggle */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleLanguage}
              className="ml-4 p-2 rounded-full bg-eco-100 text-eco-600 hover:bg-eco-200 transition-colors"
            >
              <Globe className="w-5 h-5" />
              <span className="sr-only">
                {language === 'en' ? 'Switch to Khmer' : 'Switch to English'}
              </span>
            </motion.button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleLanguage}
              className="p-2 rounded-full bg-eco-100 text-eco-600 hover:bg-eco-200 transition-colors"
            >
              <Globe className="w-5 h-5" />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-earth-700 hover:text-eco-600 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <motion.div
        initial={false}
        animate={isOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden bg-eco-50 shadow-lg"
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navItems.map((item) => (
            <motion.button
              key={item}
              whileHover={{ scale: 1.02, x: 5 }}
              onClick={() => scrollToSection(item)}
              className="text-earth-700 hover:text-eco-600 block px-3 py-2 rounded-md text-base font-medium capitalize w-full text-left"
            >
              {t(`nav.${item}`)}
            </motion.button>
          ))}
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navigation;