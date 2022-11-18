const fibonacci = require("../entregavel1_javascript/js/c_Fibonacci");
let numero = 8;

test('Se a sequencia fibonacci está correta.', () => {
    let sequencia = "0 1 1 2 3 5 8 13"
    expect(fibonacci.applyFibonacci(numero)).toContain(sequencia);
});

test('Se a mensagem contém o texto \"Sequência Fibonacci para o número\".', () => {
    expect(fibonacci.applyFibonacci(numero)).toContain(`Sequência Fibonacci para o número ( ${numero} ):`);
});