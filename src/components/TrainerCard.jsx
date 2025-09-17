import React from 'react';

const TrainerCard = ({ trainer }) => {
  const { name, specialty, avatar } = trainer;

  return (
    <div className="bg-[#0a0a0a] p-4 rounded-lg text-center shadow-md">
      <img 
        src={avatar} 
        alt={name} 
        className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-[#dc2626]" 
      />
      <h4 className="text-lg font-bold text-[#f5f5f5]">{name}</h4>
      <p className="text-sm text-[#a3a3a3]">{specialty}</p>
    </div>
  );
};

export default TrainerCard;