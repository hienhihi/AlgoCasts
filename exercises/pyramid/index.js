// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n, row = 1, stair = '') {
  let length = helper(n).length;
  let last = helper(n);
  for (var i = 0; i < n; i++) {
    let res = helper(row);
    let space = (length - res.length)/2;
    for (var j = 0; j < space; j++) {
      res = " " + res + " ";
    }
    console.log(res);
    row++;
  }
  if (row === n) {
    console.log(last);
  }
  return;
}

function helper(num) {
  // instead of doing recursion,let;s do iterative
  //instead of returning number of console log. return 1 string
  let res = '#';
  if (num === 1) {
    return res;
  }
  for (var i = 1; i < num; i++) {
    res += '##';
  }
  return res;
}

console.log(pyramid(2));

module.exports = pyramid;
