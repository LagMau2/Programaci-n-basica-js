
const matriz = [];

for (let i = 0; i < 3; i++) {
  const pagina = [];

  for (let j = 0; j < 4; j++) {
    const fila = [];

    for (let k = 0; k < 5; k++) {
      fila.push(i * 20 + j * 5 + k + 1);
    }

    pagina.push(fila);
  }

  matriz.push(pagina);
}

console.log(matriz);
