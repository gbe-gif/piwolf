import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BasilSection from './components/BasilSection';
import StorySection from './components/StorySection';
import CrewSection from './components/CrewSection';
import WorldSection from './components/WorldSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-noir-black min-h-screen text-gray-200 font-sans selection:bg-gold-accent selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <BasilSection />
        <StorySection />
        <CrewSection />
        <WorldSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;