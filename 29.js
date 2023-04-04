let contador = 0;
for (let i = 0; i < 100; i++) {
  const dado1 = Math.floor(Math.random() * 6) + 1;
  const dado2 = Math.floor(Math.random() * 6) + 1;
  if (dado1 + dado2 === 10) {
    contador++;
  }
}
console.log(`Los dados sumaron 10 en ${contador} ocasiones`);
