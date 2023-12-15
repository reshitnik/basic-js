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
  let count = 0;
  let longStr, shortStr;
  if (s2.length > s1.length){
      longStr = s2;
      shortStr = s1;
  } else {
      longStr = s1;
      shortStr = s2;
  }
  for (i=0; i < longStr.length; i++){
      if (shortStr.includes(longStr[i])){
          count+=1;
          shortStr = shortStr.replace(longStr[i],'');
      }
  }return count
}

module.exports = {
  getCommonCharacterCount
};
