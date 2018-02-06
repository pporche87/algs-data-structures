// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// ============================
// My solution
// ============================
function anagrams(stringA, stringB) {
  const stringAMap = {}
  const stringBMap = {}
  stringA = stringA.replace(/[^\w]/g, '').toLowerCase();
  stringB = stringB.replace(/[^\w]/g, '').toLowerCase();

  

  if (stringA.length !== stringB.length) {
    console.log(false);
    return false;

  } else {
    
    for (let char of stringA) {
      if (!stringAMap[char]) {
        stringAMap[char] = 1;
      } else {
        stringAMap[char] += 1;
      }
    }

    for (let char of stringB) {
      if (!stringBMap[char]) {
        stringBMap[char] = 1; 
      } else {
        stringBMap[char] += 1;
      }
    }

    for (let key in stringA) {
      if (stringAMap[key] !== stringBMap[key]) {
        return false;
      }
    }

    return true;



  }
}

module.exports = anagrams;

anagrams('rail safety', 'fairy tales') // --> True
anagrams('RAIL! SAFETY!', 'fairy tales') // --> True
anagrams('Hi there', 'Bye there') // --> False

// ============================
// Solution # 1
// ============================
function anagrams(stringA, stringB) {
  const aCharMap = buildCharMap(stringA);
  const bCharMap = buildCharMap(stringB);

  if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
    return false;
  }

  for (let char in aCharMap) {
    if (aCharMap[char] !== bCharMap[char]) {
      return false;
    }
  }
  return true;
}

function buildCharMap(str) {
  const charMap = {};

  for (let char of str.replace(/[^\w]/g, '').toLowerCase()) {
    charMap[char] = charMap[char] + 1 || 1;
  }

  return charMap;
}

// ============================
// Solution # 2
// ============================
function anagrams(stringA, stringB) {
  return cleanString(stringA) === cleanString(stringB);
}

function cleanString(str) {
  return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
}