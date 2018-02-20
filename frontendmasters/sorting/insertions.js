const selectionSort = (arr, comparator) => {
  comparator = comparator || defaultComparator;
  arr.forEach((element, index) => {
    let minValue = element;
    let minIndex = index;

    for (let i = index; i < arr.length; i++) {
      if (comparator(arr[i], minValue) < 0) {
        minValue = arr[i];
        minIndex = i;
      }
    }
    arr = swap(arr, index, minIndex);
  });
  return arr;
}

const swap = (arr, i1, i2) => {
  [arr[i2], arr[i1]] = [arr[i1], arr[i2]];
  return arr;
}

const defaultComparator = (a, b) => {
  if (a < b) return -1; // a comes first 
  else if (a > b) return 1; // b comes first 
  return 0;
}

console.log(selectionSort([2,5,7,9,3,1]));