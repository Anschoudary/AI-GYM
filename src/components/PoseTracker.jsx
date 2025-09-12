import React, { useRef, useEffect, useState } from 'react';
import { Pose } from '@mediapipe/pose';
import { drawConnectors, drawLandmarks } from '@mediapipe/drawing_utils';
import { POSE_CONNECTIONS } from '@mediapipe/pose';
import Webcam from 'react-webcam';
// --- NEW: Import our exercise engine ---
import { processExercise } from '../utils/exerciseLogic';

const PoseTracker = ({ onWorkoutFinish, exercise }) => {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);

  // --- NEW: Use a single state object to manage exercise state ---
  const [exerciseState, setExerciseState] = useState({
    repCount: 0,
    feedback: `Get ready for ${exercise.name}...`,
    stage: exercise.name === 'Plank' ? 'start' : 'up', // Plank starts, others assume 'up'
  });

  useEffect(() => {
    const pose = new Pose({
      locateFile: (file) => `/mediapipe/${file}`,
    });

    pose.setOptions({
      modelComplexity: 1,
      smoothLandmarks: true,
      minDetectionConfidence: 0.5,
      minTrackingConfidence: 0.5,
    });

    const onResults = (results) => {
      if (!webcamRef.current || !canvasRef.current) return;

      const canvasCtx = canvasRef.current.getContext('2d');
      const video = webcamRef.current.video;
      
      canvasRef.current.width = video.videoWidth;
      canvasRef.current.height = video.videoHeight;
      
      canvasCtx.save();
      canvasCtx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
      canvasCtx.translate(canvasRef.current.width, 0);
      canvasCtx.scale(-1, 1);
      
      if (results.poseLandmarks) {
        drawConnectors(canvasCtx, results.poseLandmarks, POSE_CONNECTIONS, { color: '#f5f5f5', lineWidth: 2 });
        drawLandmarks(canvasCtx, results.poseLandmarks, { color: '#dc2626', lineWidth: 2, radius: 4 });

        // --- NEW: Call the exercise engine to process landmarks ---
        const newState = processExercise(results.poseLandmarks, exercise.name, exerciseState);
        setExerciseState(newState); // Update the state with the result from the engine
      }
      canvasCtx.restore();
    };

    pose.onResults(onResults);

    const sendFrame = () => {
      if (webcamRef.current && webcamRef.current.video.readyState === 4) {
        pose.send({ image: webcamRef.current.video });
      }
    };

    const intervalId = setInterval(sendFrame, 100);
    return () => clearInterval(intervalId);
  }, [exercise.name, exerciseState]); // Re-run effect if exercise or state changes

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <Webcam
        ref={webcamRef}
        audio={false}
        mirrored={true}
        className="w-full h-auto rounded-lg"
      />
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full"
      />
      
      <div className="absolute top-4 left-4 bg-[#121212] bg-opacity-80 p-4 rounded-lg text-[#f5f5f5] w-48">
        <h3 className="text-xl font-bold text-[#dc2626]">{exercise.name}</h3>
        <p className="text-5xl font-extrabold my-2">{exerciseState.repCount}</p>
        <p className="text-lg font-semibold">{exercise.name === 'Plank' ? 'SECONDS (TBD)' : 'REPS'}</p>
      </div>
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 bg-[#121212] bg-opacity-80 p-3 rounded-full text-center text-[#f5f5f5] font-semibold text-lg">
        <p>{exerciseState.feedback}</p>
      </div>
      <button 
        onClick={() => onWorkoutFinish(exerciseState.repCount, exercise)}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-[#dc2626] hover:bg-[#b91c1c] text-white font-bold py-3 px-8 rounded-full text-lg uppercase transition-transform duration-300 hover:scale-105"
      >
        Finish Workout
      </button>
    </div>
  );
};

export default PoseTracker;