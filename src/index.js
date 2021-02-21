
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (!matrix || !matrix.length) return [];
  
  const res = [];

  for (let i = 0, l = matrix.length; i < l; i++) {
    res[i] = i % 2 ? matrix[i].reverse() : matrix[i];    
  }
  
  return res.toString().split(',');
}
