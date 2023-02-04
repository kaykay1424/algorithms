/*
Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.
*/
function moveZeros(arr) {
  return arr.filter((elem) => 
  elem !== 0
).concat(arr.filter((elem) => 
  elem === 0
))
}

moveZeros([1,2,0,1,0,1,0,3,0,1])