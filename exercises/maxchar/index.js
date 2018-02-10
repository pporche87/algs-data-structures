// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

const maxChar = str => {
  const hash = {};
  let max = -Infinity;
  let maxChar;

  for (let char of str) {
    hash[char] = hash[char]++ || 1;
  } 

  for (let val in hash) {
    if (hash[val] > max) {
      max = hash[val];
      maxChar = val;
    }
  }

  return maxChar;
}

module.exports = maxChar;

maxChar("abcccccccd") // === "c"
maxChar("apple 1231111") // === "1"

// Common String Questions 

// What is the most common character in a string?
// Does string A have the same characters as string B (is it an anagram)?
// Does the given string have any repeated characters in it?