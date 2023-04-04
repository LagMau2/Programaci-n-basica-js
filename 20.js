const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
readline.question('Introduce un número: ', (num) => {
const f = factorial(num);
console.log(`El factorial de ${num} es: ${f}`);
readline.close();
});

function factorial(num) {
let resultado = 1;
for (let i = 2; i <= num; i++) {
    resultado *= i;
}
return resultado;
}