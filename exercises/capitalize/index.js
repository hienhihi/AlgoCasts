// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  let arr = str.split(' ');
  for (var i = 0; i < arr.length; i++) {
    arr[i] = capitalizeFirstLetter(arr[i]);
  }
  return arr.join(' ');
}
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
console.log(capitalize('a short sentence'));
module.exports = capitalize;
