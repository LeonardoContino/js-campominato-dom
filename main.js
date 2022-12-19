// console.log("js ok");

/*
# MILESTONE 1
Prepariamo "qualcosa" per tenere il punteggio dell'utente.
Quando l'utente clicca su una cella, incrementiamo il punteggio.
Se riusciamo, facciamo anche in modo da non poter più cliccare la stessa cella.
# MILESTONE 2
Facciamo in modo di generare 16 numeri casuali (tutti diversi) compresi tra 1 e il massimo di caselle disponibili.
Generiamoli e stampiamo in console per essere certi che siano corretti
# MILESTONE 3
Quando l'utente clicca su una cella, verifichiamo se ha calpestato una bomba, controllando se il numero di cella è presente nell'array di bombe. Se si, la cella diventa rossa (raccogliamo il punteggio e e scriviamo in console che la partita termina) altrimenti diventa azzurra e dobbiamo incrementare il punteggio.
# MILESTONE 4
Quando l'utente clicca su una cella, e questa non è una bomba, dobbiamo controllare se il punteggio incrementato ha raggiunto il punteggio massimo perchè in quel caso la partita termina. Raccogliamo quindi il messaggio è scriviamo un messaggio appropriato.
(Ma come stabiliamo quale sia il punteggio massimo?)
# MILESTONE 5
Quando la partita termina dobbiamo capire se è terminata perchè è stata cliccata una bomba o se perchè l'utente ha raggiunto il punteggio massimo. Dobbiamo poi stampare in pagina il punteggio raggiunto ed il messaggio adeguato in caso di vittoria o sconfitta.

*/

// tutte le funzioni

// funzione creazione cella
function createcell(num) {
  const cell = document.createElement("div");
  cell.append(num);
  cell.classList.add("cell");

  return cell;
}

const btn = document.getElementById("btn");
const box = document.getElementById("map");

// variabili iniziali
const rows = 10;
const cols = 10;
const total = cols * rows;
let score = 0;

btn.addEventListener("click", function () {
  box.innerHTML = "";
  for (let i = 1; i <= total; i++) {
    const cell = createcell(i);

    cell.addEventListener("click", function () {
      cell.classList.add("clicked");
      score++;
      console.log(i);
      console.log(score);
    });

    box.appendChild(cell);
  }
});
