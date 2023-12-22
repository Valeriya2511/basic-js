const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let quantity = 0;
  let str = s2;
 
  for (let i = 0; i < s1.length; i++) {
    if (str.indexOf(s1[i]) !== -1) {
      quantity += 1
      str = str.replace(s1[i], '')
      console.log(str)
    }
  }
  return quantity;
}

module.exports = {
  getCommonCharacterCount
};
