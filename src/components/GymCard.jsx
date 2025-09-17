import React from 'react';
import { FaStar, FaMapMarkerAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // <-- IMPORT Link

const GymCard = ({ gym }) => {
  const { id, name, image, address, rating, pricing, distance } = gym;

  const getPricingColor = (level) => {
    switch (level) {
      case 'Premium': return 'bg-yellow-500';
      case 'Standard': return 'bg-blue-500';
      case 'Basic': return 'bg-green-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="bg-[#121212] rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#dc2626]/20">
      <img src={image} alt={name} className="w-full h-48 object-cover" />
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-[#f5f5f5]">{name}</h3>
          <div className="flex items-center bg-[#0a0a0a] px-2 py-1 rounded-full">
            <FaStar className="text-yellow-400 mr-1" />
            <span className="text-[#f5f5f5] font-semibold">{rating.toFixed(1)}</span>
          </div>
        </div>
        <div className="flex items-center justify-between text-[#a3a3a3] mb-4">
          <p className="flex items-center"><FaMapMarkerAlt className="mr-2 flex-shrink-0" /> {address}</p>
          
          {/* --- NEW: Conditionally display distance --- */}
          {distance !== null && (
            <span className="text-sm font-semibold text-white bg-[#dc2626] px-2 py-1 rounded-md ml-2 flex-shrink-0">
              {distance.toFixed(1)} mi
            </span>
          )}
        </div>
        <div className="flex justify-between items-center">
          <span className={`text-xs font-semibold inline-block py-1 px-3 uppercase rounded-full text-white ${getPricingColor(pricing)}`}>
            {pricing}
          </span>
          <Link to={`/gym/${id}`} className="text-sm font-semibold text-[#dc2626] hover:text-[#b91c1c] transition-colors">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GymCard;
