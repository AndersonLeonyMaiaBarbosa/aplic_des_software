function somatorio() {
    let conjuntoNumeros = (prompt("Informe um conjunto de números que deseja somar (Use a vírgula para separar. Ex: 3,4,5,6")).split(",");
    let somatorioResultado = 0;

    for (let index = 0; index < conjuntoNumeros.length; index++) {
        somatorioResultado = somatorioResultado + parseInt(conjuntoNumeros[index]);
    }

    alert(`Somatório = ${somatorioResultado}`);
}