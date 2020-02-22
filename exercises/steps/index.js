// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// function steps(n) {
//   let counter = 1;
//   while (counter <= n) { //time to run, console log after every iteration
//     let str = "";
//     let i = 0;
//     while (str.length < n) { //to accumulate enough for each iteration, set i and str again at the end of iteration
//       while (i < counter) { //to accumulate enough #
//         str += "#";
//         i++;
//       }
//       if (counter !== n) {
//         str += " "
//       }
//     }
//     console.log(str);
//     counter++;
//     str = ""
//   }
// }
// console.log(steps(4));


//recursion solutiomn

function steps(n, row = 0, stair = '') {
  if (n === row) {
    return;
  }
  
  if (n === stair.length) {
    console.log(stair);
    return steps(n, row+1);
  }
  
  if (stair.length <= row) {
    stair += '#';
  } else {
    stair += ' ';
  }
  steps(n, row, stair);
}
module.exports = steps;