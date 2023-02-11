/**
 * Write a function that, given a string of text (possibly with punctuation and line-breaks),
 * returns an array of the top-3 most occurring words, in descending order of the number of occurrences.
 */
function topThreeWords(text) {
  let sanitizedText = text.toLowerCase();
  sanitizedText = sanitizedText.replace(/[^a-z']/g, " ");
  let words = sanitizedText.split(" ");
  const filteredWords = words.filter((word) => {
    return word === "" ? false : true;
  });
  if (filteredWords.length === 0) return [];
  let topWords = {};
  filteredWords.forEach((word) => {
    if (!word.match(/[a-z]/)) return;
    if (!topWords[word]) {
      topWords[word] = {
        occurrences: 1,
      };
    } else {
      topWords[word].occurrences++;
    }
  });
  let topWordsSorted = Object.keys(topWords).sort((a, b) => {
    return topWords[b].occurrences - topWords[a].occurrences;
  });
  return topWordsSorted.slice(0, 3);
}
