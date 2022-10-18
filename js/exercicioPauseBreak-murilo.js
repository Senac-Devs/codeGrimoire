function pauseBreak(valor){
    let resultado = "";
    if (valor % 2 === 0) {
      resultado = "pause";
    }
    if (valor % 3 === 0 ){
      //resultado = resultado + "Break";
      resultado += "Break"
    }
    if(resultado === "") {
      resultado = valor;
    };
    return resultado;
  }
  for (let i =1;i<= 100; i++) {
    let saida = pauseBreak(i);
    console.log(saida);
  };