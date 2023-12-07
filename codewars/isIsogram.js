/**
 * An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.
 */
function isIsogram(str) {
  const strArr = str.toLowerCase().split("");
  return strArr.filter((letter, i, arr) => {
    if (arr.indexOf(letter) !== arr.lastIndexOf(letter)) return false;
    return true;
  }).length === strArr.length
    ? true
    : false;
}
