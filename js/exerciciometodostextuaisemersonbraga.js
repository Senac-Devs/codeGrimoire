let nome = "Roberto Almeida";

// Capitalização
console.log(nome);
console.log(nome.length);
console.log(nome.toUpperCase());
// nome = nome.toUpperCase();

console.log(); // Quebra de linha
console.log(nome);
console.log(nome.toLowerCase());


// Substituição
// console.log(nome.replace(" ", "-"));
// console.log(nome.replace("erto", "erval"));

// console.log(nome.replace("erto", "erval").replace(" ", "-"));

let novoNome = nome.replace("erto", "erval")


let senha = "nice2906199610de10";

let dataNasci = "29061996"
console.log(senha)

alert(senha.includes(dataNasci));

alert(senha.length)

alert(senha.slice(4))
alert(senha.slice(4, senha.length))
alert(senha.slice(4, 6) + senha.slice(14, 18))



senha = "opaopa290696nice";
const dataN = "290696"

let indiceNascNaSenha = senha.indexOf(dataN); // Onde está a data de nascimento na senha

let tamanhoDataNasci = dataN.length; // Quantos dígitos tem a data de nascimento
alert(senha.slice(0, indiceNascNaSenha) + senha.slice(tamanhoDataNasci + indiceNascNaSenha))
