const numDice = parseInt(prompt("How many dice?"));
const targetSum = parseInt(prompt("What sum are you interested in?"));

let matches = 0;
const trials = 10000; 

for (let i = 0; i < trials; i++) {
  let sum = 0;

  for (let j = 0; j < numDice; j++) {
    const roll = Math.floor(Math.random() * 6) + 1; 
    sum += roll;
  }


  if (sum === targetSum) {
    matches++;
  }
}


const probability = (matches / trials) * 100;


document.getElementById("result").textContent =
  `Probability to get sum ${targetSum} with ${numDice} dice is ${probability.toFixed(2)}%`;
