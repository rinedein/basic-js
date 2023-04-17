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
  constructor(isDirect = true) {
    this.isDirect = isDirect;
  }

  encrypt(message, key) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }

    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const fullKey = key.repeat(Math.ceil(message.length / key.length)).toUpperCase();
    let result = '';

    for (let i = 0, j = 0; i < message.length; i++) {
      const char = message[i].toUpperCase();
      if (alphabet.includes(char)) {
        const keyChar = fullKey[j];
        const charCode = alphabet.indexOf(char);
        const keyCode = alphabet.indexOf(keyChar);
        const shiftedCode = (charCode + keyCode) % alphabet.length;
        const shiftedChar = alphabet[shiftedCode];
        result += shiftedChar;
        j++;
      } else {
        result += char;
      }
    }

    return this.isDirect ? result : result.split('').reverse().join('');
  }

  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) {
      throw new Error('Incorrect arguments!');
    }

    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const fullKey = key.repeat(Math.ceil(encryptedMessage.length / key.length)).toUpperCase();
    let result = '';

    for (let i = 0, j = 0; i < encryptedMessage.length; i++) {
      const char = encryptedMessage[i].toUpperCase();
      if (alphabet.includes(char)) {
        const keyChar = fullKey[j];
        const charCode = alphabet.indexOf(char);
        const keyCode = alphabet.indexOf(keyChar);
        const shiftedCode = (charCode - keyCode + alphabet.length) % alphabet.length;
        const shiftedChar = alphabet[shiftedCode];
        result += shiftedChar;
        j++;
      } else {
        result += char;
      }
    }

    return this.isDirect ? result : result.split('').reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};