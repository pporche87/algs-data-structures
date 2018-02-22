const winLoss = n => {
  const result = [];

  const recurse = str => {
    if (str.length === n) {
      result.push(str);
      return;
    }

    recurse(str + 0);
    recurse(str + 1);

  }
  
  recurse('');
  return result;
}

console.log(winLoss(2));
console.log(winLoss(3));
console.log(winLoss(4));