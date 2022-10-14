let n = parseInt(prompt("Digite o valor de N: "));
let x = 1;
let produto = 1;

while(produto<n){

    prod = x * (x+1)*(x+2);
    x = x + 1;
}
    x = x - 1;

    if(produto == n){
    document.write("O número é triangular: ",n," = ",x,"*",x+1,"*",x+2);
}
    else{
    document.write("O número não é triangular!");
}