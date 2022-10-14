let x = parseInt(prompt("Quantos termos vc quer ver da sequência de Fibonacci: "));

let fibonacci = [];
fibonacci [0] = 0;
fibonacci [1] = 1;

for (let i=2; i<x; i++){
    fibonacci [i] = fibonacci [i-2] + fibonacci [i-1];
}

document.write("Os números da sequência são: ", fibonacci);