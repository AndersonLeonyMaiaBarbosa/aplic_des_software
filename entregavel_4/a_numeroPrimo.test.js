const numeroPrimo = require("../entregavel1_javascript/js/a_numeroPrimo")

test('Se a mensagem para um número primo está correta', () => {
    expect(numeroPrimo.numPrimo(2)).toBe("É primo...");
});

test('Se a mensagem para um número que não é primo está correta', () => {
    expect(numeroPrimo.numPrimo(6)).toBe("Não é primo.");
});