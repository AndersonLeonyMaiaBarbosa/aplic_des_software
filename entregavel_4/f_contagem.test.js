const f_contagem = require("../entregavel1_javascript/js/f_contagem");

test('Se o total de numeros inteiros está correta', () => {
    expect(f_contagem.count(4,"1,2,3.5,4")).toContain("3");
});

test('Se a mensagem contem o text \"Total de números inteiros: \"', () => {
    expect(f_contagem.count(4,"1,2,3.5,4")).toContain("Total de números inteiros: ");
});