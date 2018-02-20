const selectionSort = arr => {
  for (let i = 0; i < arr.length; i++) {
    let minimumIndex = i;

    for (let j = i+1; j < arr.length; j++) {
      if (arr[j] < arr[minimumIndex]) {
        minimumIndex = j;
      }
    }

    if (minimumIndex !== i) {
      swap(arr, i, minimumIndex);
    }
  }

  return arr;
}

const swap = (arr, i1, i2) => {
  [arr[i1], arr[i2]] = [arr[i2], arr[i1]];
}

console.log(selectionSort([3,5,7,99,2]))