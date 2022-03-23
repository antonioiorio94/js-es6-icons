/*
Milestone 1
Partendo dalla struttura dati fornita, visualizzare in pagina un box per ogni icona, in cui è presente il nome dell'icona e l'icona stessa.*/

//let iconName = [];

//const icon = icons.forEach((element) => {
//  iconName.push(element.name);});

//Uso il metodo map per recuperare tutti i nomi e le classi
const iconName = icons.map((icon) => {
  return icon.name;
});

console.log(iconName);

const iconClass = icons.map((icon) => {
  return icon.prefix;
});

console.log(iconClass);

const divContainer = document.getElementById("container");

//Uso forEach per inserire name e prefix nei div
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

/*
Milestone 2
Ciascuna icona ha una proprietà "color": utilizzare questa proprietà per visualizzare le icone del colore corrispondente.*/
