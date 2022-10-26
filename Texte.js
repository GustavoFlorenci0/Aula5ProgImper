function PolEmCm(valor1) {
    const resultado = valor1 * 2.54;
    return resultado;
}

const ValorFinal = PolEmCm(5);

function Url(valor1 = '' ) {
    const resultado = 'http://www.' + valor1 + '.com.br';
    return resultado;
}

const TextoFinal = Url('google');

function exclamacao(valor1= '') {
    const resultado = valor1 +'!!!!!';
    return resultado;
}

const TextoExclamado = exclamacao('asdfsdjkfhsdiufgdsi');

function IdadeCachorro(idade=0 ) {
    const resultado = idade * 7;
    return resultado;
}

const IdadeFinal = IdadeCachorro(12);

function Salario(ValorSalario) {
    const resultado = ValorSalario / 160;
    return resultado;    
}

const ValorHora = Salario(2500);

function Imc(Peso, Altura) {
    const resultado = Peso / (Altura * Altura);
    return resultado;
}
const ValorImc = Imc(78,1.78)

function minuscula(texto1='') {
    const resultado = (texto1.toUpperCase());
    return resultado;
}
const textoMaiusculo = minuscula('me passa professor');

function qualTipo(valor1) {
    const resultado = (typeof  valor1);
    return resultado;
}
const tipoDado = qualTipo('dadsa');

function Circuferencia(raio) {
    const resultado = raio *2 * Math.PI;
    return resultado; 
}

const CalcCircuferencia = Circuferencia(15);



console.log('Valor Final:', ValorFinal, "cm");
console.log('Url é:', TextoFinal);
console.log('texto:', TextoExclamado);
console.log('Idade real do seu cachorro é:', IdadeFinal);
console.log('Valor da sua hora é:', ValorHora);
console.log('Seu imc é:', ValorImc);
console.log('Texto é:', textoMaiusculo);
console.log('texto é:', tipoDado);
console.log('a circuferencia é:', CalcCircuferencia);

