/*

Write a function that takes two numbers and returns the greatest common divisor.

*/

const gcdDijkstras = (num1, num2) => {
  if (num1 === num2) return num1;
  else if (num1 > num2) return gcdDijkstras(num1 - num2, num2);
  else return gcdDijkstras(num1, num2 - num1);
}

console.log(gcdDijkstras(54, 24));

const gcdEuclid = (num1, num2) => {
  let min = Math.min(num1, num2);
  let max = Math.max(num1, num2);
  if (max % min === 0) return min;
  else return gcdEuclid(min, max % min);
}

console.log(gcdEuclid(54, 24));