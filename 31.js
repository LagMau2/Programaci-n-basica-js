const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Ingresa un número: ', (num) => {
  console.log('¿Qué deseas hacer con este número?');
  console.log('1. Comprobar si es primo');
  console.log('2. Hallar su factorial');
  console.log('3. Imprimir su tabla de multiplicar');

  rl.question('Ingresa una opción: ', (opcion) => {
    switch (opcion) {
      case '1':
        if (esPrimo(num)) {
          console.log(`${num} es primo`);
        } else {
          console.log(`${num} no es primo`);
        }
        break;
      case '2':
        console.log(`El factorial de ${num} es ${factorial(num)}`);
        break;
      case '3':
        tablaMultiplicar(num);
        break;
      default:
        console.log('Opción inválida');
        break;
    }
    rl.close();
  });
});

function esPrimo(num) {
  if (num < 2) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

function factorial(num) {
  if (num === 0 || num === 1) {
    return 1;
  }

  return num * factorial(num - 1);
}

function tablaMultiplicar(num) {
  for (let i = 1; i <= 10; i++) {
    console.log(`${num} x ${i} = ${num * i}`);
  }
}
