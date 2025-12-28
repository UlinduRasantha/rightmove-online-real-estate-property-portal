import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { assets } from '../assets/assets';

const HeroSection = () => {
  const [activeTab, setActiveTab] = useState('Buy');
  const tabs = ['Buy', 'Rent', 'Sold'];

  const placeholders = {
    Buy: 'Bath, NW3, or Leeds station',
    Rent: 'Bath, NW3, or Leeds station',
    Sold: 'School Road, SW4 7DD or York',
  };

  return (
    /* 1. OUTER WRAPPER: Centers the entire hero and adds the side spacing */
    <div className="w-full max-w-[1200px] mx-auto px-4 py-4">
      
      {/* 2. HERO CONTAINER: Added rounded-3xl and overflow-hidden to match the curve */}
      <div className="relative h-[450px] w-full flex items-center justify-center overflow-hidden rounded-3xl shadow-lg">
        
        {/* Background Image */}
        <img
          src={assets.homepageImage}
          className="absolute inset-0 w-full h-full object-cover"
          alt="Snowy street"
        />
        
        {/* Subtle Dark Overlay */}
        <div className="absolute inset-0 bg-black/10"></div>

        {/* Content Section */}
        <div className="relative z-10 w-full max-w-3xl px-6 flex flex-col items-center text-center">
          
          <h1 className="text-white text-4xl md:text-5xl font-bold mb-8 drop-shadow-md tracking-tight">
            <span className="text-[#24e5af]">believe</span> in finding it
            <br />
            <span className="text-2xl md:text-3xl font-semibold opacity-95">
              with the UK's largest choice of homes
            </span>
          </h1>

          {/* Search Box */}
          <div className="w-full bg-[#1e2235]/85 backdrop-blur-md rounded-2xl p-6 shadow-2xl text-left">
            
            {/* Tabs */}
            <div className="flex gap-8 mb-6 border-b border-white/10">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`pb-2 text-lg font-medium transition-all relative ${
                    activeTab === tab ? 'text-white' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {tab}
                  {activeTab === tab && (
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-white rounded-t-md" />
                  )}
                </button>
              ))}
            </div>

            {/* Input Area */}
            <div className="space-y-4">
              <p className="text-white font-bold text-sm">
                {activeTab === 'Sold' ? 'Search sold house prices' : `Search properties to ${activeTab.toLowerCase()}`}
              </p>
              
              <div className="flex flex-col md:flex-row gap-3">
                <div className="relative flex-grow">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder={placeholders[activeTab]}
                    className="w-full pl-12 pr-4 py-4 rounded-lg bg-white text-gray-900 focus:outline-none"
                  />
                </div>
                <button className="bg-[#24e5af] hover:bg-[#1cd1a0] text-[#1e2235] font-extrabold py-4 px-12 rounded-lg transition-colors shadow-sm">
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;