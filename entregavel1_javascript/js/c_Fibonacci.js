function getFibonacci(value) {
    if (value < 2) {
        return value;
    } else {
        return getFibonacci(value - 1) + getFibonacci(value - 2);
    }
}

function applyFibonacci() {
    let value = parseInt(prompt("Digite um número e veja a sequencia Fibonacci: "));
    let sequence = "";
    for (let index = 0; index < value; index++) {
        sequence = sequence + getFibonacci(index) + " "
    }
    alert(`Sequência Fibonacci para o número ( ${value} ): ${sequence}`);
}