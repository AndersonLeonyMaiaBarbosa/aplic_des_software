package entregavel1_java.classes;

import java.util.Scanner;

public class F_Contagemn {

    public static String count() {
        Scanner sc1 = new Scanner(System.in);

        System.out.println("Digite um número e veja quantos valores inteiros existem entre 1 (inclusive) e o num. que vc digitou (inclusive):");
        String arrayStr = sc1.next();
        sc1.close();

        String[] array = arrayStr.split(",");

        int totalOfNumbers = 0;

        for (int index = 1; index <= array.length; index++) {
            if((Integer.parseInt(array[index]) != Float.parseFloat(array[index])) && !(array[index]!=null)) {
                totalOfNumbers = totalOfNumbers + 1;
            }
        }

        
        return null;
    }
    
}
