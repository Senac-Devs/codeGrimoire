let rodando = true;

while (rodando == true) {
  console.log("JOGO DA ADIVINHAÇÃO:\n");
  console.log("SELECIONE A DIFICULDADE");
  console.log("1 - FACIL  2 - MEDIO 3 - DIFICIL");
  dif = prompt("")
  if (dif == 1) {
    dif = 10
    tent = 4
  }
  else if (dif == 2) {
    dif = 25
    tent = 9
  }
  else if (dif == 3) {
    dif = 50
    tent = 14
  }
  const max = dif;
  let segredo = Math.floor(Math.random() * max);
  console.log(segredo)

  let tentativa = tent;
  console.log("Você tem " + (tentativa + 1) + " tentativas");
  let palpite = parseInt(prompt("Insira o primeiro palpite ="));

  for (let i = 1; i <= tentativa; i++) {
    if (palpite === segredo) {
      console.log("\nParabéns você acertou!");
      break;
    } else {
      console.log("\nVocê errou, tente novamente, restam " + ((tentativa - i) + 1) + " tentativa(s)");
      palpite = prompt("Insira seu próximo palpite =");
    };
  };
  if (palpite != segredo) {
    console.log("\nInfelizmente acabaram as chances, o número segredo era " + segredo);
  };

  let resp = prompt("N + enter para sair ou enter para jogar novamente");

  if (resp.toUpperCase() === "N") {
    alert("\nAté a próxima!")
    rodando = false;
  };
};