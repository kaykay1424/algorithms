/*
  Given a string of morse code,
  return it as a decoded human-readable string
*/
function decodeMorse(morseCode) {
  return morseCode.split(' ').map((char) => MORSE_CODE[char] || ' ')
    .join('')
    .replace(/\s{2,}/g, ' ') // Remove extra spaces between words
    .replace(/\s$/, '') // Remove space at end of string
    .replace(/^\s/, ''); // Remove space at beginning of string
}

