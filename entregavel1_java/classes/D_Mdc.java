package entregavel1_java.classes;
import entregavel1_java.classes.E_Ordenacao;

import java.util.Scanner;

public class D_Mdc {

    public static String mdc() {

        Scanner sc1 = new Scanner(System.in);
        int mdcResult = 0;
        
        
        System.out.println("Informe um conjunto de números e veja o mdc (Use a vírgula para separar. Ex: 3,4,5,6");
        String numbersStr = sc1.next();

        String[] numbersArrayOfStrings = numbersStr.split(",");
        int[] numbers = new int[numbersArrayOfStrings.length];
        for (int i = 0; i < numbersArrayOfStrings.length; i++) {
            numbers[i] = Integer.parseInt(numbersArrayOfStrings[i]);
        }

        numbers = E_Ordenacao.quickSort(numbers, 0, numbers.length - 1);

        for (int index_div = 1; index_div <= numbers[0]; index_div++) {

            int countNumberOfDivisions = 0;
    
            for (int index_value = 0; index_value < numbers.length; index_value++) {
                int divResult = numbers[index_value]%index_div;
                if(divResult==0) {
                    countNumberOfDivisions = countNumberOfDivisions + 1;
                }
    
            }
    
            if(countNumberOfDivisions==numbers.length) {
                mdcResult = index_div;
            }
    
        }
        
        return "MDC = "+mdcResult;
    }

}