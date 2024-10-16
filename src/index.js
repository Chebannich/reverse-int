module.exports = function reverse(n) {
  let revArray = [];
  let array = [];

  if (n > 0) {  // if "n" is above 0
    array = ('' + n).split('');

    for (const digit of array) {
      revArray.unshift(digit);
    }

    return revArray.join('')

  } else if (n < 0) {  // if "n" is less 0
    array = (-n + '').split('');

    for (const digit of array) {
      revArray.unshift(digit);
    }

    return revArray.join('');

  } else {  // if "n" is 0
    return 0;
  }
}
