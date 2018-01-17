// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// function reverse(str) {
//   return str.split("").reduce((reversed, character) => {
//     return character + reversed;
//   }, '');
// }

// ============================
// ES6 Magic
// ============================

function reverse(str) {
  debugger;
  return str.split('').reduce((rev, char) => char + rev, '');
}

module.exports = reverse;

// ============================
// Built in method 
// ============================

// function reverse(str) {
//   const arr = str.split('');
//   arr.reverse();
//   return arr.join('');
// 
// 
//   return str.split('').reverse().join(');
// }

// ============================
// My solution
// ============================
// function reverse(str) {
//   // let strArr = str.split('');
//   let reversed = "";
//   // for (let i = strArr.length-1; i >= 0; i--) {
//   //   result = result + strArr[i];
//   // }
//   for (let character of str) {
//     reversed = character + reversed;
//   }
//   return reversed;
// }


