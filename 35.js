
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  const matriz = [];
  for (let i = 0; i < 4; i++) {
    matriz.push([]);
    for (let j = 0; j < 5; j++) {
      matriz[i].push(getRandomInt(1, 100));
    }
  }
  
  for (let i = 0; i < 4; i++) {
    console.log(matriz[i].join('\t'));
  }
  