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
function encodeLine(st) {
  let count = 1;    
  let result = '';
  for(i=0; i < st.length; i++){
      if(st[i] === st[i+1]){
          count++;
      } else{
          result +=count+st[i]
          count=1
      }
  }
  return result.replaceAll('1','')
}

module.exports = {
  encodeLine
};
