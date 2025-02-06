/*
0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144...
Parameter: number
Return: The integer representing the nth number in the fibonnaci sequence
Example(s): See Below
Pseudocode:
initialize initial array variable as [0,1] as problem states
use for loop while i is less then num
continually pushing the sum of the previous and current indexes to the array variable on each iteration
return index of array[num]
*/

function fibonacci(num) {
  let array = [0,1];

  for (let i = 1; i < num; i++){
    let sum = array[i-1] + array[i]
    array.push(sum)
  }

  return array[num]
}

module.exports = fibonacci;
