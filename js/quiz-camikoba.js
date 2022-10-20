console.log("Quiz - As capitais do Brasil");

let ponto = 0;

console.log("Q1- Qual é a capital da Paraíba? \n A) Natal \n B) Recife \n C) João Pessoa \n D) Bahia");
let q1 = prompt("Digite a alternativa").toUpperCase();

while (q1 != 'A' && q1 != 'B' && q1 != 'C' && q1 != 'D') {
  console.log("Alternativa inválida");
  q1 = prompt("Digite a alternativa").toUpperCase();
};
if (q1 === 'C') {
  console.log("Alternativa correta");
  ponto += 1;
} else {
  console.log("Alternativa correta é C");
};

console.log("\n Q2- Qual é a capital do Paraná? \n A) Porto Alegre \n B) Curitiba \n C) São Paulo \n D) Florianópolis");
let q2 = prompt("Digite a alternativa").toUpperCase();

while (q2 != 'A' && q2 != 'B' && q2 != 'C' && q2 != 'D') {
  console.log("Alternativa inválida");
  q2 = prompt("Digite a alternativa").toUpperCase();
};
if (q2 === 'B') {
  console.log("Alternativa correta");
  ponto += 1;
} else {
  console.log("Alternativa correta é B");
};

if (ponto <= 1) {
  console.log("\nAcertou", ponto, "questão \nA pontuação é", ponto * 10);
} else {
  console.log("\nAcertou", ponto, "questões \nA pontuação é", ponto * 10);
};