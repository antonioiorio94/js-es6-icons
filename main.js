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
