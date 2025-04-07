//Scrivi un programma che crea un array di 5 numeri, somma tutti gli elementi dell'array e stampa il risultato.
const array = [1, 2, 3, 4, 5];
let somma = 0;

for (let i = 0; i < array.length; i++) {
    somma += array[i];
}

console.log(somma);