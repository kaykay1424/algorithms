/** Your task is to write a function that takes a string and returns a new string with all vowels removed.
 * Note: for this kata y isn't considered a vowel.
 */
function disemvowel(str) {
  return str.replace(/[aeiou]/gi, "");
}
