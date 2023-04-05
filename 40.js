// Matriz de ventas
const ventas = [
    // Representante 1
    [
      [10, 20, 30, 40], 
      [50, 60, 70, 80], 
      [90, 100, 110, 120],
      [130, 140, 150, 160], 
    ],
    // Representante 2
    [
      [170, 180, 190, 200], 
      [210, 220, 230, 240], 
      [250, 260, 270, 280], 
      [290, 300, 310, 320], 
    ],
    // Representante 3
    [
      [330, 340, 350, 360], 
      [370, 380, 390, 400], 
      [410, 420, 430, 440], 
      [450, 460, 470, 480], 
    ],
  ];
  
  const totalVentas = [];
  
  for (let mes = 0; mes < 4; mes++) {
    totalVentas[mes] = [];
    for (let producto = 0; producto < 4; producto++) {
      let total = 0;
      for (let representante = 0; representante < 3; representante++) {
        total += ventas[representante][mes][producto];
      }
      totalVentas[mes][producto] = total;
    }
  }
  

  console.log('TOTAL DE VENTAS POR MES Y POR PRODUCTO');
  console.log('=====================================');
  for (let mes = 0; mes < 4; mes++) {
    console.log(`Mes ${mes + 1}:`);
    for (let producto = 0; producto < 4; producto++) {
      console.log(`- Producto ${producto + 1}: ${totalVentas[mes][producto]}`);
    }
    console.log('-------------------------------------');
  }
  