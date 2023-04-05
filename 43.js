const fs = require('fs');
const readline = require('readline');


const archivo = 'DATOS.DAT';
const fd = fs.openSync(archivo, 'r+');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function buscarRegistro() {
  rl.question('Ingrese el ID del registro que desea modificar: ', (id) => {
    let encontrado = false;

    const buffer = Buffer.alloc(1024);
    let bytesRead = 0;
    let pos = 0;
    while ((bytesRead = fs.readSync(fd, buffer, 0, 1024, pos)) !== 0) {
      const registro = buffer.toString('utf-8', 0, bytesRead).split(',');

      if (registro[0] === id) {
        encontrado = true;
        console.log(`ID: ${registro[0]}`);
        console.log(`NOMBRE: ${registro[1]}`);
        console.log(`APELLIDOS: ${registro[2]}`);
        console.log(`DIRECCIÓN: ${registro[3]}`);
        console.log(`ESTADO: ${registro[4]}`);

        rl.question('Ingrese el nuevo nombre: ', (nombre) => {
          rl.question('Ingrese los nuevos apellidos: ', (apellidos) => {
            rl.question('Ingrese la nueva dirección: ', (direccion) => {
              rl.question('Ingrese el nuevo estado: ', (estado) => {
                const nuevoRegistro = `${id},${nombre},${apellidos},${direccion},${estado}\n`;
                fs.writeSync(fd, nuevoRegistro, null, 'utf-8');
                console.log('Registro modificado exitosamente');
                rl.close();
              });
            });
          });
        });

        break;
      }

      pos += bytesRead;
    }

    if (!encontrado) {
      console.log(`No se encontró ningún registro con el ID ${id}`);
      rl.close();
    }
  });
}

buscarRegistro();
