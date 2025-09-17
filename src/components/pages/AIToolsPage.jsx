// AIToolsPage.jsx
import React, { useState } from 'react';
import { exercisesData } from '../data/exercises';
import PoseTracker from '../PoseTracker';
import { FaYoutube } from 'react-icons/fa';

const AIToolsPage = () => {
  const [selectedExercise, setSelectedExercise] = useState(null);
  const [workoutSummary, setWorkoutSummary] = useState(null);

  // Function to handle finishing a workout
  const handleWorkoutFinish = (reps, exercise) => {
    setWorkoutSummary({ reps, exercise });
    setSelectedExercise(null); // Go back to the selection screen
  };

  // --- THIS IS THE CRUCIAL CHANGE ---
  // If a workout is active, render ONLY the PoseTracker component.
  // We have removed the wrapper div.
  if (selectedExercise) {
    return (
      <PoseTracker
        exercise={selectedExercise}
        onWorkoutFinish={handleWorkoutFinish}
      />
    );
  }

  // Otherwise, show the normal selection screen with its own padding and layout
  return (
    <div className="bg-[#0a0a0a] min-h-screen py-12">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#f5f5f5]">AI Vision Trainer</h1>
          <p className="text-lg text-[#a3a3a3] mt-2">Select an exercise to get started with real-time form tracking.</p>
        </div>

        {/* Workout Summary Section */}
        {workoutSummary && (
          <div className="bg-[#121212] p-6 rounded-lg mb-8 shadow-lg text-center">
            <h2 className="text-2xl font-bold text-[#f5f5f5]">Workout Complete!</h2>
            <p className="text-[#a3a3a3] mt-2">
              You completed <span className="text-[#dc2626] font-bold">{workoutSummary.reps} reps</span> of {workoutSummary.exercise.name}. Great job!
            </p>
            <a
              href={`https://www.youtube.com/watch?v=${workoutSummary.exercise.youtubeId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full transition-colors"
            >
              <FaYoutube /> Watch Tutorial for Better Form
            </a>
          </div>
        )}

        {/* Exercise Selection Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {exercisesData.map(exercise => (
            <div
              key={exercise.id}
              className="bg-[#121212] rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#dc2626]/20 cursor-pointer"
              onClick={() => {
                setSelectedExercise(exercise);
                setWorkoutSummary(null); // Clear previous summary
              }}
            >
              <img src={exercise.image} alt={exercise.name} className="w-full h-40 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-bold text-[#f5f5f5] mb-2">{exercise.name}</h3>
                <p className="text-sm text-[#a3a3a3]">{exercise.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AIToolsPage;
