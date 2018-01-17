// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// ============================
// My solution
// ============================
// function chunk(array, size) {
//   const chunked = [];

//   for (let ele of array) {
//     let lastEle = chunked[chunked.length-1];
//     if (!lastEle || lastEle.length === size) {
//       chunked.push([ele]);
//     } else {
//       lastEle.push(ele);
//     }
//   }
//   return chunked;
// }

chunk([1, 2, 3, 4], 2) // --> [[ 1, 2], [3, 4]]
chunk([1, 2, 3, 4, 5], 2) // --> [[ 1, 2], [3, 4], [5]]
chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) // --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
chunk([1, 2, 3, 4, 5], 4) // --> [[ 1, 2, 3, 4], [5]]
chunk([1, 2, 3, 4, 5], 10) // --> [[ 1, 2, 3, 4, 5]]

module.exports = chunk;

// Create empty array to hold chunks called 'chunked'
// for each element in "unchunked array"
// // retrieve the last element in "chunked"
// // if last element does not exist, or if its length is equal to chunk size
// // // push a new chunk into "chunked" with the current element
// // else add the current element into the chunk

function chunk(array, size) {
  const chunked = [];
  let index = 0;

  while (index < array.length) {
    chunked.push(array.slice(index, index + size));
    index += size;
  }
  return chunked;
}

// Create empty chunked array
// Create index start at 0
// While index is less than array.length
// // push a slic of length size from array into chunked
// // add size to index