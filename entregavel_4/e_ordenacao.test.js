const e_ordenacao = require("../entregavel1_javascript/js/e_ordenacao");

test('Se a ordenação foi aplicada corretamente.', () => {
    expect(e_ordenacao.applyQuickySort("6,4,5,2")).toContain("2,4,5,6");
});

test('Se contem o texto \"QuickySort: \".', () => {
    expect(e_ordenacao.applyQuickySort("6,4,5,2")).toContain("QuickySort: ");
});