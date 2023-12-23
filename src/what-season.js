const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if (!(date instanceof Date)) {
  return false;
  }
  const spring = ['March', 'April', 'May'];
  const summer = ['June', 'July', 'August'];
  const autumn = ['September', 'October', 'November'];
  const winter = ['December', 'January', 'February'];
  const month = date.toLocaleString('default', { month: 'long' });
  if (spring.includes(month)){
      return 'spring'
  }
  if (summer.includes(month)){
      return 'summer'
  }
  if (autumn.includes(month)){
      return 'autumn'
  }
  if (winter.includes(month)){
      return 'winter'
  }

}



module.exports = {
  getSeason
};
