/**
 * 030_regex_validate_pin_code.js
 * https://www.codewars.com/kata/regex-validate-pin-code/
 *
 */

/**
 * ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain
 * anything but exactly 4 digits or exactly 6 digits.
 *
 * If the function is passed a valid PIN string, return true, else return false.
 * Remark: The Haskell variant uses data Property.
 *
 * Examples:
 *          validatePIN("1234") === true
 *          validatePIN("12345") === false
 *          validatePIN("a234") === false
 *
 */

 function validatePIN (pin) {
  return /^[0-9]{4}$|^[0-9]{6}$/.test(pin);
}

/* best practices */
function validatePIN(pin) {
  return /^(\d{4}|\d{6})$/.test(pin);
}
