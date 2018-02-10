const reverseWords = str => {
  const result = [];
  for (let word of str.split(' ')) {
    result.push(word.split('').reduce((rev, char) => char + rev));
  }
  console.log(result.join(' '));
}

reverseWords('this is a string of words');
reverseWords('Coding Javascript');