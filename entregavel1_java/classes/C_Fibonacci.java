package entregavel1_java.classes;

import java.util.Scanner;

public class C_Fibonacci {
    
    public static int getFibonacci(int value) {
        if (value < 2) {
            return value;
        } else {
            return getFibonacci(value - 1) + getFibonacci(value - 2);
        }
    }

    public static String applyFibonacci() {
        Scanner sc1 = new Scanner(System.in);
        String sequence = "";
        
        System.out.println("Digite um número e veja a sequencia Fibonacci: ");
        int value = sc1.nextInt();
        sc1.close();
        for (int index = 0; index < value; index++) {
            sequence = sequence + getFibonacci(index) + " ";
        }
        return "Sequência Fibonacci para o número ( "+value+" ): "+sequence;
    }

}
