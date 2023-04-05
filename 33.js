
const calificaciones = [7, 8, 9, 7, 6, 8, 9, 8, 7, 8];

let suma = 0;
for (let i = 0; i < calificaciones.length; i++) {
  suma += calificaciones[i];
}

const media = suma / calificaciones.length;

console.log(`La media de las calificaciones es: ${media}`);
