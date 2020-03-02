// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
  const results = [];

  for (let i = 0; i < n; i++) { //generate arrays in array
    results.push([]);
  }

  let counter = 1;
  let startColumn = 0;
  let endColumn = n - 1;
  let startRow = 0;
  let endRow = n - 1;
  while (startColumn <= endColumn && startRow <= endRow) { //[[],[],[]]
    // Top row
    for (let i = startColumn; i <= endColumn; i++) { //i = 0; 
      results[startRow][i] = counter; //[[1],[],[]]
      console.log('start column: ', startColumn)
      counter++; //counter === 1 
      console.log(results);
    }
    startRow++; // 1

    // Right column
    for (let i = startRow; i <= endRow; i++) { // i=== 1; i needs to be equal 2 to exit;
      results[i][endColumn] = counter; // 
      console.log('end column: ', endColumn);
      counter++; // 3
      console.log(results);
    }
    endColumn--; //1

    // Bottom row
    for (let i = endColumn; i >= startColumn; i--) { //i === 1; 
      results[endRow][i] = counter; //
      console.log('end Row: ', endRow);
      counter++; //counter === 4;
      console.log(results);
    } 
    endRow--; //endrow === 1

    // start column
    for (let i = endRow; i >= startRow; i--) { // i === 1; 
      results[i][startColumn] = counter; 
      counter++; ///counter === 5
      console.log('star column: ', startColumn);
      console.log(results);
    }
    startColumn++; // startColumn === 1 
  }

  return results;
}
console.log(matrix(3));

module.exports = matrix;
