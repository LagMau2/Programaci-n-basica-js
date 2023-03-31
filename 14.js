const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  let numeros = [];
  
  readline.question('Introduce un número: ', (num1) => {
    numeros.push(parseInt(num1));
  
    readline.question('Introduce otro número: ', (num2) => {
      numeros.push(parseInt(num2));
  
      readline.question('Introduce otro número: ', (num3) => {
        numeros.push(parseInt(num3));
  
        readline.question('Introduce otro número: ', (num4) => {
          numeros.push(parseInt(num4));
  
          readline.question('Introduce otro número: ', (num5) => {
            numeros.push(parseInt(num5));
  
            let mayor = numeros[0];
            let menor = numeros[0];
  
            for (let i = 1; i < numeros.length; i++) {
              if (numeros[i] > mayor) {
                mayor = numeros[i];
              }
              if (numeros[i] < menor) {
                menor = numeros[i];
              }
            }
  
            console.log(`El número mayor es ${mayor}.`);
            console.log(`El número menor es ${menor}.`);
  
            readline.close();
          });
        });
      });
    });
  });