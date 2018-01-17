// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// ============================
// My solution
// ============================
function palindrome(str) {
  let reversed = str.split('').reduce((rev, char) => char + rev, '')
  // console.log(str === reversed);
  return str === reversed;
}

// palindrome('abba');

// ============================
// Array helper every
// Not ideal, doing multiple 
// comparisons... double 
// comparisons
// ============================
// function palindrome(str) {
//   return str.split('').every((char, i) => {
//     return char === str[str.length - i -1];
//   });
// }

module.exports = palindrome;
