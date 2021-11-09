/*  Get the sum of all the integers between and including integers a and b and return it. 
    If the two numbers are equal return a or b.
*/
function getSum(a, b) {
  if (a === b) return a;
  let sum = 0;
  for (let i = Math.min(a, b); i <= Math.max(a, b); i++) {
    sum += i;
  }
  return sum;
}