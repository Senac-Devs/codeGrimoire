console.log("Bem vindo ao mundo dos sábios!\nAqui saberemos se você é um dos nossos.\nE lá vamos nós!");
console.log("As seguintes questões possuem cinco alternativas (1, 2, 3, 4 e 5), sendo somente uma correta.\nVocê deverá informar o número da alternativa."); 
console.log("Cada questão vale 5.0 pontos.\nLembre-se que você só depende de si mesmo. Concentre-se e tenha uma ótima prova!");
let pont = 0; 

console.log("A capital do Estado do Paraná é:\n 1 Maringa\n 2 Cascavel\n 3 Londrina\n 4 Curitiba\n 5 Francisco Beltrão");
let questionA = prompt("");
if (questionA == 4) {
pont = pont + 1};

console.log("O Estado (UF) com maior número de munícipios (853) é:\n 1 Espirito Santo\n 2 Bahia\n 3 Minas Gerais\n 4 São Paulo\n 5 Rio Grande do Sul");
questionA = prompt("");
if (questionA == 3) {
pont = pont + 1};

pont = pont * 5.0; 

console.log("Sua pontuação é:", pont);