const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(cat) {
  let cats = 0;
  for(let elem of cat) {
    for (let el of elem) {
      if (el === '^^'){
        cats += 1
      }
    }
  }
  return cats
}

module.exports = {
  countCats
};
