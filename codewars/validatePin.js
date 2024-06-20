/**
 * ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.
 * If the function is passed a valid PIN string, return true, else return false.
 */
function validatePIN(pin) {
  const onlyNumbersPinLength = pin
    .split("")
    .filter((digit) => (digit.match(/\d/) ? true : false))?.length;
  return (
    (onlyNumbersPinLength === 4 || onlyNumbersPinLength === 6) &&
    onlyNumbersPinLength === pin.length
  );
}
