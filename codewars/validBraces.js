/*
  Determine if the order of the braces is valid. 
  A string of braces is considered valid if all braces are matched with the correct brace.
  If the string is valid, return true.
  Otherwise, return false.
*/
function validBraces(braces){
  const bracesArr = braces.split(''),  
    openBracesArr = [];

  for (let i = 0; i < bracesArr.length; i++) {
    const char = bracesArr[i];

    if (char === '(' || char === '{' || char === '[') openBracesArr.push(char);
    else {
      const lastOpenBrace = openBracesArr[openBracesArr.length-1];

      /*  
          If the current closing brace does not match the last open brace
          or there are no open braces to match the closing brace,
          string of braces is invalid, so return false.
          Otherwise, remove the last open brace from openBracesArr 
          because the pair of braces is now properly closed.
      */
      if (
          (lastOpenBrace === '(' && char !== ')') ||
          (lastOpenBrace === '{' && char !== '}') ||
          (lastOpenBrace === '[' && char !== ']') ||
          (openBracesArr.length === 0)
      ) return false;
      openBracesArr.pop();
    }
  }

  /*  
      If any braces haven't been closed
      string of braces is invalid, so return false.
      Otherwise, return true.
  */
  if (openBracesArr.length > 0) return false;
  else return true;
}