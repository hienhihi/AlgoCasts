// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  let newStr = "";
  for (var i = 0; i < str.length; i++) {
    newStr = str[i] + newStr;
  }
  return newStr;
}
console.log(reverse('abc'));

module.exports = reverse;
