/*
  Find the next integral perfect square after the one passed as a parameter. 
  If sq parameter is not a perfect square then return -1.
*/
function findNextSquare(sq) {
  const sqrt = Math.sqrt(sq);
  if (!Number.isInteger(sqrt)) return -1;
  return Math.pow(sqrt+1, 2);
}