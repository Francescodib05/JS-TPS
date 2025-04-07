//Creare un array di oggetti, ciascuno rappresentante una persona con un nome e un'età. Ordina l'array per età in ordine crescente e poi estrai solo i nomi delle persone che hanno più di 18 anni.
// Creazione dell'array di oggetti con nome e età
const persone = [
    { nome: "Mario", eta: 30 },
    { nome: "Giulia", eta: 25 },
    { nome: "Luca", eta: 35 },
    { nome: "Anna", eta: 17 },
    { nome: "Marco", eta: 20 }
  ];
  
  // Ordinamento dell'array per età in ordine crescente
  persone.sort((a, b) => a.eta - b.eta);
  
  // Estrazione dei nomi delle persone con età maggiore di 18 anni
  const nomiMaggiori18 = persone
    .filter(persona => persona.eta > 18)
    .map(persona => persona.nome);
  
  // Stampa del risultato
  console.log(nomiMaggiori18);
  
  