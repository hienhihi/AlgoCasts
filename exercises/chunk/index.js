// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]
//create new array and everytime we go through loop, we push it into a sub array, when the length is qualify, we push into big array. then return 
//set another if statement of if i is last of array, just push
function chunk(array, size) {
  let resArr = []; 
  let subArr = [];
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    if (count === size) {
      resArr.push(subArr);
      subArr = [];
      count = 0;
    }
    subArr.push(array[i]);
    count++;
    if (i === array.length-1) {
      resArr.push(subArr);
      return resArr;
    }
  }
  return resArr;
}

var chunkUdemy = (arr, size) => {
  const chunked = [];
  let index = 0;
  while (index < arr.length) {
    chunked.push(arr.slice(index, index+ size))
    index += size;
  }
  return chunked;
}

console.log(chunkUdemy([1,2,4,6,2,2,4,], 2));

module.exports = chunk;
