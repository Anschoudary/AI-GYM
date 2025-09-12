import React from 'react';
import { FaSearch, FaMapMarkerAlt } from 'react-icons/fa';

// const ALL_AMENITIES = ['Pool', 'Sauna', '24/7 Access', 'Parking', 'Yoga Classes'];

const Filters = ({ filters, setFilters, onNearMeClick, isLocating }) => {
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
  };

  // const handleAmenityChange = (e) => {
  //   const { value, checked } = e.target;
  //   setFilters(prev => {
  //     const newAmenities = checked
  //       ? [...prev.amenities, value]
  //       : prev.amenities.filter(amenity => amenity !== value);
  //     return { ...prev, amenities: newAmenities };
  //   });
  // };

  return (
    <div className="bg-[#121212] p-6 rounded-lg mb-8 shadow-lg space-y-6">
      {/* Top Row: Search Inputs */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        {/* Gym Name Search */}
        <div className="relative md:col-span-2">
          <input
            type="text" name="gymName" placeholder="Search by gym name..."
            value={filters.gymName} onChange={handleInputChange}
            className="w-full bg-[#0a0a0a] border-2 border-[#333] rounded-lg p-3 pl-10 text-[#f5f5f5] focus:outline-none focus:border-[#dc2626] transition-colors"
          />
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#a3a3a3]" />
        </div>

        {/* Location Text Search */}
        <div className="relative md:col-span-2">
          <input
            type="text" name="locationTerm" placeholder="City, Street, or State..."
            value={filters.locationTerm} onChange={handleInputChange}
            className="w-full bg-[#0a0a0a] border-2 border-[#333] rounded-lg p-3 pl-10 text-[#f5f5f5] focus:outline-none focus:border-[#dc2626] transition-colors"
          />
          <FaMapMarkerAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#a3a3a3]" />
        </div>
        
        {/* "Near Me" Button */}
        <button 
          onClick={onNearMeClick}
          disabled={isLocating}
          className="w-full flex items-center justify-center gap-2 bg-[#dc2626] hover:bg-[#b91c1c] text-white font-bold py-3 px-4 rounded-lg transition-colors disabled:bg-gray-500"
        >
          <FaMapMarkerAlt />
          {isLocating ? 'Locating...' : 'Near Me'}
        </button>
      </div>

      {/* Second Row: Main Filters (Rating, Gender, etc.) */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <select name="rating" value={filters.rating} onChange={handleInputChange} className="filter-select">
          <option value="0">Any Rating</option>
          <option value="4.5">4.5+ Stars</option>
          <option value="4">4.0+ Stars</option>
          <option value="3.5">3.5+ Stars</option>
        </select>
        <select name="gender" value={filters.gender} onChange={handleInputChange} className="filter-select">
          <option value="All">All Genders</option>
          <option value="Unisex">Unisex</option>
          <option value="Male Only">Male Only</option>
          <option value="Female Only">Female Only</option>
        </select>
        <select name="pricing" value={filters.pricing} onChange={handleInputChange} className="filter-select">
          <option value="All">All Pricing</option>
          <option value="Basic">Basic</option>
          <option value="Standard">Standard</option>
          <option value="Premium">Premium</option>
        </select>
        <select name="sortBy" value={filters.sortBy} onChange={handleInputChange} className="filter-select">
          <option value="default">Sort By</option>
          <option value="distance">Distance: Closest</option>
          <option value="rating_desc">Rating: High to Low</option>
          <option value="name_asc">Name: A to Z</option>
        </select>
      </div>

      {/* Third Row: Amenities */}
      {/* <div>
        <h3 className="text-[#f5f5f5] font-semibold mb-2">Amenities</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
          {ALL_AMENITIES.map(amenity => (
            <label key={amenity} className="flex items-center space-x-2 text-[#a3a3a3] cursor-pointer">
              <input type="checkbox" value={amenity} checked={filters.amenities.includes(amenity)} onChange={handleAmenityChange}
                className="form-checkbox h-5 w-5 text-[#dc2626] bg-[#0a0a0a] border-[#333] rounded focus:ring-[#dc2626]"
              />
              <span>{amenity}</span>
            </label>
          ))}
        </div>
      </div> */}
    </div>
  );
};

export default Filters;