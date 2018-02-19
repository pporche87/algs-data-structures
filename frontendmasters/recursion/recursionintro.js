//1. Write a function that loops through the numbers n down to 0. If you haven't done so try using a while loop to do this.
const loopsDown = n => {
  while(n >= 0) {
    console.log(n);
    n--;
  }
}

// loopsDown(10);

//2. Next, try looping just like above except using recursion
const loopsDownRecursion = n => {
  if (n < 0) {
    return 
  }
  console.log(n);
  return loopsDownRecursion(n-1);
}

// loopsDownRecursion(10);

//3.Write a function 'exponent' that takes two arguments base, and expo, uses a while loop to return the exponenet value of the base.
const exponent = (base, expo) => {
  let value = base;

  while(expo > 1) {
    value *= base;
    expo--;
  }
  return value;
}

// console.log(exponent(5, 3))

//4. Write a function 'RecursiveExponent' that takes two arguments base, and expo, recursively returns exponent value of the base.
const recursiveExponent = (base, expo) => {
  let value = base;
  if (expo === 1) {
    return base;
  }
  return base * recursiveExponent(base, --expo);
}
console.log(recursiveExponent(5, 2))

//5. Write a function 'recursiveMultiplier' that takes two arguments, 'arr and num', and multiplies each arr value into by num and returns an array of the values.
const recursiveMultiplier = (arr, num) => {
  if (arr.length === 0) {
    return arr;
  }

  let last = arr.pop();

  recursiveMultiplier(arr, num);

  arr.push(last * num);

  return arr;
}

// console.log(recursiveMultiplier([1,2,3,4,5], 2));

//6. Write a function 'recursiveReverse' that takes an array and uses recursion to return its contents in reverse
const recursiveReverse = arr => {
  const results = [];

  const addItems = orderedArray => {
    if (orderedArray.length > 0) {
      results.push(orderedArray.pop());
      addItems(orderedArray);
    }
    return;
  }

  addItems(arr);

  return results;
}

console.log(recursiveReverse([1,2,3,4,5]));