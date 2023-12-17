const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  const arr = ['.', ',', '-', '!', '^', '<', '>', '%'];
  let str_index = email.indexOf('@');
  if (!arr.includes(email[str_index+1])) {
      return email.slice(str_index+1, email.length)
  } else {
      newEmail = email.slice(str_index+1, email.length)
      return getEmailDomain(newEmail)
  }
}

module.exports = {
  getEmailDomain
};
