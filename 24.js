const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Introduce un número: ', (num) => {
    const r = esPrimo(num);
    if (r) {
        console.log("El número es primo");
      } else {
        console.log("El número no es primo");
      };
      rl.close();
});

function esPrimo(numero) {
    if (numero <= 1) {
      return false;
    }
    
    for (let i = 2; i <= numero / 2; i++) {
      if (numero % i === 0) {
        return false;
      }
    }
    
    return true;
  }
