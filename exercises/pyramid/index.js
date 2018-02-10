// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

const pyramid = n => {
  const mid = Math.floor((2 * n - 1) /2);

  for (let r = 0; r < n; r++) {
    let pyr = '';

    for (let c = 0; c < 2 * n - 1; c++) {
      if (mid - r <= c && mid + r >= c) {
        pyr += '#';
      } else {
        pyr += ' ';
      }
    }
    console.log(pyr);
  }
}

module.exports = pyramid;

pyramid(3);
pyramid(5);
pyramid(10);

