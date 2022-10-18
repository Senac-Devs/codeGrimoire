
function pauseBreak(numero) {
    resultado = "";
    if (numero % 2 === 0) {
      resultado = "Pause";
    } if (numero % 3 === 0) {
      resultado += "Break";
    } if (resultado === "") {
      resultado = numero;
    };
    return resultado;
  }
  
  for (i = 1; i <= 100; i++) {
    let saída = pauseBreak(i);
    console.log(saída);
  }
  