//Creare un array di oggetti,ciascuno rappresentante una persona con un nome e un'età.ordina l'array per età in ordine crescente e poi estrai solo i nomi delle persone che hanno piu' di 18 anni. ESERCIZIO 3

let persone = [
    { nome: 'Mario', eta: 25 },
    { nome: 'Luigi', eta: 30 },
    { nome: 'Giovanni', eta: 17 },
    { nome: 'Francesca', eta: 22 },
    { nome: 'Alessandro', eta: 19 }
  ];
  
persone.sort((a, b) => a.eta - b.eta);
let nomiMaggiorenni = persone.filter(p => p.eta > 18).map(p => p.nome);
console.log(nomiMaggiorenni);


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Crea un array contenente numeri da 1 a 10.Ricava da questo array, un altro contenente solo i numeri pari moltiplicati per 2. ESERCIZIO 2

let list2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numPariMoltiplicati = list2.filter(n => n % 2 === 0).map(n => n * 2);
console.log(numPariMoltiplicati);


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//Scrivi un programma che crea un array di 5 numeri, somma tutti gli elementi dell'array e stampa il risultato. ESERCIZIO 1.

const list = [1,2,3,4,5];
const [a,b,c,d,e] = list;
console.log(a + b + c + d + e);


/////////////////////////////////////////////////////////////////////////////////////////////////////////////