const calificaciones = [7, 8, 9, 6, 10, 5, 7, 8, 6, 9];

const notaBuscada = 10;

let indiceNota = -1;

for(let i = 0; i < calificaciones.length; i++) {
  if(calificaciones[i] === notaBuscada) {
    indiceNota = i;
    break;
  }
}

if(indiceNota !== -1) {
  console.log(`La nota ${notaBuscada} se encuentra en el índice ${indiceNota} de la lista.`);
} else {
  console.log(`La nota ${notaBuscada} no se encuentra en la lista.`);
}
