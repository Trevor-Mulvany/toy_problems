/*
 * Complete the 'diagonalDifference' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

function diagonalDifference(arr) {
  let diagonalA = 0;
  let diagonalB = 0;
  let n = arr.length;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i == j) {
        diagonalA = diagonalA + arr[i][j];
      }
      if (j == n - i - 1) {
        diagonalB = diagonalB + arr[i][j];
      }
    }
  }
  return Math.abs(diagonalA - diagonalB);
}
