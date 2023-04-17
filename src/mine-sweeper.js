const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;
  const result = [];

  for (let i = 0; i < rows; i++) {
    const row = [];
    for (let j = 0; j < cols; j++) {
      let count = 0;

      // Check top-left cell
      if (i > 0 && j > 0 && matrix[i - 1][j - 1]) {
        count++;
      }

      // Check top cell
      if (i > 0 && matrix[i - 1][j]) {
        count++;
      }

      // Check top-right cell
      if (i > 0 && j < cols - 1 && matrix[i - 1][j + 1]) {
        count++;
      }

      // Check left cell
      if (j > 0 && matrix[i][j - 1]) {
        count++;
      }

      // Check right cell
      if (j < cols - 1 && matrix[i][j + 1]) {
        count++;
      }

      // Check bottom-left cell
      if (i < rows - 1 && j > 0 && matrix[i + 1][j - 1]) {
        count++;
      }

      // Check bottom cell
      if (i < rows - 1 && matrix[i + 1][j]) {
        count++;
      }

      // Check bottom-right cell
      if (i < rows - 1 && j < cols - 1 && matrix[i + 1][j + 1]) {
        count++;
      }

      row.push(count);
    }
    result.push(row);
  }

  return result;
}

module.exports = {
  minesweeper
};
