// Implement an algorithm to determine if a string has
// all unique characters. What if you cannot use additional
// data structures?

// O(n) solution
const isUnique = str => {
  const hashMap = {};

  for (let char of str) {
    hashMap[char] = hashMap[char] + 1 || 1;
  }

  for (let val in hashMap) {
    if (hashMap[val] > 1) return false;
  }

  return true;
}

console.log(isUnique('hello')) // false 
console.log(isUnique('like')) // true


// O(n^2) solution
const isUniqueNoData = str => {
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length; j++) {
      if (str[i] === str[j]) return false;
    }
  }
  return true;
}

console.log(isUniqueNoData('hello')) // false 
console.log(isUniqueNoData('like')) // true