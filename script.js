// TRACCIA :eyes:
// Vogliamo gestire la nostra libreria di casa.
// Abbiamo un array di libri. Ogni libro è rappresentato da 3 proprietà: autore, titolo e anno di pubblicazione.
// MILESTONE 1
// La prima cosa fondamentale è sapere quali libri abbiamo in libreria. Quindi mostriamoli sulla pagina.
// [IMPORTANTE] In questa fase, non focalizziamoci sul layout (quello possiamo farlo in un secondo momento). Limitiamoci a stamparli in una ul o in dei paragrafi con degli hr come separatori.
// MILESTONE 2
// Abbiamo la lista di libri, perfetto!
// Proviamo ad aggiungere manualmente un nuovo libro nella libreria.
// MILESTONE 3
// I libri cominciano ad essere un bel po'. Abbiamo bisogno di poter effettuare una ricerca!
// Creiamo un input in cui poter inserire il nome di un autore. Al click su un pulsante "Cerca", andiamo a filtrare i libri da visualizzare.
// BONUS
// Un'altra cosa importante è poter aggiungere nuovi libri quando li compriamo!
// Creiamo un form in cui si possa inserire titolo, autore e anno di pubblicazione. Al click su un pulsante "Aggiungi", aggiungeremo il libro alla lista. Sono tutti e tre dati importanti per un libro, quindi assicuriamoci di NON aggiungere libri se l'utente non ha inserito tutte le tre proprietà.



$(document).ready(
  function(){

    const books = [
      {
        title: "Il vecchio e il mare",
        author: "Ernest Hemingway",
        year: 1951
      },
      {
        title: "La forma dell'acqua",
        author: "Andrea Camilleri",
        year: 1994
      },
      {
        title: "Elogio della follia",
        author: "Henri Laborit",
        year: 1976
      },
      {
        title: "La camera azzurra",
        author: "George Simenon",
        year: 1964
      },
      {
        title: "Capire Javascript è impossibile!",
        author: "Marco Calvieri",
        year: 2020
      },
      {
        title: "Capire Javascript è impossibile!",
        author: "Marco Calvieri",
        year: 2020
      },
      {
        title: "Il vecchio e il mare",
        author: "Ernest Hemingway",
        year: 1951
      },
      {
        title: "La forma dell'acqua",
        author: "Andrea Camilleri",
        year: 1994
      },
      {
        title: "Elogio della follia",
        author: "Henri Laborit",
        year: 1976
      },
      {
        title: "La camera azzurra",
        author: "George Simenon",
        year: 1964
      },
      {
        title: "Capire Javascript è impossibile!",
        author: "Marco Calvieri",
        year: 2020
      },
      {
        title: "Capire Javascript è impossibile!",
        author: "Marco Calvieri",
        year: 2020
      }
    ];

    const container = $("#libreria");

    print(books, container);








  }
);

//---------------------------------------------
// FUNCTIONS

function print(array, container){
  container.html("");
  array.forEach((element, i) => {
    container.append(`
      <div class="libro">
      <h2>${element.title}</h2>
      <ul>
        <li>Autore: ${element.author}</li>
        <li>Anno: ${element.year}</li>
      </div>
      `);
  });


}
