const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Introduce el primer número: ', (num1) => {
  rl.question('Introduce el segundo número: ', (num2) => {
    console.log(`Los números introducidos son: ${num1} y ${num2}`);

    rl.question('Elige una operación a realizar: suma (+), resta (-), multiplicación (*) o división (/): ', (operacion) => {
      switch(operacion) {
        case '+':
          console.log(`La suma de ${num1} y ${num2} es ${parseFloat(num1) + parseFloat(num2)}`);
          break;
        case '-':
          console.log(`La resta de ${num1} y ${num2} es ${parseFloat(num1) - parseFloat(num2)}`);
          break;
        case '*':
          console.log(`La multiplicación de ${num1} y ${num2} es ${parseFloat(num1) * parseFloat(num2)}`);
          break;
        case '/':
          if(num2 === '0') {
            console.log('Error: no se puede dividir entre cero');
          } else {
            console.log(`La división de ${num1} y ${num2} es ${parseFloat(num1) / parseFloat(num2)}`);
          }
          break;
        default:
          console.log('Operación inválida');
      }

      rl.close();
    });
  });
});
