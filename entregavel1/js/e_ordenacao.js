var array = [9,6,6,5,7,2,1,3];

function division(array, left, right) {
    let middleElement   = array[Math.floor((right + left) / 2)];
    let i = left; 
    let j = right;

    while (i <= j) {
        while (array[i] < middleElement) {
            i++;
        }
        while (array[j] > middleElement) {
            j--;
        }
        if (i <= j) {
            swap(array, i, j); //sawpping two elements
            i++;
            j--;
        }
    }
    return i;
}

function swap(array, indexLeftElement, indexOfRighElement){
    var varTemp = array[indexLeftElement];
    array[indexLeftElement] = array[indexOfRighElement];
    array[indexOfRighElement] = varTemp;
}

function quickSort(array, left, right) {
    var index;

    if (array.length > 1) {
        index = division(array, left, right); 
        if (left < index - 1) { 
            quickSort(array, left, index - 1);
        }
        if (index < right) { 
            quickSort(array, index, right);
        }
    }
    return array;
}

function applyQuickySort() {
    let beforeSorted = ((prompt("Informe um conjunto de números e veja a ordenação QuickySort (Use a vírgula para separar. Ex: 3,4,5,6")).split(",")).map((value) => {return parseInt(value)});
    let arrayToBeSorted = beforeSorted.map((value) => {return value});
    let afterSort = quickSort(arrayToBeSorted, 0, arrayToBeSorted.length - 1);
    alert(`No QuickySort: ${beforeSorted}\nW/ QuickySort: ${afterSort}`);
}