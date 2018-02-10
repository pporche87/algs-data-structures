const isPalidrome = str => {
  const reversed = cleanString(str).reduce((rev, char) => char + rev);
  str = cleanString(str).join('');
  
  console.log(str === reversed);
  return reversed === str;
}

const cleanString = str => str.replace(/[^\w]/gi, '').toLowerCase().split(' ')

isPalidrome('race car');
isPalidrome('Madam, I\'m Adam');