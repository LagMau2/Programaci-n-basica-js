let suma_impar = 0;
let suma_par = 0;
for (let i = 1; i<= 1000; i++){
    if(i % 2 == 0) suma_par += i;
    else suma_impar += i;
}
console.log("Suma de impares: "+suma_impar);
console.log("Suma de pares: " +suma_par);