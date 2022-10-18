let resultado = "";


function pauseBreak(valor) {
  resultado = ""
  if (valor % 2 === 0) {
    resultado = "Pause"
  }
  if (valor % 3 == 0) {
    resultado = resultado + "Break";
  }
  if (resultado === "") {
    resultado = valor;
  }
  return resultado;
}
for (let i = 1; i <= 100; i++) {
  let saide = pauseBreak(i);
  console.log(saida);
}