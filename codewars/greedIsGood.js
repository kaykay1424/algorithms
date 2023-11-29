/** Greed is a dice game played with five six-sided dice.
 * Your mission, should you choose to accept it, is to score a throw according to these rules.
 * You will always be given an array with five six-sided dice values.
 * Three 1's => 1000 points
 * Three 6's =>  600 points
 * Three 5's =>  500 points
 * Three 4's =>  400 points
 * Three 3's =>  300 points
 * Three 2's =>  200 points
 * One   1   =>  100 points
 * One   5   =>   50 point
 */
function score(dice) {
  const diceValueCounts = {};
  dice.forEach((value) =>
    diceValueCounts[value]
      ? diceValueCounts[value]++
      : (diceValueCounts[value] = 1)
  );

  const scores = Object.keys(diceValueCounts).map((key) => {
    const value = diceValueCounts[key];
    if (key == 1) {
      return value >= 3 ? 1000 + (value - 3) * 100 : value * 100;
    } else if (key == 5) {
      return value >= 3 ? 500 + (value - 3) * 50 : value * 50;
    } else if (value >= 3) {
      return key * 100;
    } else {
      return 0;
    }
  });
  return scores.reduce((total, currVal) => total + currVal);
}
