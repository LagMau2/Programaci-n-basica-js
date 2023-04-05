const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Introduce el estado a buscar: ', (estado) => {
  fs.readFile('DATOS.DAT', (err, data) => {
    if (err) throw err;

    let registros = data.toString().split('\n');
    let registrosFiltrados = [];

    for (let i = 0; i < registros.length; i++) {
      let registro = registros[i].split(',');
      if (registro[4].trim() === estado) {
        registrosFiltrados.push(registros[i]);
      }
    }

    console.log('Registros encontrados:');
    console.log(registrosFiltrados.join('\n'));
    rl.close();
  });
});
