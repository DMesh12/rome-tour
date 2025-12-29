import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { artworkData } from './data/artworkData';
import Sidebar from './components/Sidebar';
import HomePage from './components/HomePage';
import ArtPage from './components/ArtPage';
import MapPage from './components/MapPage';
import RecreationPage from './components/RecreationPage';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-stone-100 font-sans text-right text-stone-800" dir="rtl">
      {/* Mobile Nav Button */}
      <div className="md:hidden bg-stone-900 text-amber-50 p-4 flex justify-between items-center sticky top-0 z-50 shadow-md">
        <h1 className="font-serif font-bold text-xl tracking-wide">סיור ברומא הבארוקית</h1>
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 hover:bg-white/10 rounded-full transition">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div className="flex flex-col md:flex-row min-h-screen">
        {/* Sidebar Navigation */}
        <Sidebar
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />

        {/* Main Content Area */}
        <main className="flex-1 p-6 md:p-16 max-w-7xl mx-auto w-full bg-stone-100 min-h-screen">
          {activeTab === 'home' && <HomePage setActiveTab={setActiveTab} />}
          {activeTab === 'painting' && <ArtPage data={artworkData.painting} />}
          {activeTab === 'architecture' && <ArtPage data={artworkData.architecture} />}
          {activeTab === 'sculpture' && <ArtPage data={artworkData.sculpture} />}
          {activeTab === 'map' && <MapPage />}
          {activeTab === 'recreation' && <RecreationPage />}
        </main>
      </div>
    </div>
  );
}