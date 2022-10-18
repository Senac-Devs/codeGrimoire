console.log("                    FizzBuzz");
console.log("==============================================")
console.log("Divisível por 3 = Fizz")
console.log("Divisível por 5 = Buzz")
console.log("Divisível por 3 e 5 = FizzBuzz")
console.log("Não divisível por 3 ou 5 = entrada")
console.log("==============================================")

let resultado = parseInt(prompt("Insira um número para FizzBuzz ="))
while (isNaN(resultado)) {
  console.log("Insira apenas números.");
  resultado = parseFloat(prompt("="));
}

resultado =fizzBuzz(resultado)
console.log("==============================================")
console.log(resultado);

function fizzBuzz(entrada) {

  if (entrada % 3 === 0 && entrada % 5 === 0)
    return "Seu número é divisível por 3 e 5 = FizzBuzz";
  if (entrada % 3 === 0)
    return "Seu número é divisível por 3 = Fizz";
  if (entrada % 5 === 0)
    return "Seu número é divisível por 5 = Buzz";
  return entrada, "este número não divisível por 3 e 5.";
}