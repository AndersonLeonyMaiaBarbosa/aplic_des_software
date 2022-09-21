package entregavel1_java.classes;

import java.util.Scanner;

public class F_Contagem {

    public static String count() {
        Scanner sc1 = new Scanner(System.in);
        String arrayStr = "";

        System.out.println("Digite um número e veja quantos valores inteiros existem entre 1 (inclusive) e o num. que vc digitou (inclusive):");
        int n = sc1.nextInt();

        for (int i = 0; i < n; i++) {
            System.out.println("Informe o "+(i+1)+"° num (de 5): ");
            String aux = sc1.next();
            arrayStr = arrayStr + aux;
            if(i!=n-1) {
                arrayStr = arrayStr + ",";
            }
        }
        sc1.close();
        String[] array = arrayStr.split(",");
        int totalOfNumbers = 0;
        
        for (int index = 0; index < array.length; index++) {
            if(isInterger(array[index])) {
                totalOfNumbers++;
            }
        }
        return "Total de números inteiros = "+totalOfNumbers;
    }

    public static boolean isInterger(String value) {
        if(!value.contains(".")){
            return true;
        } else {
            String[] decimalValue = value.split("\\.");

            if(Integer.parseInt(decimalValue[1])==0) {
                return true;
            } else {
                return false;
            }
        }
    }
}
