
const M = 5;
const N = 4;
let matriz = [];
for (let i = 0; i < M; i++) {
  matriz[i] = [];
  for (let j = 0; j < N; j++) {
    matriz[i][j] = Math.floor(Math.random() * 100) + 1;
  }
}

console.log("Matriz original:");
console.table(matriz);

let incremento = Math.floor(M / 2);
while (incremento > 0) {
  for (let i = incremento; i < M; i++) {
    let j = i;
    let temp = matriz[i];
    while (j >= incremento && matriz[j - incremento][0] > temp[0]) {
      matriz[j] = matriz[j - incremento];
      j -= incremento;
    }
    matriz[j] = temp;
  }
  incremento = Math.floor(incremento / 2);
}

console.log("Matriz ordenada:");
console.table(matriz);