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
  let result = '';
  let resultObj = '';
  let endStr='';
  if (!options.hasOwnProperty('addition')){
      options.addition = ''
  };
      if (!options.hasOwnProperty('repeatTimes')){
      options.repeatTimes = 1
  };
  if (!options.hasOwnProperty('separator')){
      options.separator = '+'
  }
  if (!options.hasOwnProperty('additionRepeatTimes')){
      options.additionRepeatTimes = 1
  }
  if (!options.hasOwnProperty('additionSeparator')){
      options.additionSeparator = '|'
  }
  
  for (i=0; i<options.additionRepeatTimes; i++){
  resultObj += options.addition;
  if (i<options.additionRepeatTimes-1){
      resultObj += options.additionSeparator;
      }
  }
  result = str+resultObj
  for(j=0; j<options.repeatTimes; j++){
      endStr +=result;
      if (j<options.repeatTimes-1){
          endStr += options.separator
      }
  }
  return endStr
}

module.exports = {
  repeater
};
