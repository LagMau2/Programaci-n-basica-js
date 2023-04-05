const fs = require('fs');
const readline = require('readline');

const archivo = 'DATOS.DAT';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const file = fs.openSync(archivo, 'r+');

rl.question('Ingrese el ID del registro que desea eliminar: ', (id) => {
  let found = false;

  let buffer = Buffer.alloc(152);
  let bytesRead = fs.readSync(file, buffer, 0, 152, null);
  while (bytesRead > 0) {
    let data = buffer.toString();
    let currentId = data.substring(0, 4);

    if (currentId === id) {
      found = true;

      fs.ftruncateSync(file, fs.position - bytesRead);
      console.log(`Registro con ID ${id} eliminado.`);
      break;
    }

    bytesRead = fs.readSync(file, buffer, 0, 152, null);
  }

  if (!found) {
    console.log(`No se encontró ningún registro con ID ${id}.`);
  }

  fs.closeSync(file);
  rl.close();
});
