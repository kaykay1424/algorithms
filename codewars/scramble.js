/*
  Determine if portion of characters in str1 can be rearranged to match str2.
  If so, return true. Otherwise, return false.
*/
function scramble(str1, str2) {
  const str2Arr = str2.split('');

  for (let i = 0; i < str2Arr.length;i++) {
    const char = str2Arr[i];
    const regex = new RegExp(char, 'g');
    const str1Matches = str1.match(regex),
          str2Matches = str2.match(regex);

    /* 
      Check if the current character exists in str1,
      and then if the character exists at least the same 
      number of times in str1 as str2
      If not return false, since the characters in str1 will
      not be able to be rearranged to match str2
    */
    if (!str1Matches || str1Matches.length < str2Matches.length) return false;
  }
  
  return true;
}
   