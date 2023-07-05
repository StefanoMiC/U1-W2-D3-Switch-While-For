// CICLO FOR
// Di gran lunga il più usato
// Permette di eseguire un blocco di codice un numero PREDETERMINATO di volte.

// SINTASSI:
// for(definizione contatore; condizione; incremento contatore) {
//  istruzioni da eseguire fino a che la condizione sarà vera
// }

// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

// anche il ciclo for è BLOCCANTE, ogni istruzione successiva ad esso dovrà aspettare la sua conclusione
// se siamo qui significa che tutte le operazioni contenute nel blocco del ciclo for sono state eseguite
console.log("CICLO CONCLUSO");

const arrayOfStudents = ["Davide", "Alessandro", "Alaa", "Bilgen", "Caterina", "Manuel", "Massimo", "Mariangela"];

// "Davide" //0
// "Alessandro" //1
// "Alaa" //2
// "Bilgen", //3
//  ....

// il ciclo for è PERFETTO per ATTRAVERSARE GLI ARRAY

// arrayOfStudents[0]
// arrayOfStudents[1]
// arrayOfStudents[2]
// arrayOfStudents[3]

// per no dover selezionare le posizioni a mano, non sapendo nemmeno quando doversi fermare, a meno di non contare le posizioni
// si può utilizzare il ciclo for per automatizzare il processo

for (let i = 0; i < arrayOfStudents.length; i++) {
  //   if (i % 2 === 0) {
  //     console.log("indice: ", i, arrayOfStudents[i]);
  //   }

  if (arrayOfStudents[i] === "Caterina") {
    console.log("Caterina esiste ed è in posizione: ", i);
    continue;
  }

  if (arrayOfStudents[i] === "Massimo") {
    console.log("Massimo esiste ed è in posizione: ", i);
    break;
  }
  console.log("iterazione numero", i + 1);
}

const arrOfNums = [5, 15, 290, 10, 20];

let sum = 0;

for (let i = 0; i < arrOfNums.length; i++) {
  console.log("elemento: ", arrOfNums[i]);

  sum = sum + arrOfNums[i];
  console.log("SUM", sum);
}

let namesStr = "";

for (let i = 0; i < arrayOfStudents.length; i++) {
  namesStr = namesStr + arrayOfStudents[i] + " ";

  console.log(namesStr);
}

let emptyArr = [];

for (let i = 0; i < 10; i++) {
  emptyArr.push(i + 1);
}

console.log(emptyArr);
