const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Introduce un número: ", function(numero) {
  numero = parseInt(numero);
    if(numero%2 != 0){
        console.log("Impar");
    }else{
        console.log("Par");
    }
  rl.close();
});