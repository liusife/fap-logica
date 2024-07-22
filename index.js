var prompt = require('prompt-sync')();

// EXERCICIO 1

// Console

// let valorConvertido;
// let cotacaoDolar = Number(prompt('Digite a cotacão do dolar: '));

// let valor = Number(prompt('Digite o valor para ser convertido: '));

// let opcao = Number(prompt('1: REAL -> DÓLAR \n2: DÓLAR -> REAL\n Escolha uma opção: '));

// if(opcao == 1){
//     valorConvertido = valor / cotacaoDolar;
// } else{
//     valorConvertido = valor * cotacaoDolar;
//}

//console.log(valorConvertido);

// Navegador
// let valorConvertido;
// let cotacaoDolar = Number(prompt('Digite a cotacão do dolar: '));

// let valor = Number(prompt('Digite o valor para ser convertido: '));

// let opcao = Number(prompt('1: REAL -> DÓLAR \n2: DÓLAR -> REAL\n Escolha uma opção: '));

// if(opcao == 1){
//     valorConvertido = valor / cotacaoDolar;
// } else{
//     valorConvertido = valor * cotacaoDolar;
// }

// alert(valorConvertido);

// EXERCICIO 2

// let numero = Number(prompt('Digite um número: '))

// if(numero % 2 == 0){
//     alert('O numero é par')
// } else{
//     alert('O numero é ímpar')
// }

//EXERCICIO 3

// let num1 = Number(prompt('Número 1: '));
// let num2 = Number(prompt('Número 2: '));

// if(num1 > num2){
//     alert('O número 1 é maior')
// }else if(num1 == num2){
//     alert('Os números são iguais')
// }else{
//     alert('O número 2 é maior')
// }]

// EXERCICIO 4

// let prova1 = Number(prompt("Digite a nota da primeira prova: "));
// let prova2 = Number(prompt("Digite a nota da segunda prova: "));

// if (prova1 >= 6) {
//     alert('O aluno foi aprovado na primeira prova')
// }else{
//     alert('O aluno foi reprovado na primeira prova')
// }

// if (prova2 >= 6) {
//     alert('O aluno foi aprovado na segunda prova')
// }else{
//     alert('O aluno foi reprovado na segunda prova')
// }

// let ingresso = Number(
//   prompt(
//     "Digite uma opção de ingresso: \n1: Ingresso Vip\n2: Ingresso Standard\n"
//   )
// );

// EXERCICIO 5

// let combo = prompt("Você deseja o combo de pipoca?\n S: Sim\n N: Não\n");
// let ingressoStandard = 40;
// let ingressoVip = 80;
// let comboValor = 30;

// if (ingresso == 1) {
//   if (combo == "S") {
//     alert(`O valor do ingresso é ${ingressoVip + comboValor}`);
//   } else if (combo == "N") {
//     alert(`O valor do ingresso é ${ingressoVip}`);
//   }
// }

// if (ingresso == 2) {
//   if (combo == "S") {
//     alert(`O valor do ingresso é ${ingressoStandard + comboValor}`);
//   } else {
//     alert(`O valor do ingresso é ${ingressoStandard}`);
//   }
// }

//EXERCICIO 6 

// let opcao = 0;
// let opcaoBebida = 0;
// function mainMenu() {
//     console.log('Escolha uma das opções: \n1: Strogonoff \n2:Lasanha \n3:Pizza \n4:Sair');
//     return opcao = prompt('    ')
// }

// function bebidaMenu() {
//     console.log('Escolha uma das opções: \n1:Água \n2:Refrigerante \n3:Suco \n4:Retornar \n5: Sair');
//     return opcaoBebida = prompt('    ')
// }

// mainMenu();

// while (opcao != 4) {
//     if(opcao == 1){
//         console.log('Você selecionou Strogonoff');
//         }
//     if(opcao == 2) {
//         console.log('Você selecionou Lasanha');
//     }
//     if(opcao == 3){
//         console.log('Você selecionou pizza');
//     }

//     let bebida= prompt('Você deseja alguma bebida? S:Sim\n N:Não');
//     if (bebida == 'S') {
//         bebidaMenu();
//     }

//     while (opcaoBebida != 'N') {
//         if(opcaoBebida == 1){
//             console.log('Você selecionou Água');
//             break
//             }
//         if(opcaoBebida == 2) {
//             console.log('Você selecionou Refrigerante');
//             break
//         }
//         if(opcaoBebida == 3){
//             console.log('Você selecionou Suco');
//             break
//         }
//         if(opcaoBebida == 4){
//              mainMenu();
//         }
//         break
//     }
//     break
// }

// if (opcao == 4) {
//     console.log('Te esperamos na próxima :)');
// }



//EXERCÍCIO 7

// const jornada = 160;

// let horasTrabalhadas = Number(prompt('Quantas horas você trabalhou nesse mês? '));
// let salarioHora = Number(prompt('Quanto você recebe por hora? '));

// let salarioMes = salarioHora * jornada;

// if(horasTrabalhadas > 160){
//     let salarioHoraExtra = salarioMes * 1.5
//     alert(`Seu salário total é: ${salarioHoraExtra}`)
// }else{
//     alert(`Seu salário total é: ${salarioMes}`)
// }

// EXERCÍCIO 8

// let num1 = Number(prompt('Informe um número: '));
// let sinal = prompt(' + \n - \n / \n *');
// let num2 = Number(prompt('Informe um número: '));

// switch(sinal){
//     case '+':
//         console.log(num1 + num2);
//         break;
//     case '-':
//         console.log(num1 - num2);
//         break;
//     case '/':
//         console.log();(num1 / num2);
//         break;
    
//     case '*':
//         console.log();(num1 * num2);
//         break;
// }

