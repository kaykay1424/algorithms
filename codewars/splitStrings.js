/*
  Split the string into pairs of 2 characters.
  If the string has an odd number of characters, 
  add '_' to the last pair
  to replace the missing second character.
*/
function splitStrings(str){
  const strArr = str.split('');
  const newStrArr = [];
  for (let i = 0; i < strArr.length;i += 2) {
    let nextLetter = strArr[i+1];
    if (nextLetter === undefined) nextLetter = '_';
    newStrArr.push(strArr[i] + nextLetter);
  }
  return newStrArr;
}