import React from 'react';
import { useAuth } from '../context/AuthContext';
import { FiTarget, FiActivity, FiCpu, FiPlus } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const DashboardPage = () => {
  const { user } = useAuth();

  return (
    <div className="bg-[#0a0a0a] min-h-screen py-12">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-3xl md:text-4xl font-extrabold text-[#f5f5f5]">
            Welcome Back, <span className="text-[#dc2626]">{user?.username}</span>!
          </h1>
          <p className="text-lg text-[#a3a3a3] mt-2">Ready to crush your goals today?</p>
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Content Area (Workout History & Stats) */}
          <div className="lg:col-span-2 space-y-8">
            {/* Start New Workout Card */}
            <div className="bg-[#121212] p-6 rounded-lg shadow-lg flex flex-col sm:flex-row items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-[#f5f5f5]">Start a New Session</h2>
                <p className="text-[#a3a3a3] mt-1">Jump right into your next workout with the AI Trainer.</p>
              </div>
              <Link to="/aitools" className="mt-4 sm:mt-0 w-full sm:w-auto flex items-center justify-center gap-2 bg-[#dc2626] hover:bg-[#b91c1c] text-white font-bold py-3 px-6 rounded-full text-lg transition-transform duration-300 hover:scale-105">
                <FiCpu />
                <span>Start Training</span>
              </Link>
            </div>
            
            {/* Workout History Card */}
            <div className="bg-[#121212] p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-[#f5f5f5] mb-4">Recent Activity</h2>
              <div className="space-y-4">
                {/* This would be mapped from real data */}
                <div className="flex justify-between items-center bg-[#0a0a0a] p-4 rounded-md">
                  <div>
                    <p className="font-bold text-[#f5f5f5]">Bicep Curls</p>
                    <p className="text-sm text-[#a3a3a3]">AI Session - 25 Reps</p>
                  </div>
                  <p className="text-sm text-[#a3a3a3]">Today</p>
                </div>
                <div className="flex justify-between items-center bg-[#0a0a0a] p-4 rounded-md">
                  <div>
                    <p className="font-bold text-[#f5f5f5]">Powerhouse Fitness</p>
                    <p className="text-sm text-[#a3a3a3]">Gym Check-in</p>
                  </div>
                  <p className="text-sm text-[#a3a3a3]">Yesterday</p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar Area (Goals & Stats) */}
          <div className="bg-[#121212] p-6 rounded-lg shadow-lg space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-[#f5f5f5] mb-4 flex items-center gap-2"><FiTarget/> Weekly Goals</h2>
              <div className="space-y-3">
                <p className="text-[#a3a3a3]">Workouts: 2 / 4</p>
                <div className="w-full bg-gray-700 rounded-full h-2.5">
                  <div className="bg-[#dc2626] h-2.5 rounded-full" style={{width: '50%'}}></div>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-[#f5f5f5] mb-4 flex items-center gap-2"><FiActivity/> Progress Stats</h2>
              <div className="space-y-3">
                <p className="text-[#a3a3a3]"><span className="font-bold text-white">Squat Max:</span> 225 lbs</p>
                <p className="text-[#a3a3a3]"><span className="font-bold text-white">Body Weight:</span> 180 lbs</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default DashboardPage;