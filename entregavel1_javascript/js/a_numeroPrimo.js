function numPrimo() {
    let num = prompt("Digite um número e veja se ele é primo...");
    let contDivs = 0;

    for (let index = 1; index <= num; index++) {
        if(num%index === 0) {
            contDivs = contDivs + 1;
        }
    }

    contDivs > 2 ? alert("Não é primo.") : alert("É primo...");

}

