import React, { useRef, useEffect, useState } from 'react';
import { Pose } from '@mediapipe/pose';
import { drawConnectors, drawLandmarks } from '@mediapipe/drawing_utils';
import { POSE_CONNECTIONS } from '@mediapipe/pose';
import Webcam from 'react-webcam';
// --- CORRECT: Import the exercise engine ---
import { processExercise } from '../utils/exerciseLogic';

const PoseTracker = ({ onWorkoutFinish, exercise }) => {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);
  
  // --- CORRECT LIFECYCLE MANAGEMENT ---
  // Store the MediaPipe instance and interval ID in refs to prevent re-initialization
  const poseRef = useRef(null);
  const intervalRef = useRef(null);

  // Use a single state object for all exercise-related data
  const [exerciseState, setExerciseState] = useState({
    repCount: 0,
    feedback: `Get ready for ${exercise.name}...`,
    stage: exercise.name === 'Plank' ? 'start' : (exercise.name === 'Squats' || exercise.name === 'Push-ups') ? 'up' : 'down',
  });

  // This useEffect handles the initialization and cleanup of the MediaPipe instance.
  // The empty dependency array [] ensures it runs ONLY ONCE when the component mounts
  // and the cleanup function runs ONLY ONCE when it unmounts. This is the key to stability.
  useEffect(() => {
    // Initialize MediaPipe Pose
    const pose = new Pose({
      locateFile: (file) => `/mediapipe/${file}`,
    });
    
    pose.setOptions({
      modelComplexity: 1,
      smoothLandmarks: true,
      minDetectionConfidence: 0.5,
      minTrackingConfidence: 0.5,
    });

    // The onResults function is now stable and doesn't depend on changing state
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

        // --- CORRECT: Use the exercise engine to get the new state ---
        // We pass a function to setState to ensure we always have the latest state
        setExerciseState(prevState => processExercise(results.poseLandmarks, exercise.name, prevState));
      }
      canvasCtx.restore();
    };

    pose.onResults(onResults);
    poseRef.current = pose; // Store the instance in the ref

    // Start the frame sending loop
    intervalRef.current = setInterval(() => {
      if (webcamRef.current && webcamRef.current.video && webcamRef.current.video.readyState === 4) {
        poseRef.current.send({ image: webcamRef.current.video });
      }
    }, 100);

    // --- CRUCIAL CLEANUP FUNCTION ---
    // This function is called when the component is unmounted (e.g., "Finish Workout" is clicked)
    return () => {
      console.log("Cleaning up PoseTracker: Stopping interval and closing pose model.");
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      if (poseRef.current) {
        poseRef.current.close();
      }
    };
  }, [exercise.name]); // The effect depends only on exercise.name, so it only re-runs if the exercise changes (which it won't here).

  return (
    <div className="relative w-full h-screen bg-black">
      <div className="absolute inset-0 z-0">
        <Webcam
          ref={webcamRef}
          audio={false}
          mirrored={true}
          className="w-full h-full object-cover"
        />
        <canvas
          ref={canvasRef}
          className="absolute top-0 left-0 w-full h-full"
        />
      </div>
      
      <div className="absolute top-4 left-4 z-10 bg-[#121212] bg-opacity-80 p-4 rounded-lg text-[#f5f5f5] w-48">
        <h3 className="text-xl font-bold text-[#dc2626]">{exercise.name}</h3>
        <p className="text-5xl font-extrabold my-2">{exerciseState.repCount}</p>
        <p className="text-lg font-semibold">{exercise.name === 'Plank' ? 'HOLD' : 'REPS'}</p>
      </div>

      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-10 bg-[#121212] bg-opacity-80 p-3 rounded-full text-center text-[#f5f5f5] font-semibold text-lg">
        <p>{exerciseState.feedback}</p>
      </div>

      <div className="absolute bottom-4 left-4 right-4 z-10">
        <button 
            onClick={() => onWorkoutFinish(exerciseState.repCount, exercise)}
            className="w-full max-w-xs mx-auto bg-[#dc2626] hover:bg-[#b91c1c] text-white font-bold py-3 px-8 rounded-full text-lg uppercase transition-transform duration-300 hover:scale-105"
        >
            Finish Workout
        </button>
      </div>
    </div>
  );
};

export default PoseTracker;