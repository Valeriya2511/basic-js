const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) throw new Error ('\'arr\' parameter must be an instance of the Array!')
  let  lengthArr = arr.length
  let a = [];
  let j = 0;

  if (arr.length > 0) {
    arr.forEach((elem, index) => {
      if (elem === '--double-next') {
        if(arr[index+1] === undefined) elem = undefined
        a.push(arr[index+1])
      } else if(elem === '--discard-prev'){
        if(arr[index-1] === undefined) elem = undefined
        a.pop(arr[index+1])
      } else if (elem === '--double-prev') {
        if (arr[index-1] === undefined) elem = undefined;
        a.push(arr[index-1])
      } else if (elem === '--discard-next'){
        if(arr[index+1] === undefined) elem = undefined;
        arr[index+1] = undefined
      } else {
        a.push(elem)
      }
    })
  }

  return a.filter(el => el !== undefined)
}

module.exports = {
  transform
};
