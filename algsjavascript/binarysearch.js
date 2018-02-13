const binarySearch = (numArray, key) => {
  const mid = Math.floor(numArray.length / 2);
  const midEle = numArray[mid];

  if (midEle === key) {
    return true;
  } else if (midEle < key && numArray.length > 1) {
    return binarySearch(numArray.splice(mid, numArray.length), key);
  } else if (midEle > key && numArray.length > 1) {
    return binarySearch(numArray.splice(0, mid), key);
  } else {
    return false;
  }
}

console.log(binarySearch([5,7,12,16,36,39,56,71],5));

const factorial = n => {
  if (n <= 2) {
    return n;
  } else {
    return n * factorial(n - 1);
  }
}

// console.log(factorial(4))