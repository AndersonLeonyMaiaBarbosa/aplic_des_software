function count(n, conjuntoNumeros) {
    // let n = prompt("Digite um número e veja quantos valores inteiros existem entre 1 (inclusive) e o num. que vc digitou:");

    // let array = ((prompt(`Agora escreva os ${n} números separados por virgula ( Ex.: 1,2,3.5,4 )`)).split(","));
    let array = conjuntoNumeros.split(",");

    let totalOfNumbers = 0;

    for (let index = 0; index < array.length; index++) {
        if(isInterger(array[index], n)) {
            totalOfNumbers++;
        }
    }

   // alert(`Total de números inteiros: ${totalOfNumbers}`);

   return `Total de números inteiros: ${totalOfNumbers}`;
}

function isInterger(strValue = "", n = "") {
    if(!strValue.includes(".")){
        if(parseInt(strValue)<=n) {
            return true;
        } else {
            return false;
        }
    } else {
        let decimalValue = strValue.split("\\.");

        if(parseInt(decimalValue[0])<=n && parseInt(decimalValue[1])==0) {
            return true;
        } else {
            return false;
        }
    }
}

module.exports = { count };