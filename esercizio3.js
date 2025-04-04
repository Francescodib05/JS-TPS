//3: Creare un array di oggetti, ciascuno rappresentante una persona con un nome e un'età. 
//   Ordina l'array per età in ordine crescente e poi estrai solo i nomi delle persone che hanno più di 18 anni.

const users = [
    { nome: "Anto", eta: 23 },
    { nome: "Pino", eta: 45 },
    { nome: "Gino", eta: 16 },
    { nome: "Ciro", eta: 51 },
    { nome: "Peppe", eta: 18 },
    { nome: "Carlo", eta: 27 },
    { nome: "Piero", eta: 14 },
    { nome: "Marco", eta: 11 },
    { nome: "Lello", eta: 19 },
    { nome: "Gianni", eta: 23 }
];

const magg = users.sort((a, b) => a.eta - b.eta)
                  .filter(user => user.eta >= 18)
                  .map(user => user.nome);


console.log(magg);
