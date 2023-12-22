const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let obj = {};

  for (let elem of domains) {
    let x = elem.split('.').reverse(); 
    let str = '';

    x.forEach((el) => {
      str += '.' + el; 
      obj[str] = (obj[str] || 0) + 1;
    });
  };
  return obj;
}

module.exports = {
  getDNSStats
};
