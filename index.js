const {
    somar, dividir, multiplicar, subtrair 
} = require ('./operacao.js');

let a , b = 0;
let opcao = -1;
const prompt = require ('prompt-sync')();

while (opcao !== 0){
    console.log (
    `
    1 - soma 
    2 - subtrai 
    3- multiplica 
    4 - divide 
    0 - sair 
    `
)


opcao = parseInt(prompt('Escolha a operação: '));
if(opcao===0){
    return 
}

a = parseInt(prompt('Informe a parametro A: '));
if (opcao === 0){
    return 
}

b = parseInt(prompt('Informe a parametro B: '));

if (opcao === 1){
    console.log(soma(a , b));
}
else if (opcao === 2){
    console.log(subtrair(a , b));
}
else if (opcao === 3){  
    console.log(multiplicar(a , b));
}
else if (opcao === 4){
    console.log(dividir(a , b));
}}