// CICLI
// un cliclo nello sviluppo software rappresenta una struttura in gradi di ripetere l'esecuzione di una porzione di codice
// un numero definito indefinito di volte, fino al raggiungimento di uno scopo.

// CICLO WHILE
// il cliclo "while" è una struttura che potenzialmente ripete del codice un numero INDEFINITO di volte

// let contatore = 0;
// console.log(contatore);

// while (contatore < 3000) {
//   contatore++; // contatore += 1 // contatore = contatore + 1
//   console.log("numero incrementato:", contatore);
// }

// // il ciclo while è BLOCCANTE, finché il cilo non è finito qualsiasi linea di codice successiva alla 12 non verrà eseguita.
// console.log(contatore);

// ATTENZIONE: se la condizione specificata NON si tramuta mai in false si verificherà un INFINITE LOOP, ciclo infinito.

let randNum = 0;
while (randNum < 100) {
  randNum += Math.floor(Math.random() * 10); // randNum = randNum + (Math.random() * 10)
  console.log("il numero attuale è: ", randNum);
}

// non sappiamo esattamente quanti cicli farà il nostro while,
// ma l'importante è avere una condizione che ne determini la fine, e il cilo si autoregolerà per effettuare il numero esatto di cicli necessari
