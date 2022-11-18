const d_mdc = require("../entregavel1_javascript/js/d_mdc");

test('Se a função \"convertArrayStringToInt\" retorna um array de inteiros', () => {
    let arrayDeNumerosInteiros = [3,2,4]
    expect(d_mdc.convertArrayStringToInt("3,2,4")).toEqual(expect.arrayContaining(arrayDeNumerosInteiros));
});

test('Se a função \"mdc\" retorna O mdc correto', () => {
    expect(d_mdc.mdc("3,2,4")).toContain("1")
});