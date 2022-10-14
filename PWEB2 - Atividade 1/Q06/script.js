let num1 = parseInt(prompt("Digite o primeiro numero: "));
let num2 = parseInt(prompt("Digite o segundo numero: "))
let num3 = parseInt(prompt("Digite o terceiro numero: "))

if (num1 <= num2 && num2 <= num3) {
    document.write("A ordem crescente: "+ num1 , ", ",num2 , ", ", num3);    
}else if (num1 <= num3 && num3 <= num2) {
    document.write("A ordem crescente: "+ num1 , ", ", num3, ", ", num2);    
    
}else if (num2 <= num1 && num1 <= num3) {
    document.write("A ordem crescente: "+ num2 , ", ", num1, ", ", num3);    
    
}else if (num2 <= num3 && num3 <= num1) {
    document.write("A ordem crescente: "+ num2 , ", ", num3, ", ", num1);    
    
}else if (num3 <= num1 && num1 <= num2) {
    document.write("A ordem crescente: "+ num3 , ", ", num1, ", ", num2);    
    
}else if (num3 <= num2 && num2 <= num1) {
    document.write("A ordem crescente: "+ num3 , ", ", num2, ", ", num1);    
    
}