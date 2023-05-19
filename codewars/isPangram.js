/**
 * Given a string, detect whether or not it is a pangram.
 * Return True if it is, False if not.
 * Ignore numbers and punctuation.
 */
function isPangram(string) {
  const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  for (let i = 0; i < alphabet.length; i++) {
    if (
      !string
        .replace(/\W/g, "")
        .toLowerCase()
        .split("")
        .find((letter) => letter === alphabet[i])
    )
      return false;
  }
  return true;
}
