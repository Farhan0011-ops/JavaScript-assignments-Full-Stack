
function concat(strings) {
  let result = "";

  for (let i = 0; i < strings.length; i++) {
    result += strings[i]; 
  }

  return result;
}

const names = ["shafi", "farhan", "noman", "tabish"];

const combined = concat(names);

document.getElementById("result").textContent = combined;
