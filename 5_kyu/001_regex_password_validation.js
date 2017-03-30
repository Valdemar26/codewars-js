/**
 * 001_regex_password_validation.js
 * https://www.codewars.com/kata/regex-password-validation/
 *
 */

/**
 * You need to write regex that will validate a password to make sure
 * it meets the following criteria:
 *
 *  - At least six characters long
 *  - contains a lowercase letter
 *  - contains an uppercase letter
 *  - contains a number
 *
 * Valid passwords will only be alphanumeric characters
 */

 function validate(password) {
   return /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[0-9a-zA-Z]{6,}$/.test(password);
 }

/* another solution */
function validate(password) {
  return  /^[A-Za-z0-9]{6,}$/.test(password) &&
          /[A-Z]+/           .test(password) &&
          /[a-z]+/           .test(password) &&
          /[0-9]+/           .test(password) ;
}
