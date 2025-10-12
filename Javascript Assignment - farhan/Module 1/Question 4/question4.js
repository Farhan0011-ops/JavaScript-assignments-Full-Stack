const name = prompt("What is your name?");

const randomNumber = Math.floor(Math.random() * 4) + 1;

let house = "";

switch (randomNumber) {
  case 1:
    house = "Gryffindor";
    break;
  case 2:
    house = "Slytherin";
    break;
  case 3:
    house = "Hufflepuff";
    break;
  case 4:
    house = "Ravenclaw";
    break;
  default:
    house = "some mysterious place...";
}

document.getElementById("result").textContent = `${name}, you are ${house}.`;
