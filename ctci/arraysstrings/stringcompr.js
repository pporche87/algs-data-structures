// Implement a method to perform basic string compression
// using the counts of repeated characters. For example, 
// the string aabcccccaaa would become a2b1c5a3. If the 
// "compressed" string would not become smaller than the 
// original string, your method should return the original 
// string. You can assume the string has only uppercase and
// lowercase letters. 

const stringCompr = str => {
  const results = [];
  let count = 0;
  let start;

  for (let i = 0; i < str.length; i++) {
    if (!start) {
      start = str[i];
      count++;
    } else if (start === str[i]) {
      count++;
    } else {
      results.push(start + count);
      start = str[i];
      count = 1;
    }
  }
  results.push(start + count);
  return results.join('');
}

console.log(stringCompr('aabcccccaaa'));