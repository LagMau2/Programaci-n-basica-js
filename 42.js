const fs = require('fs');
const readline = require('readline');

const archivo = 'DATOS.DAT';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Abrir el archivo DATOS.DAT en modo lectura y escritura
const file = fs.openSync(archivo, 'r+');

rl.question('Ingrese el ID del registro que desea eliminar: ', (id) => {
  let found = false;

  // Recorrer los registros buscando el ID ingresado
  let buffer = Buffer.alloc(152);
  let bytesRead = fs.readSync(file, buffer, 0, 152, null);
  while (bytesRead > 0) {
    let data = buffer.toString();
    let currentId = data.substring(0, 4);

    if (currentId === id) {
      found = true;

      // Eliminar el registro
      fs.ftruncateSync(file, fs.position - bytesRead);
      console.log(`Registro con ID ${id} eliminado.`);
      break;
    }

    bytesRead = fs.readSync(file, buffer, 0, 152, null);
  }

  if (!found) {
    console.log(`No se encontró ningún registro con ID ${id}.`);
  }

  // Cerrar el archivo
  fs.closeSync(file);
  rl.close();
});
