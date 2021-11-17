/*
  Given a string of words, return the highest scoring word as a string.
  Each letter of a word has a score 
  corresponding to its position in the alphabet e.g. a = 1, b = 2, c = 3
*/
function highlightScoringWord(x){
  const scores = {
    a: 1, b: 2, c: 3, d: 4, e: 5, f:6, g: 7, h: 8, i: 9, j: 10, k: 11, l: 12, m: 13, n: 14, 
    o: 15, p: 16, q: 17, r: 18, s: 19, t: 20, u: 21, v: 22, w: 23, x: 24, y: 25, z: 26
  }
  
  const words = x.split(' '),
    scoredWords = words.map((word) => {
      let score = 0;
      const wordArr = word.split('');
      
      for (let i = 0; i < wordArr.length;i++) {
        score += scores[wordArr[i]];
      }
      
      return {
        index: words.indexOf(word),
        word,
        score
      }
  });
  
  // Sort words by score in descending order
  // and by position in string in ascending order if 2 words have the same score 
  scoredWords.sort((obj1, obj2) => {
    if (obj2.score === obj1.score) return obj1.index - obj2.index;
    return obj2.score - obj1.score;
  });

  return scoredWords[0].word;
}