const fs = require('fs');
const readline = require('readline');

const registroStruct = {
  ID: Number,
  NOMBRE: String,
  APELLIDOS: String,
  DIRECCION: String,
  ESTADO: String
};

function leerRegistro(file, offset) {
  const buffer = Buffer.alloc(36);
  const fd = fs.openSync(file, 'r');
  fs.readSync(fd, buffer, 0, 36, offset);
  fs.closeSync(fd);
  const registro = {};
  let start = 0;
  for (let campo in registroStruct) {
    const tipo = registroStruct[campo];
    const longitud = tipo == Number ? 4 : 12;
    registro[campo] = tipo(buffer.readUIntLE(start, longitud));
    start += longitud;
  }
  return registro;
}

function buscarRegistroPorID(file, id) {
  const indexBuffer = Buffer.alloc(8);
  const fd = fs.openSync(`${file}.ndx`, 'r');
  let encontrado = false;
  let offset = 0;
  while (!encontrado && fs.readSync(fd, indexBuffer, 0, 8, offset) == 8) {
    const registroID = indexBuffer.readUInt32LE(0);
    const registroOffset = indexBuffer.readUInt32LE(4);
    if (registroID == id) {
      encontrado = true;
      const registro = leerRegistro(file, registroOffset);
      console.log(registro);
    } else {
      offset += 8;
    }
  }
  if (!encontrado) {
    console.log(`No se encontró ningún registro con ID ${id}.`);
  }
  fs.closeSync(fd);
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.question('Introduce el ID del registro que deseas consultar: ', (id) => {
  buscarRegistroPorID('DATOS.DAT', Number(id));
  rl.close();
});
