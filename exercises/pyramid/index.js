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

function pyramid(n) {
  const midpoint = Math.floor((2 * n - 1) / 2);
  for (let r = 0; r < n; r++) {
    let pyr = '';
    for (let c = 0; c < 2 * n - 1; c++) {
      if (midpoint - r <= c && midpoint + r >= c) {
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

function pyramid(n, row = 0, pyr = '') {
  const midpoint = Math.floor((2 * n - 1) / 2);

  if (n === row) {
    return;
  }

  if (pyr.length === 2 * n - 1) {
    console.log(pyr);
    return pyramid(n, row + 1);
  }

  let add;
  if (midpoint - row <= pyr.length && midpoint + row >= pyr.length) {
    add = '#';
  } else {
    add = ' ';
  }
  pyramid(n, row, pyr + add);
}