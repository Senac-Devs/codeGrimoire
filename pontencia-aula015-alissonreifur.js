const base = parseInt(prompt("sua base"))
const expoente = parseInt(prompt("seu expoente"))
let resultado = 1
let soma = 0

for (let i = 1 ; i <= expoente; i++) {
resultado = resultado * base
}
console.log(resultado)
  
