/*
Write a function that outputs the nth Fibonnaci number. A number in this sequence is found by adding up the two numbers before it.
Fibonnaci's sequence:

input    0 1 2 3 4 5 6  7  8  9 ...
output   0 1 1 2 3 5 8 13 21 34 ...

What is the time complexity? Can you think of optimizing your solution? (Hint: look up dynamic programming)
*/

const fibonnaci = n => {
  if (n === 0 || n === 1) {
    return n;
  }
  return fibonnaci(n - 1) + fibonnaci(n - 2);
}

console.log(fibonnaci(9));

const memoizedFibonnaci = n => {
  const memo = {
    0: 0,
    1: 1
  }

  const recurse = m => {
    if (memo[m] === undefined) {
      memo[m] = recurse(m - 1) + recurse(m - 2);
    }
    return memo[m];
  }
  return recurse(n);
}

console.log(memoizedFibonnaci(20));
