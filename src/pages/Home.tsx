import React from 'react';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import Introduction from '../components/Introduction';
import MenuSection from '../components/MenuSection';
import Footer from '../components/Footer';

function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <Introduction />
      <MenuSection />
      <Footer />
    </div>
  );
}

export default Home;