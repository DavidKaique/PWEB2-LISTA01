let a = parseInt(prompt("digite a nota 1"));
let b = parseInt(prompt("digite a nota 2"));
let c = parseInt(prompt("digite a nota 3"));
let d = parseInt(prompt("digite a nota 4"));
let e = parseInt(prompt("digite a nota 5"));

if (a >= 70 && b >= 70 && c >= 70 && d >= 70 && e >= 70) {
  document.write("Classificação A");
} 
  else if (a >= 70 && b >= 70 && d >= 70 && (e < 70 || c < 70)) {
  document.write("Classificação B");
} 
  else if (a >= 70 && b >= 70 && (c >= 70 || d >= 70) && e < 70) {
  document.write("Classificação C");
} 
  else {
  document.write("Classificação D");
}