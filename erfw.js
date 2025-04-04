const readline = require('readline');


// Chiedi all'utente il suo nome
rl.question('Come ti chiami? ', (nome) => {
  console.log('Ciao, ' + nome + '!');
  rl.close();  // Chiudi l'interfaccia dopo aver ricevuto l'input
});