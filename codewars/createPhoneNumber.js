/* 
  Given an array of 10 integers (0-9),
  return a string of those numbers formatted as a phone number
  e.g. (800) 800-800
*/
function createPhoneNumber(numbers){
  const phoneNumber = [...numbers];
  phoneNumber.splice(6, 0, '-');
  phoneNumber.splice(3, 0, ')', ' ');
  phoneNumber.splice(0, 0, '(');
  return phoneNumber.join('');
}