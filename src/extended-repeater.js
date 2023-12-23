const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  if (options.repeatTimes === undefined) {
    options.repeatTimes = 1;
  }

  if (options.separator === undefined) {
    options.separator = '+';
  }

  if (options.additionRepeatTimes === undefined) {
    options.additionRepeatTimes = 1;
  }

  let arr2 = [];

  for (let i = 0; i < options.additionRepeatTimes; i++) {
    if (options.addition === null) {
      arr2.push(`${options.addition}`)
    } else {
      arr2.push(options.addition)
    }
  }

  let arr = [];

  for(let i = 0; i < options.repeatTimes; i++) {
    if (options.additionSeparator === undefined) {
      arr.push(`${str}${arr2.join('|')}`)
    } else {
      arr.push(`${str}${arr2.join(`${options.additionSeparator}`)}`)
    }
  }
  
  return arr.join(`${options.separator}`)
}

module.exports = {
  repeater
};
