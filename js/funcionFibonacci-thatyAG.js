function calculaFibonacci() {
    console.log("quantidade");
    let quant = prompt("");
    quant = parseInt(quant);
    let penultimo = 0;
    let ultimo = 1;
    let valorfibo;
  
    for (let i = 0; i < quant; i++) {
      if (i <= 1) {
        console.log(i)
      } else {
        valorfibo = ultimo + penultimo;
        console.log(valorfibo);
        penultimo = ultimo;
        ultimo = valorfibo;
      }
    }
  }
  calculaFibonacci();