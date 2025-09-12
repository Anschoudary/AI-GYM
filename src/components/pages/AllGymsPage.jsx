import React, { useState, useEffect, useMemo } from 'react';
import Filters from '../Filters';
import GymCard from '../GymCard';
import { gymsData } from '../data/gyms';
import { getDistanceFromLatLonInMiles } from '../../utils/geolocationUtils';

const AllGymsPage = () => {
  const [gymsWithDistance, setGymsWithDistance] = useState([]);
  const [isLocating, setIsLocating] = useState(false);
  const [filters, setFilters] = useState({
    gymName: '',      // Changed from searchTerm
    locationTerm: '', // New field for location text search
    rating: '0',
    gender: 'All',
    pricing: 'All',
    amenities: [],
    sortBy: 'default',
    userLat: null,
    userLng: null,
  });

  // Attach distance to each gym when user location is known
  useEffect(() => {
    // This effect runs whenever userLat/userLng changes
    const allGyms = gymsData.map(gym => {
      const distance = (filters.userLat && filters.userLng)
        ? getDistanceFromLatLonInMiles(filters.userLat, filters.userLng, gym.lat, gym.lng)
        : null;
      return { ...gym, distance };
    });
    setGymsWithDistance(allGyms);
  }, [filters.userLat, filters.userLng]);


  // The main filtering and sorting logic
  const filteredAndSortedGyms = useMemo(() => {
    let result = [...gymsWithDistance];

    // Filter by gym name
    if (filters.gymName) {
      result = result.filter(gym => gym.name.toLowerCase().includes(filters.gymName.toLowerCase()));
    }

    // Filter by location text
    if (filters.locationTerm) {
      result = result.filter(gym => gym.address.toLowerCase().includes(filters.locationTerm.toLowerCase()));
    }
    
    // Other filters remain the same
    if (parseFloat(filters.rating) > 0) {
      result = result.filter(gym => gym.rating >= parseFloat(filters.rating));
    }
    if (filters.gender !== 'All') {
      result = result.filter(gym => gym.gender === filters.gender);
    }
    if (filters.pricing !== 'All') {
      result = result.filter(gym => gym.pricing === filters.pricing);
    }
    if (filters.amenities.length > 0) {
      result = result.filter(gym => filters.amenities.every(amenity => gym.amenities.includes(amenity)));
    }

    // Sort the results
    switch (filters.sortBy) {
      case 'rating_desc':
        result.sort((a, b) => b.rating - a.rating);
        break;
      case 'distance':
        // Only sort by distance if it has been calculated
        if (result.every(gym => gym.distance !== null)) {
          result.sort((a, b) => a.distance - b.distance);
        }
        break;
      case 'name_asc':
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        break;
    }

    return result;
  }, [filters, gymsWithDistance]);

  const handleNearMeClick = () => {
    if (navigator.geolocation) {
      setIsLocating(true);
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setFilters(prev => ({
            ...prev,
            userLat: position.coords.latitude,
            userLng: position.coords.longitude,
            sortBy: 'distance', // Automatically sort by distance
          }));
          setIsLocating(false);
        },
        (error) => {
          console.error("Error getting location", error);
          alert("Could not get your location. Please ensure you have given permission.");
          setIsLocating(false);
        }
      );
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };

  return (
    <div className="bg-[#0a0a0a] min-h-screen py-12">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#f5f5f5]">Find Your Perfect Gym</h1>
          <p className="text-lg text-[#a3a3a3] mt-2">Use our advanced filters to find the right fit for you.</p>
        </div>
        
        <Filters 
          filters={filters} 
          setFilters={setFilters} 
          onNearMeClick={handleNearMeClick}
          isLocating={isLocating}
        />
        
        {filteredAndSortedGyms.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredAndSortedGyms.map(gym => (
              <GymCard key={gym.id} gym={gym} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <h2 className="text-2xl font-bold text-[#f5f5f5]">No Gyms Found</h2>
            <p className="text-[#a3a3a3] mt-2">Try adjusting your search terms or filters.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllGymsPage;