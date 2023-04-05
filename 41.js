const fs = require('fs');
const readline = require('readline');

function agregarRegistro() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question('ID: ', (id) => {
    rl.question('Nombre: ', (nombre) => {
      rl.question('Apellidos: ', (apellidos) => {
        rl.question('Dirección: ', (direccion) => {
          rl.question('Estado: ', (estado) => {
            rl.close();

            const registro = { id, nombre, apellidos, direccion, estado };
            const data = JSON.parse(fs.readFileSync('DATOS.DAT'));
            data.push(registro);
            fs.writeFileSync('DATOS.DAT', JSON.stringify(data));
            console.log('Registro agregado exitosamente.');
          });
        });
      });
    });
  });
}

agregarRegistro();
