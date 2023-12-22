const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform (arr) {
  let a;
  for (i = 0; i<arr.length; i++){
      if (arr[i] === '--double-next'){
          a = arr[i+1]
          arr = [...arr.splice(0,i),...[a],...arr.splice(1,arr.length)]
      } 
      if (arr[i] === '--double-prev'){
          a = arr[i-1]
          arr = [...arr.splice(0,i),...[a],...arr.splice(1,arr.length)]
      }
      if (arr[i] === '--discard-prev'){
          arr = [...arr.splice(0,i-1),...arr.splice(2,arr.length)]
      }
      if (arr[i] === '--discard-next'){
          arr = [...arr.splice(0,i),...arr.splice(2,arr.length)]
      }
}
      return arr.filter(a => typeof a =='number')
}

module.exports = {
  transform
};
