function pauseBreak(valor) {
    let resultado = "";
    if (valor % 2 === 0) {
      resultado = "Pause";
    }
    if (valor %3 === 0) {
      resultado += "Break";
    }
    if (resultado === "") {
      resultado = valor;
    };
    return resultado;
  };
  
  for (let i = 1; i <= 100; i++) {
    let saída = pauseBreak(i);
    console.log(saída);
  };