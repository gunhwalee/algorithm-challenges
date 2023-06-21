/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
const kClosest = function(points, k) {
  const distances = [];
  
  for (const point of points) {
    distances.push({
      value: getDistance(point),
      point,
    });
  }
  
  if (distances.length > 1) {
    distances.sort((a, b) => a.value - b.value );
  }

  const result = distances.map((element) => element.point);
  result.splice(k, result.length);

  return result;
};

function getDistance(point) {
  const [x, y] = point;
  
  return Math.sqrt(x * x + y * y);
}