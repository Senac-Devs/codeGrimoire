function pauseBreak(valor) {
    let resultado = "";
  
    if (valor % 2 === 0) {
      // exiba Pause
      resultado = "Pause"
    } if (valor % 3 === 0) {
      //resultado = resultado + "Break";
      resultado += "Break"
    } if (resultado === "") {
      // exiba o numero
      resultado = valor;
    };
    return resultado;
  };
  for (let i = 1; i <= 100; i++) {
    let saida = pauseBreak(i)
    console.log(saida);
  };
  