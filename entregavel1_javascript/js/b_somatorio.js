function somatorio(conjuntoNumeros = "") {
    //conjuntoNumeros = (prompt("Informe um conjunto de números que deseja somar (Use a vírgula para separar. Ex: 3,4,5,6")).split(",");
    let conjNums = conjuntoNumeros.split(",");
    let somatorioResultado = 0;

    for (let index = 0; index < conjNums.length; index++) {
        somatorioResultado = somatorioResultado + parseInt(conjNums[index]);
    }

    // alert(`Somatório = ${somatorioResultado}`);

    return `Somatório = ${somatorioResultado}`;
}
module.exports = { somatorio };