console.log("Ola! Eu sou Baymax, seu assistente pessoal de saúde\nDeixe-me escaneá-lo")
const Nome = prompt("Seu nome é:");
const Peso = parseInt(prompt("Seu peso é:"));
const Altura = parseFloat(prompt("Sua altura é:"));

IMC = Peso / Altura ** 2;
  
if (IMC < 18.5){
    console.log("Oh não 😥!",Nome,"você está abaixo do peso, procure um nutricionista.");
  }  else if (IMC <= 24.9){
    console.log("Parabéns",Nome,"você está com o peso ideal, tome um pirulito 🍭");
  }  else if (IMC <= 29.9){
    console.log("Atenção 🚨",Nome,"você está sobrepeso, faça atividades físicas regulares,\nhidrate-se e alimente-se de maneira saudável.");
  }  else if (IMC <= 34.9){
    console.log("Oh não 😲!", Nome,"você está com obesidade nível 1");
  }  else if (IMC <= 39.9){
    console.log("Oh não 😲😲!", Nome,"você está com obesidade nível 2, permita-me encontrar o médico mais próximo para atendê-lo.");
  }  else if (IMC > 40.0){
    console.log("Bem-vindo ao reality show Kilos Mortais 😃\nIsso foi uma piada hahaha\nMas tome muito cuidade pois sua saúde corre sério risco!");
  };