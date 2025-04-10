interface Person {
    name: string;
    age: number;
}

const persona: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const clonePersona: number[] = [...persona]


const persons: Person[] = [
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

function somma(): number {
    return persona.reduce((a, number) => a + number, 0);
}

function numeriPari(): number[] {
    return clonePersona.filter(number => number % 2 === 0).map(n => n * 2);
}

function maggiorenni(): Person[] {
    return persons.filter(person => person.age >= 18).sort((a, b) => a.age - b.age);
}

const adults: Person[] = maggiorenni()

console.log("la somma dell'array è:", somma());
console.log("I numeri pari sono:", numeriPari());
console.log(adults);

