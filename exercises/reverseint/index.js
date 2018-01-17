// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// ============================
// My solution
// ============================
function reverseInt(n) {
  // const sign = Math.sign(n);
  return parseInt(n.toString().split('').reduce((rev, i) => i + rev, '')) * Math.sign(n);
}

reverseInt(15) === 51
reverseInt(981) === 189
reverseInt(500) === 5
reverseInt(-15) === -51
reverseInt(-90) === -9

module.exports = reverseInt;

// function reverseInt(n) {
//   const reversed = n 
//     .toString()
//     .split('')
//     .reverse()
//     .join('');

//     if (n < 0) {
//       return parseInt(reversed) * -1;
//     }

//     return parseInt(reversed);
// }