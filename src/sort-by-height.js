const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let resultArr = [];
  let index = 0;
  let positiveNumbers = arr.filter((el) => el !== -1).sort((a, b) => a - b)

  for (let elem of arr) {
    if (elem === -1) {
      resultArr.push(elem)
    } else {
      resultArr.push(positiveNumbers[index++])
    }
  }

  return resultArr;
}

module.exports = {
  sortByHeight
};
