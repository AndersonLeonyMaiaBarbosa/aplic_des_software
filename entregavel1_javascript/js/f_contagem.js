function count() {
    let array = ((prompt("Digite um número e veja quantos valores inteiros existem entre 1 (inclusive) e o num. que vc digitou (inclusive):")).split(","));
    
    let totalOfNumbers = 0;

    for (let index = 1; index <= array.length; index++) {
       if(parseInt(array[index-1]) != parseFloat(array[index-1]) && !isNaN(array[index-1])) {
        totalOfNumbers = totalOfNumbers + 1;
       }
    }

    alert(`Total de números inteiros: ${totalOfNumbers}`);
}