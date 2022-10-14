let cigarroPordia = parseInt(prompt("Quantos cigarros você fuma por dia?"));
let tempo = parseInt(prompt("A quantos anos você fuma? "));
let valorCigarroUni = 0.25;

let gastoDia = cigarroPordia * valorCigarroUni;
let gastoTotal = (tempo * 365) * gastoDia;

document.write("Você gastou esse valor com cigarro R$ ", gastoTotal);