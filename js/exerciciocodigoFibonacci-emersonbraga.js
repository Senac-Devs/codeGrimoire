const valor = parseInt(prompt("insira um valor"));
let penultimo = 0;
let ultimo = 1;
let valorFibonacci;

for (let i = 0; i < valor; i++) {
  if (i <= 1) {
    console.log(i)
  } else {
    valorFibonacci = ultimo + penultimo;
    console.log(valorFibonacci);
    penultimo = ultimo
    ultimo = valorFibonacci
  }
}
