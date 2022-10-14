let a = 0;
let b = 0;
let resto = 0;

a = parseInt(prompt("Digite o primeiro numero: "));
b = parseInt(prompt("Digite o segundo numero: "));

while (b != 0){

    resto = a % b;
    a = b;
    b = resto;

}

document.write(a);