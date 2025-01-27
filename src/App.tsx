import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Mangroves from './components/Mangroves';
import Phases from './components/Phases';
import Gallery from './components/Gallery';
import Sponsors from './components/Sponsors';
import Donate from './components/Donate';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { LanguageProvider } from './context/LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <div className="relative bg-green-50">
        <Navigation />
        <Hero />
        <About />
        <Mangroves />
        <Phases />
        <Gallery />
        <Sponsors />
        <Donate />
        <Contact />
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;