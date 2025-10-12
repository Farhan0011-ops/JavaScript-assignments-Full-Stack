
let numbers = [];

while (true) {
  
  const input = parseFloat(prompt("Enter a number (0 to stop):"));
  if (input === 0) {
    break;
  }

  numbers.push(input);
}

numbers.sort((a, b) => b - a);

console.log("Numbers from largest to smallest:");
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}
