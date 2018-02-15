// Assume you have a method isSubstring which checks
// if one word is a substring of another. Given two strings,
// s1 and s2, write code to check if s2 is a rotation of s1,
// using only one call to isSubstring. (waterbottle is 
// a rotation of erbottlewat).

const isSubstring = (str1, str2) => {
  if (str2.indexOf(str1) > -1) {
    return true;
  }
  return false;
}

const stringRotation = (str1, str2) => {
  const results = [];

  if (str1.length !== str2.length) {
    return false;
  }

  for (let i = 0; i < str1.length; i++) {
    if (results.length > 0) {
      if (str1.indexOf(results.join('')) > -1) {
        results.push(str2.charAt(i));
      } else {
        return isSubstring(str2.slice(i), str1);
      }
    } else {
      results.push(str2.charAt(i));
    }
  }
  return false;
}

// console.log(stringRotation('hello', 'world')); // false
console.log(stringRotation('waterbottle', 'erbottlewat')); // false