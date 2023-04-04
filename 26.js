const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Frase: ', (frase) => {
  const ancho = process.stdout.columns;
  const camino = Math.floor((ancho - frase.length) / 2);
  console.log(' '.repeat(camino) + frase);
  rl.close();
});