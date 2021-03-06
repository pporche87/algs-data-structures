const reverseArrayInPlace = arr => {
  for (let i = 0; i < arr.length / 2; i++) {
    [arr[i], arr[arr.length - 1 - i]] = [arr[arr.length - 1 - i], arr[i]];
  }
  return arr;
}

console.log(reverseArrayInPlace([1,2,3,4,5]));
console.log(reverseArrayInPlace([1,2,3,4,5,6]));
console.log(reverseArrayInPlace([1,2,3,4,5,6,7]));