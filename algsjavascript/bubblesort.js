const bubbleSort = arr => {
  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
      }
    }
  }
  return arr;
}

console.log(bubbleSort([5,3,8,2,1,4]));
console.log(bubbleSort([20,20,56,1,12,12,-23,-9,-12]));