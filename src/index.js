
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (!matrix || !matrix.length) return [];

  for (let i = 0, l = matrix.length; i < l; i++) {
    if (i % 2) {
      matrix[i] = matrix[i].reverse();
    }
  }

  return matrix.flat();
}
