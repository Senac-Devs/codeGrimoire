let resultado = "";
function pauseBreak(valor){
let resultado = "";
if (valor % 2 === 0) {
  resultado = "pause";
}
if (valor % 3 === 0) {
  resultado = resultado += "break";
}
if (resultado === "") {
  resultado = valor
};
console.log(resultado)
};
for (i = 1; i <= 100; i++) {
 pauseBreak(i)
};
