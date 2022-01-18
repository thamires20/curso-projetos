//Exercício


// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual
var idadePrima = 15
var Minhaidade = 17
if(idadePrima > Minhaidade) {
  console.log('É maior')
} else if (idadePrima === Minhaidade) {
  console.log('É igual')
} else { 
  console.log('É menor')
}




// Qual valor é retornado na seguinte expressão?
var expressao = (5 - 2) && (5 - ' ') && (5 - 2);
console.log(expressao)


// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = 'Andre';
var idade = 28;
var possuiDoutorado = false;
var empregoFuturo;
var dinheiroNaConta = 0;

console.log(!!nome, !!idade, !!possuiDoutorado, !!empregoFuturo, !!dinheiroNaConta)


// Compare o total de habitantes do Brasil com China (valor em milhões)
var Brasil = 207
var China = 1340

if(Brasil > China) {
  console.log('Brasil tem mais habitantes')
} else if(Brasil === China) {
  console.log('É igual a quantidade de habitantes')
} else {
  console.log('Brasil tem menos habitantes')
}


// O que irá aparecer no console?

if(('Gato' === 'gato') && (5 > 2)) {
  console.log('Verdadeiro');
 } else {
  console.log('Falso');
 }
 // O que irá aparecer no console?


 if(('Gato' === 'gato') || (5 > 2)) { // pois o || retorna o primeiro resultado vardadeiro que achar, entao ele retornou o 5 > 2
  console.log('Gato' && 'Cão'); // nessa expressao foi retornado Cão, pois o operador && retorna o ultimo valor verdadeiro, e gato e cao sao verdadeiros
  console.log('Falso')
 }