const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });

  
readline.question('Introduce un número: ', (num1) => {
    const n1 = parseInt(num1);

    readline.question('Introduce otro número: ', (num2) => {
        const n2 = parseInt(num2);
        
        let cont = 0;
        let cont_pares = 0;
        let suma = 0;
        const menor = Math.min(n1, n2);
        const mayor = Math.max(n1, n2);

        for (let i = menor; i <= mayor; i++) {
            cont++;
            console.log(i);
            if(i%2 == 0){
                cont_pares++;
            }else{
                suma+=i;
        };
    };

    console.log("Cantidad de numeros: " + cont);
    console.log("Cantidad de pares: " + cont_pares);
    console.log("Suma de impares: " + suma);

    readline.close();
    });
});


  