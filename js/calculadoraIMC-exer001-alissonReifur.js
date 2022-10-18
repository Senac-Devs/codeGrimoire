let nome = prompt("Seu nome:")
let peso = prompt("Seu peso:")
let altura = prompt("Sua altura:")
let sexo = prompt("Seu sexo:")

 const imc =parseInt( peso / (altura * altura) *10000)
console.log(nome , "Seu IMC foi calculado e voce está classificado como:")
if (imc < 18.5) {
  console.log("abaixo do peso")
} else if (imc > 18.5 && imc < 24.9)
  console.log("peso normal")
else if (imc > 25 && imc < 29.9)
  console.log("acima do peso")
else if (imc > 30 && imc < 34.9)
  console.log("obeso grupo 1")
else if (imc > 35 && imc < 39.9)
  console.log("obeso grupo 2")
else if (imc => 40)
  console.log("obeso grupo 3")



//if ( sexo = "m" || sexo "f")