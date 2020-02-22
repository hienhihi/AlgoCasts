// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let obj = {};
  let max = ''; 
  let rep = 0;
  str = str.replace(/\s/g, '')
  for (var i = 0; i < str.length; i++) {
    obj[str[i]] = obj[str[i]] + 1 || 1;
  }
  for (var key in obj) {
    if (obj[key] > rep) {
      max = key;
      rep = obj[key]
    }
  }
  return max;
}
console.log(maxChar('mot hai ba bbon'));
module.exports = maxChar;
