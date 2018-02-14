// Write a method to replace all spaces in a string with '%20'
// You may assume that the string has sufficient spact at 
// the end to hold the additional characters, and that 
// you are given the "true" length of the string.

const URLify = (str, len) => {
  return str.slice(0, len).replace(/\s/g, '%20');
}

console.log(URLify('Mr John Smith      ', 13));