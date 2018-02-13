const twoSum = (numArray, sum) => {
  const pairs = [];
  const hash = {};

  for (let num of numArray) {
    if (hash[sum - num]) {
      pairs.push([num, sum - num]);
    }
    hash[num] = hash[num] + 1 || 1;
  }
  console.log(pairs);
}

twoSum([1,6,4,5,3,3], 7);
twoSum([40,11,19,17,-12], 28);

// result should be array of arrays
// any number in the numArray can be used in multiple pairs