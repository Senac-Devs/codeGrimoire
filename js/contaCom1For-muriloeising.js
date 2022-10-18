const v1 = parseInt(prompt("Insira valor inicial"));
const v2 = parseInt(prompt("Insira valor final"));

let contador = v1; // começa a contar pelo primeiro valor inserido

if (v1 < v2) { // crescente
  diferença = v2 - v1 
} else { // decrescente
  diferença = v1 - v2
}

for (let i = 0; i <= diferença; i++){
  if (contador %2 ===0){ // Mostra apenas os pares
    console.log(contador);
  }
  
  if (v1 < v2) { // crescente
    contador ++;
  } else { // decrescente
    contador --;
  }
}