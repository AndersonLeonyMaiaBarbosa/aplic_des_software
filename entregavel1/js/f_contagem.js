function count() {
    let value = parseInt(prompt("Digite um número e veja quantos valores inteiros existem entre 1 (inclusive) e o num. que vc digitou (inclusive):"));

    let totalOfNumbers = 0;

    for (let index = 1; index <= value; index++) {
       if(Number.isInteger(index)) {
        totalOfNumbers = totalOfNumbers + 1;
       }
    }

    alert(`Total de números inteiros: ${totalOfNumbers}`);
}