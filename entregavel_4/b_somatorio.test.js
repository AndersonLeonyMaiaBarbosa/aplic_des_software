const b_somatorio = require("../entregavel1_javascript/js/b_somatorio")

test('Se exibe o valor do somatório', () => {
    expect(b_somatorio.somatorio("5,6")).toContain("11");
});

test('Se exibe a palavra \"Somatório\"', () => {
    expect(b_somatorio.somatorio("5,6")).toContain("Somatório");
});