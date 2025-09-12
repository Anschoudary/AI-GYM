import { POSE_LANDMARKS } from '@mediapipe/pose';
import { calculateAngle } from './poseUtils';

// --- State Object Structure ---
// {
//   stage: 'down' | 'up' | 'start', // Tracks the current phase of the movement
//   feedback: 'Initial message',   // Real-time advice for the user
//   repCount: 0,                   // The number of successful repetitions
//   errorCount: 0                  // Optional: to track bad reps
// }

/**
 * Main function to process landmarks for a given exercise.
 * @param {object} landmarks The pose landmarks from MediaPipe.
 * @param {string} exerciseName The name of the exercise being performed.
 * @param {object} state The current state object for the exercise.
 * @returns {object} The updated state object.
 */
export function processExercise(landmarks, exerciseName, state) {
  switch (exerciseName) {
    case 'Squats':
      return processSquats(landmarks, state);
    case 'Push-ups':
      return processPushups(landmarks, state);
    case 'Plank':
      return processPlank(landmarks, state);
    case 'Bicep Curls':
      return processBicepCurls(landmarks, state);
    default:
      return state; // Return original state if exercise is not found
  }
}

// --- Logic for Bicep Curls (as a reference) ---
function processBicepCurls(landmarks, state) {
  let newStage = state.stage;
  let newFeedback = state.feedback;
  let newRepCount = state.repCount;

  try {
    const leftShoulder = landmarks[POSE_LANDMARKS.LEFT_SHOULDER];
    const leftElbow = landmarks[POSE_LANDMARKS.LEFT_ELBOW];
    const leftWrist = landmarks[POSE_LANDMARKS.LEFT_WRIST];
    const rightShoulder = landmarks[POSE_LANDMARKS.RIGHT_SHOULDER];
    const rightElbow = landmarks[POSE_LANDMARKS.RIGHT_ELBOW];
    const rightWrist = landmarks[POSE_LANDMARKS.RIGHT_WRIST];

    const leftAngle = calculateAngle(leftShoulder, leftElbow, leftWrist);
    const rightAngle = calculateAngle(rightShoulder, rightElbow, rightWrist);
    
    const activeAngle = Math.min(leftAngle, rightAngle);

    if (activeAngle < 60 && state.stage === 'down') {
      newStage = 'up';
      newFeedback = 'Good Rep!';
      newRepCount++;
    }
    if (activeAngle > 120 && state.stage === 'up') {
      newStage = 'down';
      newFeedback = 'Extend Fully!';
    }
  } catch (error) { /* Landmarks not visible */ }
  
  return { ...state, stage: newStage, feedback: newFeedback, repCount: newRepCount };
}

// --- Logic for Squats ---
function processSquats(landmarks, state) {
  let newStage = state.stage;
  let newFeedback = state.feedback;
  let newRepCount = state.repCount;

  try {
    // We use the average of both knees and hips for stability
    const leftHip = landmarks[POSE_LANDMARKS.LEFT_HIP];
    const leftKnee = landmarks[POSE_LANDMARKS.LEFT_KNEE];
    const leftAnkle = landmarks[POSE_LANDMARKS.LEFT_ANKLE];
    const rightHip = landmarks[POSE_LANDMARKS.RIGHT_HIP];
    const rightKnee = landmarks[POSE_LANDMARKS.RIGHT_KNEE];
    const rightAnkle = landmarks[POSE_LANDMARKS.RIGHT_ANKLE];

    const kneeAngle = (calculateAngle(leftHip, leftKnee, leftAnkle) + calculateAngle(rightHip, rightKnee, rightAnkle)) / 2;
    const hipAngle = (calculateAngle(leftShoulder, leftHip, leftKnee) + calculateAngle(rightShoulder, rightHip, rightKnee)) / 2;

    if (kneeAngle < 100 && hipAngle < 100 && state.stage === 'up') {
      newStage = 'down';
      newFeedback = 'Excellent Depth!';
      newRepCount++;
    }
    if (kneeAngle > 160 && hipAngle > 160 && state.stage === 'down') {
      newStage = 'up';
      newFeedback = 'Stand Up Fully!';
    }
  } catch (error) { /* Landmarks not visible */ }

  return { ...state, stage: newStage, feedback: newFeedback, repCount: newRepCount };
}


// --- Logic for Push-ups ---
function processPushups(landmarks, state) {
  let newStage = state.stage;
  let newFeedback = state.feedback;
  let newRepCount = state.repCount;

  try {
    const leftShoulder = landmarks[POSE_LANDMARKS.LEFT_SHOULDER];
    const leftElbow = landmarks[POSE_LANDMARKS.LEFT_ELBOW];
    const leftWrist = landmarks[POSE_LANDMARKS.LEFT_WRIST];
    const rightShoulder = landmarks[POSE_LANDMARKS.RIGHT_SHOULDER];
    const rightElbow = landmarks[POSE_LANDMARKS.RIGHT_ELBOW];
    const rightWrist = landmarks[POSE_LANDMARKS.RIGHT_WRIST];
    
    const elbowAngle = (calculateAngle(leftShoulder, leftElbow, leftWrist) + calculateAngle(rightShoulder, rightElbow, rightWrist)) / 2;

    // Check for straight back (optional but good for feedback)
    const leftHip = landmarks[POSE_LANDMARKS.LEFT_HIP];
    const backAngle = calculateAngle(leftElbow, leftShoulder, leftHip);
    if (backAngle < 160 || backAngle > 200) {
        newFeedback = "Keep your back straight!";
    }

    if (elbowAngle < 90 && state.stage === 'up') {
      newStage = 'down';
      newFeedback = 'Great Push!';
      newRepCount++;
    }
    if (elbowAngle > 160 && state.stage === 'down') {
      newStage = 'up';
      newFeedback = 'Lock Out!';
    }
  } catch (error) { /* Landmarks not visible */ }

  return { ...state, stage: newStage, feedback: newFeedback, repCount: newRepCount };
}


// --- Logic for Plank ---
// Planks are timed, so we don't count reps. We check form and provide feedback.
function processPlank(landmarks, state) {
  let newFeedback = 'Hold Steady!';

  try {
    const leftShoulder = landmarks[POSE_LANDMARKS.LEFT_SHOULDER];
    const leftHip = landmarks[POSE_LANDMARKS.LEFT_HIP];
    const leftAnkle = landmarks[POSE_LANDMARKS.LEFT_ANKLE];
    
    // Check for straight body line
    const bodyAngle = calculateAngle(leftShoulder, leftHip, leftAnkle);
    
    if (bodyAngle < 160) {
      newFeedback = "Hips are too low!";
    } else if (bodyAngle > 200) {
      newFeedback = "Hips are too high!";
    } else {
      newFeedback = "Perfect Form! Hold it!";
    }
  } catch (error) { /* Landmarks not visible */ }
  
  // Rep count doesn't change for a plank.
  return { ...state, feedback: newFeedback };
}