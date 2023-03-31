const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let cont = 0;

function introducirFrase() {
    rl.question("Introduce una frase o 'salir': ", function(frase) {
      if (frase.toLowerCase() === "salir") {
        console.log(cont + " frases.");
        rl.close();
      } else {
        cont++;
        introducirFrase();
      }
    });
  }
  
introducirFrase();
  
  