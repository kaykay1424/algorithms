/*
  Given an array containing hashes of names,
  return a formatted string of names separated by commas,
  except for the last 2 names,
  which should be separated by '&'
*/
function formatNames(names){
  let namesStr = '';
  for (let i = 0; i < names.length;i++) {
    namesStr += names[i].name;
    if (i === names.length - 2) namesStr += ' & ';
    else if (i < names.length - 1) namesStr += ', ';
  }
  return namesStr;
}