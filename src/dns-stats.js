const { NotImplementedError } = require('../extensions/index.js');

/**
 * c
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
  let DomainObj = {}
  for (i=0; i < domains.length; i++) {
      let arr = domains[i].split('.')
      for(j = 0; j < arr.length; j++){
          if (!DomainObj.hasOwnProperty(`.${arr.slice(j, arr.length).reverse()}`.replaceAll(',','.'))){
              DomainObj[`.${arr.slice(j, arr.length).reverse()}`.replaceAll(',','.')] = 1;
          }
          else if (DomainObj.hasOwnProperty(`.${arr.slice(j, arr.length).reverse()}`.replaceAll(',','.')))
          {
              DomainObj[`.${arr.slice(j, arr.length).reverse()}`.replaceAll(',','.')] += 1;
          }
      }
  } 
  // console.log(Object.entries(DomainObj).sort((a,b) => b[1]-a[1]))
  return DomainObj

}

module.exports = {
  getDNSStats
};
