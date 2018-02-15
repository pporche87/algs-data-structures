// Write an algorithm such that if an element in a MxN
// matrix is 0, its entire row and column are set to 0.

const matrix = [
  [0,1,1],
  [1,1,1],
  [1,1,1]
] // [
//   [0,0,0],
//   [0,1,1],
//   [0,1,1],
// ]

const matrix2 = [
  [1,1,1,1,1],
  [1,1,1,1,1],
  [1,1,0,1,1],
  [1,1,1,1,1],
  [1,1,1,1,1]
]

const printMatrix = matrix => {
  for (let obj of matrix) {
    console.log(obj);
  }
};

const zeroMatrix = matrix => {
  const index = [];

  for (let i = 0; i < matrix[0].length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      if (matrix[i][j] === 0) {
        index.push([i, j])
      }
    }
  }

  for (let subArray of index) {
    for (let i = 0; i < matrix[0].length; i++) {
      if (matrix[subArray[0]][i] !== 0) matrix[subArray[0]][i] = 0;
    }

    for (let j = 0; j < matrix.length; j++) {
      if (matrix[j][subArray[1]] !== 0) matrix[j][subArray[1]] = 0;
    }
  }


  return printMatrix(matrix);
}

zeroMatrix(matrix2);