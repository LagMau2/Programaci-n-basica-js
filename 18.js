const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.question('Introduce una frase: ', (frase) => {
    rl.question('Introduce la letra: ', (letra) => {
      const cont = contador(frase, letra);
      console.log(`La letra '${letra}' aparece ${cont} veces`);
      rl.close();
    });
  });
  
function contador(frase, letra) {
let count = 0;
for (let i = 0; i < frase.length; i++) {
    if (frase.charAt(i) === letra) {
    count++;
    }
}
return count;
}

  