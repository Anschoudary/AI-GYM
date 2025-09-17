import React from 'react';
import { useParams } from 'react-router-dom';
import { gymsData } from '../data/gyms';
import TrainerCard from '../TrainerCard';
import { FaStar, FaMapMarkerAlt } from 'react-icons/fa';

const GymPage = () => {
  // Get the 'id' from the URL (e.g., /gym/1 -> id will be "1")
  const { id } = useParams();
  
  // Find the specific gym from our data using the id.
  // Note: useParams returns a string, so we convert it to a number.
  const gym = gymsData.find(g => g.id === parseInt(id));

  // If no gym is found for the given id, show a message.
  if (!gym) {
    return (
      <div className="bg-[#0a0a0a] min-h-screen flex items-center justify-center text-white">
        <h1 className="text-3xl font-bold">Gym not found!</h1>
      </div>
    );
  }

  return (
    <div className="bg-[#0a0a0a] min-h-screen py-12">
      <div className="container mx-auto px-6">
        {/* Gym Header Section */}
        <div className="relative rounded-lg overflow-hidden h-96 mb-8">
          <img src={gym.image} alt={gym.name} className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-end p-8">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white">{gym.name}</h1>
            <div className="flex items-center text-[#f5f5f5] mt-2">
              <FaMapMarkerAlt className="mr-2" />
              <p>{gym.address}</p>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Column: Description & Trainers */}
          <div className="lg:col-span-2 space-y-8">
            {/* Description */}
            <div className="bg-[#121212] p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-[#f5f5f5] mb-4">About {gym.name}</h2>
              <p className="text-[#a3a3a3] leading-relaxed">{gym.description}</p>
            </div>

            {/* Trainers */}
            <div className="bg-[#121212] p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-[#f5f5f5] mb-4">Meet Our Trainers</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {gym.trainers.map(trainer => (
                  <TrainerCard key={trainer.id} trainer={trainer} />
                ))}
              </div>
            </div>
          </div>

          {/* Right Column (Sidebar): Key Info */}
          <div className="bg-[#121212] p-6 rounded-lg shadow-lg h-fit">
            <h3 className="text-xl font-bold text-[#f5f5f5] mb-4 border-b border-[#333] pb-3">Key Information</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center text-lg">
                <span className="text-[#a3a3a3]">Rating:</span>
                <span className="flex items-center font-bold text-white"><FaStar className="text-yellow-400 mr-2" /> {gym.rating.toFixed(1)}</span>
              </div>
              <div className="flex justify-between items-center text-lg">
                <span className="text-[#a3a3a3]">Pricing:</span>
                <span className="font-bold text-white">{gym.pricing}</span>
              </div>
              <div className="flex justify-between items-center text-lg">
                <span className="text-[#a3a3a3]">Access:</span>
                <span className="font-bold text-white">{gym.gender}</span>
              </div>
              <div>
                <h4 className="text-lg text-[#a3a3a3] mb-2">Amenities:</h4>
                <div className="flex flex-wrap gap-2">
                  {gym.amenities.map(amenity => (
                    <span key={amenity} className="bg-[#dc2626] text-white text-sm font-semibold px-3 py-1 rounded-full">
                      {amenity}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GymPage;