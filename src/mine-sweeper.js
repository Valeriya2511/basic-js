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
  
  let newMatrix = [];
  let rows = matrix.length;
  let colums = matrix[0].length;

  newMatrix = Array.from({length: rows}, () => Array.from({length: colums}))


  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < colums; c++) {
      let arr = [
        [r - 1, c - 1],
        [r - 1, c],
        [r - 1, c + 1],
        [r, c - 1],
        [r, c + 1],
        [r + 1, c - 1],
        [r + 1, c],
        [r + 1, c + 1],
      ];

      let cell = 0;

      for (let i = 0; i < arr.length; i++) {
        if(arr[i][0] > - 1 && arr[i][1] > - 1 && arr[i][0] < rows && arr[i][1] < colums) {
          if(matrix[arr[i][0]][arr[i][1]] === true) {
            cell++;
          }
        } 
        newMatrix[r][c] = cell
      }
      
    }
  }

  return newMatrix;
}

module.exports = {
  minesweeper
};
