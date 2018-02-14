// given two strings, write a method to decide if one 
// is a permutation of the other

const checkPerm = (str1, str2) => {
  if (str1.length !== str2.length) return false;

  return str1.split('').sort().join('') === str2.split('').sort().join('');
}

console.log(checkPerm('hello', 'olehl')) // true
console.log(checkPerm('helo', 'olehl')) // false