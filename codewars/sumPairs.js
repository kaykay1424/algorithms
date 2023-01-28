/**
 * Given a list of integers and a single sum value, return the first two values (parse from the left please) in order of appearance that add up to form the sum.
  If there are two or more pairs with the required sum, the pair whose second element has the smallest index is the solution.
 */
function sumPairs(ints, s) {
  let pairs = []
  let filteredValues = []
  let filteredInts = []
  // Filter out duplicates (more than 2 of the same number)
 filteredValues = ints.filter((int,i) => {
   if (filteredInts.filter((integer) => {
    return int === integer
   }).length < 3)  {
     filteredInts.push(int)
     return true
     } else return false

 })
  filteredValues.forEach((int, i) => {
    filteredValues.slice(i+1).forEach((nextInt) => {
      if (int + nextInt === s) {
        if (pairs.length > 0) {
          // Only add the current pair if the index of the second number is less than 
          // the index of the second number of the previous pair
          if (ints.lastIndexOf(pairs[0][1]) > ints.lastIndexOf(nextInt)) 
            pairs.splice(0, 1, [int, nextInt])
        }
         else pairs.push([int, nextInt])
      }
    })  
  })
  if (pairs.length === 0) return undefined
  return pairs[0]
}