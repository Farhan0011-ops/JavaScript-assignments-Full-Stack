function even(numbers) {
  const evens = []; 

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      evens.push(numbers[i]);
    }
  }

  return evens; 
}

const originalArray = [2, 7, 4, 9, 10, 13]; 
const evenArray = even(originalArray); 

console.log("Original array:", originalArray);
console.log("Even numbers array:", evenArray);
