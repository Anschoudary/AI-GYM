import React from 'react';

const galleryImages = [
  'https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=2069&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1548690312-e3b511d48c07?q=80&w=1974&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1549060279-7e168fcee0c2?q=80&w=2070&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1599058917212-d750089bc07e?q=80&w=2069&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1581009137042-c552e485697a?q=80&w=2070&auto=format&fit=crop'
];

const Gallery = () => {
  return (
    <section className="bg-[#0a0a0a] py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-sm font-bold uppercase tracking-widest text-[#dc2626] mb-2">
            Our Environment
          </h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-[#f5f5f5]">
            Gym Gallery
          </h3>
          <div className="mt-4 w-24 h-1 bg-[#dc2626] mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {galleryImages.map((src, index) => (
            <div key={index} className="overflow-hidden rounded-lg group">
              <img 
                src={src} 
                alt={`Gym gallery image ${index + 1}`} 
                className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;