const bitArraySearch = arr => {
  let mid = arr.length / 2 | 0;
  let first = 0;
  let last = arr.length - 1;

  while (first < last) {
    if (arr[mid] === 0) {
      first = mid + 1;

      if (arr[mid+1] === 1) {
        return arr.length - (mid+1);
      }
    } else {
      last = mid

      if (arr[mid-1] === 0) {
        return arr.length - mid;
      }
    }
    mid = first - last;
  }
}

console.log(bitArraySearch([0,0,0,0,1,1,1]))// => 3
console.log(bitArraySearch([0,0,0,1,1,1,1]))// => 3