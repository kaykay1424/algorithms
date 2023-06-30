/*
  You are going to be given an array of integers. 
  Your job is to take that array and find an index N where the sum of the integers to the left of N is equal to the sum of the integers to the right of N. 
  If there is no index that would make this happen, return -1.
*/
function findEvenIndex(arr) {
  for (let i = 0; i < arr.length; i++) {
    let leftSide = arr.slice(0, i);
    if (leftSide.length === 0) leftSide = [0];
    let rightSide = arr.slice(i + 1, arr.length);
    if (rightSide.length === 0) rightSide = [0];
    if (
      leftSide.reduce((total, num) => total + num) ===
      rightSide.reduce((total, num) => total + num)
    )
      return i;
  }
  return -1;
}
