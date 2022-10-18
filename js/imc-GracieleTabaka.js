const nome = prompt('insira seu nome');
let peso = parseFloat(prompt('insira peso'));
let altura = parseFloat(prompt('insira altura'));

imc = peso / altura ** 2;
console.log('imc: ', imc);

if (imc < 18.5) {
  //true 
  console.log("magreza")

} else if (imc < 24.9) {
  //true
  console.log("normal")

} else if (imc < 29.9) {
  //true
  console.log("sobrepeso")

} else if (imc < 34.9) {
  //true
  console.log("obesidade grau I")

} else if (imc < 39.9) {
  //true
  console.log("obesidade grau II")
} else if (imc => 40) {
  //true
  console.log("obsesidade grau III")
}