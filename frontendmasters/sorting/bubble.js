const bubbleSort = arr => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < (arr.length -i -1); j++) {
      if(arr[j] > arr[j+1]) {
        swap(arr, j, j+1);
      }
    }
  }
  return arr;
}

const swap = (arr, i1, i2) => {
  [arr[i2], arr[i1]] = [arr[i1], arr[i2]];
}

console.log(bubbleSort([3,5,7,99,2]))