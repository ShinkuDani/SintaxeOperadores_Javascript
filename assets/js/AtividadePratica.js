// alert("Para fazer a atividade funcionar coloque os numero")
// var ng1 = Number(prompt("Escreva o numero 1"));
// var ng2 = Number(prompt("Escreva o numero 2"));

// function comparacao(n1, n2) {
//     let resultado = n1 + n2 ;
//     let comparacao ;
//     let verificacao;

//     (n1 === n2)? comparacao = "São iguais": comparacao = "Não são iguais";

//     if(resultado < 10){
//         verificacao = "numero menor que 10";
//     }else if(resultado > 10 || resultado < 20){
//         verificacao = "numero esta entre 10 e 20";
//     }else{
//         verificacao = "numero é maior que 20";
//     }

//     alert((`Os números ${n1} e ${n2} ${comparacao}. Sua soma é ${resultado}, e este  ${verificacao}.`))
// }

// comparacao(ng1, ng2);

function validaNumero(num){
    if (!num) return "“Envie um número válido!”";
  
    return num;
}

validaNumero(1);