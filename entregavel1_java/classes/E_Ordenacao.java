package entregavel1_java.classes;

import java.util.Scanner;

public class E_Ordenacao {

    public static int[] swap(int[] array, int indexLeftElement, int indexOfRighElement){
        int varTemp = array[indexLeftElement];
        array[indexLeftElement] = array[indexOfRighElement];
        array[indexOfRighElement] = varTemp;

        return array;
    }

    public static int division(int[] array, int left, int right) {
        int middleElement   = array[(int) Math.floor((right + left) / 2)];
        int i = left; 
        int j = right;
    
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

    public static int[] quickSort(int[] array, int left, int right) {
        int index;
    
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

    public static String applyQuickySort() {
        Scanner sc1 = new Scanner(System.in);

        System.out.println("Informe um conjunto de números e veja a ordenação QuickySort (Use a vírgula para separar. Ex: 3,4,5,6");
        String beforeSortedStr = sc1.next();
        sc1.close();
        String[] arrayStr = beforeSortedStr.split(",");
        int[] arrayToBeSorted = new int[arrayStr.length];
        for (int i = 0; i < arrayStr.length; i++) {
            arrayToBeSorted[i] = Integer.parseInt(arrayStr[i]);
        }
        int[] afterSort = quickSort(arrayToBeSorted, 0, arrayToBeSorted.length - 1);
        
        return "No QuickySort: ["+beforeSortedStr+"] | QuickySort: "+UtilCustom.printArrayElements(afterSort);
    }
    
}
