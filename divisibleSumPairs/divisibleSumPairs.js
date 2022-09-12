/*
 * Complete the 'divisibleSumPairs' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER k
 *  3. INTEGER_ARRAY ar
 */

function divisibleSumPairs(n, k, ar) {
  // Write your code here
  // console.log(n, k, ar, 'n k and ar')
  let count = 0;
  for (let i = 0; i < ar.length; i++) {
    for (let j = 1; j < ar.length; j++) {
      if ((ar[i] + ar[j]) % k === 0) {
        count++;
        console.log(count, "this is my counter after if state");
      }
    }
  }
  return count / 2;
}

const result = divisibleSumPairs(6, 3, [14, 44, 2, 6, 1, 2]);
console.log(result);
