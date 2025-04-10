const persona = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const clonePersona = [...persona]

const persons = [
    { name: 'Paul', age: 16 },
    { name: 'George', age: 17 },
    { name: 'Lucas', age: 21 },
    { name: 'Marco', age: 32 },
    { name: 'Peter', age: 18 },
    { name: 'Carl', age: 13 },
    { name: 'Simon', age: 24 },
    { name: 'Mark', age: 15 },
    { name: 'Sandra', age: 34 },
    { name: 'Alice', age: 28 }
];

function somma(...numeri) {
    numeri = [...persona]
    return numeri.reduce((a, number) => a + number, 0);
}

function numeriPari(...numeri) {
    numeri = [...clonePersona]
    return numeri.filter(number => number % 2 === 0).map(num => num * 2);
}

function numeriDoppi(...numeri) {
    numeri = [...persona]
    ris = []
    numeri.filter(num => num % 2 === 0).forEach((num, i, arr) => { arr[i] = ris.push(num * 2) });
    return ris;
}

function maggiorenni(...person) {
    person = [...persons]
    return person.filter(person => person.age >= 18).sort((a, b) => a.age - b.age).map(person => person.age);
}

const adults = maggiorenni(persons)

console.log("la somma dell'array è:", somma());
console.log("I numeri sono:", clonePersona, " i numeri pari moltiplicati per 2 sono:", numeriPari());
console.log("I numeri pari moltiplicati con il metodo forEach:", numeriDoppi());
console.log("Eta delle persone adulte :", adults);

