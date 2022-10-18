console.log("          PauseBreak de 1 a 100");
console.log("==============================================")
console.log("Divisível por 2 = Pause")
console.log("Divisível por 3 = Break")
console.log("Divisível por 2 e 3 = PauseBreak")
console.log("Não divisível por 2 ou 3 = valor")
console.log("==============================================")

function pauseBreak(valor) {
  let resultado = "";
  if (valor % 2 === 0) {
    resultado = "Pause";
  }
  if (valor % 3 === 0) {
    resultado += "Break";
  }
  if (resultado === "") {
    resultado = valor;
  }
  return resultado;
}
for (let i = 1; i <= 100; i++) {
  console.log(pauseBreak(i));
};