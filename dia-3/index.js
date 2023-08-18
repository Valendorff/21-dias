let nomeUsuario = prompt("Insira seu nome: ");
let idadeUsuario = prompt("Insira sua idade: ");
let alturaUsuario = Number(prompt("Insira sua altura: "));
let pesoUsuario = Number(prompt("Insira seu peso: "));

let anoNascimento = 2023 - idadeUsuario
let imcUsuario = parseInt((pesoUsuario/(alturaUsuario*alturaUsuario)))

console.log("Olá, " +
 nomeUsuario + 
 ", você tem " +
idadeUsuario + 
" anos," + " nasceu em " 
+ anoNascimento +
", tem " +
alturaUsuario +
" de altura, " + "pesa " 
+ pesoUsuario +
"Kg e seu IMC é " 
+ imcUsuario + 
"Kg/m2"
)