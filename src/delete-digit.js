const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n){
  const str_n = String(n);
  let res = 0;
  for (i=0;i<str_n.length; i++){
      if(res < Number(str_n.replace(str_n[i],''))){
          res = Number(str_n.replace(str_n[i],''))
      }
  }
  return res
}

module.exports = {
  deleteDigit
};
