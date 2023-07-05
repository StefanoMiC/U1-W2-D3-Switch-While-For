const myString = "EPICODE is awesome!";

let newString = "";

for (let i = 0; i < myString.length; i++) {
  //   console.log(myString[i]);
  if (myString[i] !== " ") {
    newString += myString[i].toLowerCase();
  } else {
    newString += " - ";
  }
}

// console.log(newString);

let animalsArr = [
  {
    name: "Goldy",
    species: "Goldfish",
    age: 1,
    colors: ["orange", "black", "white"]
  },
  {
    name: "Fuffy",
    species: "Dog",
    age: 12,
    colors: ["brown", "white", "black"]
  },
  {
    name: "Furia",
    species: "Horse",
    age: 3,
    colors: ["brown", "black"]
  },
  {
    name: "Bam Bam",
    species: "Rabbit",
    age: 0.5,
    colors: ["white"]
  }
];

// console.log(animalsArr);

const arrOfAnimalsNames = [];

for (let i = 0; i < animalsArr.length; i++) {
  console.log(animalsArr[i]); // singolo oggetto dell'array // object
  console.log(animalsArr[i].name); // singola proprietà specifica del singolo oggetto dell'array // string

  arrOfAnimalsNames.push(animalsArr[i].name);
}

console.log(arrOfAnimalsNames);
const stringOfAnimalsNames = arrOfAnimalsNames.join(" ");

for (let i = 0; i < animalsArr.length; i++) {
  // è importante notare il tipo di dato che selezioniamo partendo da animalsArr
  // con l'indice avremo l'elemento di primo livello interno all'array, quindi in questo caso specifico un OGGETTO (in altri casi potrebbe essere diverso)
  //   console.log(animalsArr[i]); // singolo oggetto dell'array // object
  //   console.log(animalsArr[i].name); // singola proprietà specifica del singolo oggetto dell'array // string

  animalsArr[i].wild = true; // creo una nuova proprietà per ogni singolo oggetto dell'array animalsArr.
  //volessi renderla false in alcuni casi dovrei creare un if/else che determini il valore true/false in maniera specifica

  //   animalsArr[i].colors // array - animalsArr[i].colors è un array! possiamo trattarlo come tale utilizzando i metodi specifici per gli array
  animalsArr[i].colors.pop();
}

// leggere la variabile dopo l'esecuzione delle operazioni del for loop è fondamentale per capirne il risultato finale
// se volessimo invece vedere il dato comporsi (e non solo il dato finale) dovremmo console loggare dentro il for loop
console.log(animalsArr);
