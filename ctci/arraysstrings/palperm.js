// Given a string, write a function to check if it is 
// a permutaton of a palindrome. A palindrom is a word or 
// phrase that is the same forwards and backwards. A permutation
// is a rearrangement of letters. The palindrom does not 
// need to be limited to just dictionary words. 

const palPerm = str => {
  str = str.toLowerCase().split(' ').join('').split('');
  const isEven = str.length % 2 === 0;
  let oddCount = 0;

  const profile = perm(str);

  for (let key in profile) {
    if (profile[key] % 2 !== 0) oddCount++;
    if (profile[key] % 2 !== 0 && isEven) return false;
    if (profile[key] % 2 !== 0 && oddCount > 1 && !isEven) return false;
    return true;
  }
}

const perm = str => {
  const hashMap = {};

  for (let char of str) {
    hashMap[char] = hashMap[char] + 1 || 1; 
  }
  console.log(hashMap);
  return hashMap;
}

console.log(palPerm('Tact Coa')); // 
console.log(palPerm('abba')); // 