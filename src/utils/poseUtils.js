/**
 * Calculates the angle between three 3D points (landmarks).
 * @param {object} a First point with x, y, z coordinates.
 * @param {object} b Second point (the vertex) with x, y, z coordinates.
 * @param {object} c Third point with x, y, z coordinates.
 * @returns {number} The angle in degrees.
 */
export function calculateAngle(a, b, c) {
  // Get the 3D coordinates
  const pointA = [a.x, a.y, a.z];
  const pointB = [b.x, b.y, b.z];
  const pointC = [c.x, c.y, c.z];

  // Calculate vectors
  const vectorAB = [pointA[0] - pointB[0], pointA[1] - pointB[1], pointA[2] - pointB[2]];
  const vectorCB = [pointC[0] - pointB[0], pointC[1] - pointB[1], pointC[2] - pointB[2]];

  // Calculate dot product
  const dotProduct = vectorAB[0] * vectorCB[0] + vectorAB[1] * vectorCB[1] + vectorAB[2] * vectorCB[2];

  // Calculate magnitude of vectors
  const magnitudeAB = Math.sqrt(vectorAB[0] ** 2 + vectorAB[1] ** 2 + vectorAB[2] ** 2);
  const magnitudeCB = Math.sqrt(vectorCB[0] ** 2 + vectorCB[1] ** 2 + vectorCB[2] ** 2);

  // Calculate the cosine of the angle
  const cosineOfAngle = dotProduct / (magnitudeAB * magnitudeCB);

  // Calculate the angle in radians and convert to degrees
  const angleRad = Math.acos(cosineOfAngle);
  let angleDeg = (angleRad * 180) / Math.PI;
  
  // Ensure the angle is not NaN, which can happen with perfect alignment
  if (isNaN(angleDeg)) {
    return 0.0;
  }

  return angleDeg;
}