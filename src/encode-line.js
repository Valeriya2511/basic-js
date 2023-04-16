const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let y = [];
  let t = 1;
  let st = '';
  let arr = str.split('');
  for(let i = 0; i < arr.length; i++){
    if (arr[i] === arr[i+1]) {
      t += 1
    } else {
      if (t === 1) t = '';
      st += `${t}${arr[i]}`;
      t=1
    }
  }
  return st
}

module.exports = {
  encodeLine
};
