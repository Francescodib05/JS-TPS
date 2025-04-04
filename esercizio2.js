//  2:   Crea un array contenente numeri da 1 a 10. 
//       Ricava da questo array, un altro contenente solo i numeri pari moltiplicati per 2.

arr = []
arrclone = []

for (i=0; i<10; i++){
    arr[i] = i + 1 

    if (arr[i]%2 == 0){
        arrclone.push(arr[i]*2) 
    }
}

console.log(arr)
console.log(arrclone)