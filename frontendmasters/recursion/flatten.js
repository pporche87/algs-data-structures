/*

Implement a function that flattens a nested array.

flatten([1,[2],[3, [[4]]]]);
=> [1,2,3,4]

*/

const flatten = arr => {
  let result = [];
  arr.forEach(element => {
    if (!Array.isArray(element)) {
      result.push(element);
    } else {
      result = [...result, ...flatten(element)];
    }
  });
  return result;
}

console.log(flatten([1,[2], [3, [[4]]]]));
