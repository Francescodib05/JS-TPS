//2: Crea un array contenente numeri da 1 a 10. Ricava da questo array, un altro contenente solo i numeri pari moltiplicati per 2.

const numeri = [1,2,3,4,5,6,7,8,9,10];

const numeriper =
numeri.filter(numero => numero % 2 === 0);
numeri.map(numero => numero * 2)

console.log(numeriper);
