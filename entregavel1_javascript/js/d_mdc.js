function mdc(values) {

    // let numbers = ((prompt("Informe um conjunto de números e veja o mdc (Use a vírgula para separar. Ex: 3,4,5,6")).split(",")).map((value) => {return parseInt(value)});
    let numbers = convertArrayStringToInt(values);

    let mdcResult = 0;

    for (let index_div = 1; index_div <= numbers.sort(function (a, b) {  return a - b;  })[0]; index_div++) {

        let countNumberOfDivisions = 0;

        for (let index_value = 0; index_value < numbers.length; index_value++) {
            
            if((numbers[index_value]%index_div)===0) {
                countNumberOfDivisions = countNumberOfDivisions + 1;
            }

        }

        if(countNumberOfDivisions===numbers.length) {
            mdcResult = index_div;
        }

    }

    // console.log(mdcResult);

    // alert(`MDC = ${mdcResult}`)

    return `MDC = ${mdcResult}`

}

function convertArrayStringToInt(values) {
   return values.split(",").map((value) => {return parseInt(value)});
}

module.exports = { mdc, convertArrayStringToInt }