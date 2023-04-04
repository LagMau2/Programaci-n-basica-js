let numeros = [1,2,3,4,5,6,7,8];
cont=0;
suma=0;


for(i=0;i<numeros.length;i++){
    num = numeros[i];
    if(num%2==0){
        console.log(num);
        cont++
        suma+=num;
    };
};

console.log(suma);
console.log(cont);
