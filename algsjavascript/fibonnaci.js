const fibonnaci = n => {
  if (n < 3) {
    return 1;
  } else {
    return fibonnaci(n - 1) + fibonnaci(n - 2);
  }
}

console.log(fibonnaci(4));
console.log(fibonnaci(9));