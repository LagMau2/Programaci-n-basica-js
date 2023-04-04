const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  function convertirANumeroRomano(numero) {
    const valoresRomanos = [
      {valor: 1000, romano: "M"},
      {valor: 900, romano: "CM"},
      {valor: 500, romano: "D"},
      {valor: 400, romano: "CD"},
      {valor: 100, romano: "C"},
      {valor: 90, romano: "XC"},
      {valor: 50, romano: "L"},
      {valor: 40, romano: "XL"},
      {valor: 10, romano: "X"},
      {valor: 9, romano: "IX"},
      {valor: 5, romano: "V"},
      {valor: 4, romano: "IV"},
      {valor: 1, romano: "I"}
    ];
    
    let numeroRomano = "";
    
    for (let i = 0; i < valoresRomanos.length; i++) {
      const valorActual = valoresRomanos[i];
      
      while (numero >= valorActual.valor) {
        numeroRomano += valorActual.romano;
        numero -= valorActual.valor;
      }
    }
    
    return numeroRomano;
  }
  
  readline.question('Introduce un número menor de 5000: ', (numero) => {
    const numeroConvertido = parseInt(numero);
    if (isNaN(numeroConvertido) || numeroConvertido < 1 || numeroConvertido >= 5000) {
      console.log('El número introducido no es válido.');
    } else {
      const numeroRomano = convertirANumeroRomano(numeroConvertido);
      console.log(`El número ${numeroConvertido} en número romano es ${numeroRomano}.`);
    }
    readline.close();
  });
  