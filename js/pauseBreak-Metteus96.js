console.log("Exercicio pause Breake do intervalo de 1 - 100");

function pauseBreak(num) {
  resultado = "";
  if (num % 2 === 0) {
    resultado = "Pause";
  }
  if (num % 3 === 0) {
    resultado = resultado + "Break";
  }
  if (resultado === "") {
    resultado = num;
  };
  return (resultado);
};

for (let i = 1; i < 101; i++) {
  let result = pauseBreak(i)
  console.log(result);
};