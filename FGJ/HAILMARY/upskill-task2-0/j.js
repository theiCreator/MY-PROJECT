



// function nth_most_rare(arr, n) {
//   // Count the frequency of each number using an object (dictionary)
//   let frequency = {};
//   arr.forEach(num => {
//       frequency[num] = (frequency[num] || 0) + 1;
//   });

//   // Sort the unique numbers by their frequencies in ascending order
//   let sortedNumbers = Object.keys(frequency).sort((a, b) => frequency[a] - frequency[b]);

//   // Get the nth rarest item (considering 1-based indexing)
//   if (n <= sortedNumbers.length) {
//       return parseInt(sortedNumbers[n - 1]); // ParseInt ensures the return value is a number, not a string
//   } else {
//       return null; // Return null if n is out of range
//   }
// }

// // Example usage
// let arr = [5, 4, 5, 4, 5, 4, 4, 5, 3, 3, 3, 2, 2, 1, 5];


// let n = 2;
// let result = nth_most_rare(arr, n);
// console.log(`The ${n}th rarest item is: ${result}`);

// function nth_most_rate(list, n) {
//   // Initialize an empty set to store the rarest items
//   let rare_items = new Set();

  
//   // Loop through the list and add each item to the set
//   for (let i = 0; i < list.length; i++) {
//   if (rareitems.has(list[i])) {
//   // The item is already in the set, so we continue to the next item
//   continue;
//   }

