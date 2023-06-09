/** Complete the square sum function so that it squares each number passed into it
 * and then sums the results together. */
function squareSum(numbers) {
  if (numbers.length === 0) return 0;
  return numbers.reduce((total, currValue) => total + currValue * currValue, 0);
}
