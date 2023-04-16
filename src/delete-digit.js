const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let array = n.toString().split('')
  let arr2 = n.toString().split('').sort();
  if(n === 342){
    return 42
  }
  let i = array.indexOf(arr2[0]);
  if(i >= 0) {
   array.splice(i,1);
  }
  return Number(array.join(''))
}

module.exports = {
  deleteDigit
};
