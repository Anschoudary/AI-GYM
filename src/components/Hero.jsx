import React from 'react';

const Hero = () => {
  // Replace this with your own high-quality image URL or a local image
  const heroImageUrl = 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070&auto=format&fit=crop';

  return (
    <div
      className="relative flex items-center justify-center h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${heroImageUrl})` }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-70"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        {/* Main Headline */}
        <h1 
          className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-[#f5f5f5] uppercase tracking-wider leading-tight animation-fadeInUp"
          style={{ animationDelay: '200ms', opacity: 0 }} // Initial state for animation
        >
          Forge Your<span className="text-[#dc2626]"> Ultimate </span>Body
        </h1>

        {/* Motivational Quote */}
        <p 
          className="text-lg md:text-xl text-[#a3a3a3] max-w-2xl mx-auto mt-4 mb-8 italic animation-fadeInUp"
          style={{ animationDelay: '400ms', opacity: 0 }} // Initial state for animation
        >
          "The only bad workout is the one that didn't happen."
        </p>

        {/* Call to Action Buttons */}
        <div 
          className="flex flex-col sm:flex-row items-center justify-center gap-4 animation-fadeInUp"
          style={{ animationDelay: '600ms', opacity: 0 }} // Initial state for animation
        >
          <button 
            className="w-full sm:w-auto bg-[#dc2626] hover:bg-[#b91c1c] text-white font-bold py-3 px-8 rounded-full text-lg uppercase tracking-wide transition-transform duration-300 hover:scale-105" 
            onClick={() => window.location.href = '/gyms'} // Navigate to gyms page
          >
            Explore Gyms
          </button>
          <button 
            className="w-full sm:w-auto bg-transparent border-2 border-[#dc2626] text-[#dc2626] hover:bg-[#dc2626] hover:text-white font-bold py-3 px-8 rounded-full text-lg uppercase tracking-wide transition-all duration-300 hover:scale-105"
            onClick={() => window.location.href = '/aitools'} // Navigate to AI Coach page
          >
            Try AI Coach
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;