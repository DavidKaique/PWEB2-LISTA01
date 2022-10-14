let x = parseInt(prompt("Digite um numero: "));
let quantDivisores=0;

for(let i=1; i<=x; i ++){
    if(x % i == 0){
        document.write(i,"<br>");

        quantDivisores++;
    }
}

document.write("Numero de divisores: ", quantDivisores);