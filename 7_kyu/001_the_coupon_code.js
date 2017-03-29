/**
 * 001_the_coupon_code.js
 * http://www.codewars.com/kata/the-coupon-code
 *
 */

/**
 * Your online store likes to give out coupons for special occasions. Some
 * customers try to cheat the system by entering invalid codes or using expired
 * coupons.
 *
 * Your mission:
 * Write a function called `checkCoupon` to verify that a coupon is valid and
 * not expired. If the coupon is good, return `true`. Otherwise, return
 * `false`. A coupon expires at the END of the expiration date. All dates will
 * be passed in as strings in this format: "June 15, 2014".
 */

function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
    var currentDate = Date.parse(currentDate);

    // expires right before midnight on the day of expiration, 86399999 is 23:59:59.999
    var expirationDate = Date.parse(expirationDate) + 86399999;
    return enteredCode === correctCode && currentDate < expirationDate;
}

/* clever solution */
function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
    return enteredCode === correctCode && Date.parse(expirationDate) >= Date.parse(currentDate)
}