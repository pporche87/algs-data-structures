// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// ============================
// My solution
// ============================
function maxChar(str) {
  const charCount = {};
  let max = -Infinity;
  let maxChar;

  for (let char of str) {
    // if (!charCount[char]) {
    //   charCount[char] = 1;
    // } else {
    //   // charCount[char] += 1;
    //   charCount[char]++;
    // }

    charCount[char] = charCount[char]++ || 1;
  }

  // console.log(charCount)

  for (let val in charCount) {
    // console.log(charCount[val]);
    if (charCount[val] > max) {
      max = charCount[val];
      maxChar = val;
    }
  }

  // console.log(maxChar)
  return maxChar;
}

module.exports = maxChar;

maxChar("abcccccccd") // === "c"
maxChar("apple 1231111") // === "1"

// Common String Questions 

// What is the most common character in a string?
// Does string A have the same characters as string B (is it an anagram)?
// Does the given string have any repeated characters in it?