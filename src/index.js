module.exports = function reverse(n) {
  let revArray = []; // Array to store the reversed digits
  let array = [];    // Array to store the digits of the number

  // If the number "n" is positive
  if (n > 0) {
    // Convert the number to a string, then split it into an array of digits
    array = ('' + n).split('');

    // Reverse the digits by adding each digit to the front of revArray
    for (const digit of array) {
      revArray.unshift(digit);
    }

    // Join the reversed digits into a string and return it
    return revArray.join('');

  // If the number "n" is negative
  } else if (n < 0) {
    // Convert the absolute value of the number to a string, then split it into digits
    array = (-n + '').split('');

    // Reverse the digits by adding each digit to the front of revArray
    for (const digit of array) {
      revArray.unshift(digit);
    }

    // Join the reversed digits into a string and return it
    return revArray.join('');

  // If the number "n" is zero
  } else {
    return 0;  // Simply return 0
  }
}
