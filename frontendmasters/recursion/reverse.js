const reverse = str => {
  if (str.length === 0) return '';
  else {
    // console.log(str[str.length-1])
    // console.log(str.substring(0, str.length -1))
    return str[str.length-1] + reverse(str.substring(0,str.length-1));
  }
}

console.log(reverse('abcdefg'))