const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Introduce un número entre 0 y 10: ', (numero) => {
  if (numero >= 0 && numero <= 10) {
    for (let i = 1; i <= 10; i++) {
      console.log(`${numero * i}`);
    }
  } else {
    console.log('El número introducido no está entre 0 y 10');
  }
  rl.close();
});
