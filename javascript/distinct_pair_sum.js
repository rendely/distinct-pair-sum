function distinctPairSum(arr, k) {
  let results = [];
  let usedNumbers = new Set();
  // loop through array to second last item
  for (let i = 0; i < arr.length -1; i++){
    if (usedNumbers.has(arr[i])) { /* do nothing */} 
    else if (arr[i]+arr[i+1] == k) {
      results.push([arr[i], arr[i+1]]);
      usedNumbers.add(arr[i]);
      usedNumbers.add(arr[i+1]);
    }
  }
  return results;
  
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [[1, 1], [2, 0]]");
  console.log("=>", distinctPairSum([0, 1, 1, 2, 0, 1, 1], 2));

  console.log("");

  console.log("Expecting: [[2, 8]]");
  console.log("=>", distinctPairSum([3, 4, 2, 1, 5, 2, 8, 2], 10));
}

module.exports = distinctPairSum;

// Please add your pseudocode to this file
// And a written explanation of your solution

