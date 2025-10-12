
let dogs = [];


for (let i = 0; i < 6; i++) {
  let name = prompt(`Enter name of dog ${i + 1}:`);
  dogs.push(name);
}


dogs.sort();      
dogs.reverse();   


const list = document.getElementById("dogList");


for (let i = 0; i < dogs.length; i++) {
  const li = document.createElement("li");
  li.textContent = dogs[i];
  list.appendChild(li);
}
