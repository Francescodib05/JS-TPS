//  1:   Scrivi un programma che crea un array di 5 numeri. 
//       Somma tutti gli elementi dell'array e stampa il risultato.


var arr = []
somma = 0

for(let i=0; i<5; i++){
    r = Math.round(Math.random() * 100) + 1
    arr.push(r)
    somma = somma + r
}

console.log(arr)
console.log("somma = "+ somma)