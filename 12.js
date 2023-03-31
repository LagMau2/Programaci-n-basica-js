let suma_par = 0
let suma_impar = 0

for(let i = 1;i <= 100;i++){
    if(i%2 == 0){
        suma_par+=i;
    }else{
        suma_impar+=i;
    }
}
console.log(suma_par + " par");
console.log(suma_impar + " impar");
