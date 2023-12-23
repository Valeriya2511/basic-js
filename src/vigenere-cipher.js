const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  
  constructor(value = true) {
    this.value = value;
    this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }

  encrypt(string, key) {
    if (!string || !key) {
      throw new Error('Incorrect arguments!');
    }

    let scringUpper = string.toUpperCase();
    let keyUpper = key.toUpperCase();
    let result = '';
    let count = 0;

    if (scringUpper.length > keyUpper.length) {
      keyUpper = keyUpper.repeat(Math.ceil(scringUpper.length / keyUpper.length)).slice(0, scringUpper.length);
    }

    for (let i = 0; i < scringUpper.length; i++) {
      if (this.alphabet.includes(scringUpper[i])) {
        result += this.alphabet[(this.alphabet.indexOf(scringUpper[i]) + this.alphabet.indexOf(keyUpper[i - count])) % this.alphabet.length];
      } else {
        result += scringUpper[i];
        count += 1;
      }
    }
    if (this.value === false) {
      return result.split('').reverse().join('');
    }
    return result;
  }

  decrypt(string, key) {
    if (!string || !key) {
      throw new Error('Incorrect arguments!');
    }

    const scringUpper = string.toUpperCase();
    let keyUpper = key.toUpperCase();
    let result = '';
    let count = 0;

    if (scringUpper.length > keyUpper.length) {
      keyUpper = keyUpper.repeat(Math.ceil(scringUpper.length / keyUpper.length)).slice(0, scringUpper.length);
    }
    
    for (let i = 0; i < scringUpper.length; i += 1) {
      if (this.alphabet.includes(scringUpper[i])) {
        result += this.alphabet[(this.alphabet.indexOf(scringUpper[i]) - this.alphabet.indexOf(keyUpper[i - count]) + this.alphabet.length) % this.alphabet.length];
      } else {
        result += scringUpper[i];
        count += 1;
      }
    }
    if (this.value === false) {
      return result.split('').reverse().join('');
    }
    return result;
  }
}

module.exports = {
  VigenereCipheringMachine
};
