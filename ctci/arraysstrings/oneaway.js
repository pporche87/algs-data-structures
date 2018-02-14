// There are three types of edits that can be performed on 
// strings: insert a character, remove a character, or replace
// a character. Given two strings, write a function to 
// check if they are one edit (or zero edits) away.

const oneAway = (str1, str2) => {
  if (str1.length === str2.length + 1) {
    return insert(str1, str2);
  } else if (str1.length + 1 === str2.length) {
    return remove(str1, str2);
  } else if (str1.length === str2.length) {
    return replace(str1, str2);
  }
}

const insert = (str1, str2) => {
  let index;
  let updateString; 

  for (let i = 0; i < str1.length; i++) {
    if (str1.charAt(i) !== str2.charAt(i)) {
      index = i;
      break;
    }
  }

  updateString = str2.split('');
  updateString.splice(index, 0, str1.charAt(index));

  return updateString.join('') === str1;

}

const remove = (str1, str2) => {
  let index;
  let updateString;

  for (let i = 0; i < str2.length; i++) {
    if (str2.charAt(i) !== str1.charAt(i)) {
      index = i;
      break;
    }
  }

  updateString = str1.split('');
  updateString.splice(index, 0, str2.charAt(index));

  return updateString.join('') === str2;
}

const replace = (str1, str2) => {
  let diff = 0;

  for (let i = 0; i < str1.length; i++) {
    if (str1.charAt(i) !== str2.charAt(i)) {
      diff++;
    }
  }

  return diff === 1;
}

console.log(oneAway('pale', 'ple')) // true
console.log(oneAway('pales', 'pale')) // true
console.log(oneAway('pale', 'bale')) // true
console.log(oneAway('pale', 'bake')) // false