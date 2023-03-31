const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Introduce S o N: ", function(letra) {
    if(letra == "S" || letra == "N"){
      console.log(letra + " si se permite");
  } else{
    console.log(letra + " no se permite");
  }
  rl.close();
});