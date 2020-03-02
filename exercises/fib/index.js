// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function fib(n) {
  let fibbo = [0, 1];
  if (n === 0) {
    return 0;
  } else if ( n === 1 || n === 2) {
    return 1;
  }
  while (fibbo.length < n+1) {
    let length = fibbo.length;
    let last = fibbo[length-1] + fibbo[length-2];
    fibbo.push(last);
  }
  return fibbo[n];
}

console.log(fib(5));

module.exports = fib;
