
import React, { useState } from 'react';
import CustomButton from './CustomButton';
import { useNavigate } from 'react-router-dom';

const HeroSection: React.FC = () => {
  const navigate = useNavigate();
  const [location, setLocation] = useState('');
  
  const handleSearch = () => {
    const searchParams = new URLSearchParams();
    if (location) searchParams.append('location', location);
    
    navigate(`/search-results?${searchParams.toString()}`);
  };
  
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
          Discover a Place <br />
          <span className="text-terra-gold">You'll Love to Live</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto">
          Find your perfect home in Nigeria's most desirable locations with verified properties and trusted agents.
        </p>

        {/* Search Form */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 max-w-2xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Enter location, city, or area"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full px-4 py-3 rounded-md bg-white/20 text-white placeholder-gray-300 border border-white/30 focus:outline-none focus:ring-2 focus:ring-terra-gold backdrop-blur-sm"
              />
            </div>
            <div className="flex-shrink-0">
              <CustomButton 
                variant="primary"
                size="lg"
                className="w-full md:w-auto px-8"
                onClick={handleSearch}
              >
                View Properties
              </CustomButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
