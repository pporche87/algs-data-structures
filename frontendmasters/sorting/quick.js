const quickSort = (arr, lo, hi) => {
  if (lo === undefined) lo = 0;
  if (hi === undefined) hi = arr.length - 1;

  if (lo < hi) {
    let p = partition(arr, lo, hi);

    quickSort(arr, lo, p-1);
    quickSort(arr, p+1, hi);
  }
  
  if (hi - lo === arr.length - 1) return arr;
}

const partition = (arr, lo, hi) => {
  const pivot = arr[hi];
  let pivotLoc = lo;

  for (let i = lo; i < hi; i++) {
    if (arr[i] <= pivot) {
      swap(arr, pivotLoc, i);
      pivotLoc++;
    }
  }

  swap(arr, pivotLoc, hi);
  return pivotLoc;
}

const swap = (arr, i1, i2) => {
  [arr[i1], arr[i2]] = [arr[i2], arr[i1]];
  return arr;
}

console.log(quickSort([2,6,8,9,4,3,1]))