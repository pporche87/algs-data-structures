// Given an image represented by an NxN matrix, where each
// pixel in the image is 4 bytes, write a method to rotate
// the image by 90 degrees. Can you do this in place?

const matrix1 = [
  [0,1],
  [2,3]
];

const matrix2 = [
  [0,1,2],
  [3,4,5],
  [6,7,8]
]; 

const printMatrix = matrix => {
  for (let obj of matrix) {
    console.log(obj);
  }
};

const rotateMatrix = matrix => {
  // reverse the rows
  matrix = matrix.reverse();

  // swap the symmetric elements
  for (var i = 0; i < matrix.length; i++) {
    for (var j = 0; j < i; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }

  return printMatrix(matrix);
};

rotateMatrix(matrix1);
rotateMatrix(matrix2);



