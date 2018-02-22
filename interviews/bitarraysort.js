const bitArraySort = arr => {
  let zeroCount = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      zeroCount++
    }
  }

  for (let i = 0; i < arr.length; i++) {
    if (zeroCount) {
      arr[i] = 0;
      zeroCount--;
    } else {
      arr[i] = 1;
    }
  }

  return arr;
}

console.log(bitArraySort([0,1,0,1,0,0,1])) // => [0,0,0,0,1,1];