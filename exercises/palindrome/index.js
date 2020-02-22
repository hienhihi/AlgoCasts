// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false
// if length is even , word count should be 2 for everything. else 2 for everything and 1 one

function palindrome(str) {
  return str.split('').every((val, i, arr) => val === arr[arr.length -i -1])
}

console.log(palindrome('1000000001'));


module.exports = palindrome;

// let obj = {};
//   let one = 0;
//   let regex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;
//   str = str.replace(regex, '');

//   for (let i = 0; i < str.length; i++) {
//     obj[str[i]] = obj[str[i]]+1 || 1
//   }
//   console.log(obj);
//   let counts = Object.values(obj);
//   console.log(counts);
//   if (str.length % 2 === 0) {
//     return counts.every((val, i, arr) => val === 2);
//   } else {
//     for (var i = 0; i < counts.length; i++) {
//       if (counts[i] === 1) {
//         one++;
//       } else if (counts[i] !== 2) {
//         return false;
//       }
//     }
//     if ( one === 1) {
//       return true;
//     }
//     return false;
//   }