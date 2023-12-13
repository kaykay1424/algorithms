/** Your task is to sort a given string. Each word in the string will contain a single number.
 * This number is the position the word should have in the result. */
function order(words) {
  return words
    .split(" ")
    .sort((a, b) => {
      return a.replace(/\D/g, "") - b.replace(/\D/g, "");
    })
    .join(" ");
}
