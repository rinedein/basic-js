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
  const repeatTimes = options.repeatTimes || 1;
  const separator = options.separator ?? '+';
  const addition = (options.addition !== undefined) ? String(options.addition) : '';
  const additionRepeatTimes = options.additionRepeatTimes || 1;
  const additionSeparator = options.additionSeparator ?? '|';

  const additionString = (additionRepeatTimes > 0) ? (addition + additionSeparator).repeat(additionRepeatTimes - 1) + addition : '';

  const repeatedString = (str + additionString + separator).repeat(repeatTimes);

  return repeatedString.slice(0, repeatedString.length - separator.length);
}

module.exports = {
  repeater
};
