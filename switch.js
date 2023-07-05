const firstName = "Angelo";

// immaginiamo di dover calcolare ore di cardio

let hoursOfIntenseCardio;

// if (firstName === "Stefano") {
//   hoursOfIntenseCardio = 50;
// } else if (firstName === "Angelo") {
//   hoursOfIntenseCardio = 1;
// } else if (firstName === "Andrea") {
//   hoursOfIntenseCardio = 10;
// } else if (firstName === "Flavio") {
//   hoursOfIntenseCardio = 0;
// } else {
//   hoursOfIntenseCardio = 15;
// }

// if (hoursOfIntenseCardio === 0) {
//   console.log("Ti è andata bene questa volta, non devi fare cardio");
// } else if (hoursOfIntenseCardio === 1) {
//   console.log("Te tocca fà " + hoursOfIntenseCardio + " ora di corsa!");
// } else {
//   console.log("Te tocca fà " + hoursOfIntenseCardio + " ore di corsa!");
// }

// REFACTOR del codice precedente (cambiamo sintassi senza cambiarne l'effetto o output)

// SWITCH CASE

switch (firstName) {
  case "Stefano":
    hoursOfIntenseCardio = 50;
    // console.log("Stefano", 50);
    break;

  case "Angelo":
    hoursOfIntenseCardio = 2;
    // console.log("Angelo", 1);
    break;

  case "Flavio":
    hoursOfIntenseCardio = 0;
    // console.log("Flavio", 0);
    break;

  default:
    // console.log("default", 15);
    hoursOfIntenseCardio = 15;
}

switch (hoursOfIntenseCardio) {
  case 0:
    console.log(firstName + ", ti è andata bene questa volta, non devi fare cardio");
    break;
  case 1:
    console.log(firstName + ", te tocca fà " + hoursOfIntenseCardio + " ora di corsa!");
    break;

  default:
    console.log("Te tocca fà " + hoursOfIntenseCardio + " ore di corsa!");
}

console.log("VARIABILE:", hoursOfIntenseCardio);

switch (true) {
  case hoursOfIntenseCardio === 15:
    console.log("Non sei Stefano, Flavio, Andrea o Angelo. Quindi ti fai 15 ore di cardio");
  // non avere il break qui mi farà scatenare anche il codice presente al case successivo, anche se la sua condizione non è verificata.
  // l'esecuzione si fermerà al successivo break, se presente, altrimenti li eseguirà tutti, default compreso.
  case hoursOfIntenseCardio > 1:
    console.log("Running...");
    break;
  default:
    console.log("Ciao cicci!");
}

const myBool = false;

// uno switch per valutare 2 condizioni booleane non ha molto senso
switch (myBool) {
  case true:
    console.log("verificata");
    break;
  case false:
    console.log("non verificata");
    break;
}

// utilizzate piuttosto una struttura ternaria molto più immediata e concinsa
console.log(myBool ? "verificata" : "non verficata");
