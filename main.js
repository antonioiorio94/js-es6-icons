/*
Milestone 1
Partendo dalla struttura dati fornita, visualizzare in pagina un box per ogni icona, in cui è presente il nome dell'icona e l'icona stessa.*/

/*
Milestone 2
Ciascuna icona ha una proprietà "color": utilizzare questa proprietà per visualizzare le icone del colore corrispondente.*/

//PROVE
//let iconName = [];

//const icon = icons.forEach((element) => {
//  iconName.push(element.name);});

const divContainer = document.getElementById("container");

//Uso forEach per inserire name,prefix e color nei div

icons.forEach(({ name, prefix, color }) => {
  const divIconBox = document.createElement("div");
  divIconBox.setAttribute("class", " icon_box");
  const divWithIcon = document.createElement("i");
  divWithIcon.setAttribute("class", prefix);
  divWithIcon.classList.add("class", color);
  const divWithName = document.createElement("h3");
  divWithName.innerHTML = name.toUpperCase();
  divIconBox.appendChild(divWithIcon);
  divIconBox.appendChild(divWithName);
  divContainer.appendChild(divIconBox);
});

/*Milestone 3
Aggiungere alla pagina una select in cui le options corrispondono ai vari tipi di icone (animal, vegetable, user). Quando l'utente seleziona un tipo dalla select, visualizzare solamente le icone corrispondenti.*/

//Uso il metodo map per recuperare tutti i tipi
const iconType = icons.map((icon) => {
  return icon.type;
});

console.log(iconType);

//Event listener sul value del selector
let valueOfSelect = document
  .getElementById("selector")
  .addEventListener("change", function () {
    console.log(this.value);
  });

console.log(valueOfSelect);
