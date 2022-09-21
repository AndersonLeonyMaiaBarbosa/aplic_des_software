function count() {
    let n = prompt("Digite um número e veja quantos valores inteiros existem entre 1 (inclusive) e o num. que vc digitou (inclusive):")

    let array = ((prompt(`Agora escreva os ${n} números separados por virgula ( Ex.: 1,2,3.5,4 )`)).split(","));
    
    let totalOfNumbers = 0;

    console.log(array)

    for (let index = 0; index < array.length; index++) {
        if(isInterger(array[index])) {
            totalOfNumbers++;
        }
    }

    alert(`Total de números inteiros: ${totalOfNumbers}`);
}

function isInterger(strValue = "") {
    if(!strValue.includes(".")){
        return true;
    } else {
        let decimalValue = strValue.split("\\.");

        if(parseInt(decimalValue[1])==0) {
            return true;
        } else {
            return false;
        }
    }
}