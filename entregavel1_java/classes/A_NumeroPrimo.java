package entregavel1_java.classes;

import java.util.Scanner;

public class A_NumeroPrimo {

    public static String numPrimo() {
        Scanner sc1 = new Scanner(System.in);
        String ehPrimo = "";

        System.out.println("Digite um número e veja se ele é primo...");
        int num = sc1.nextInt();
        int contDivs = 0;
        sc1.close();

        for (int index = 1; index <= num; index++) {
            if(num%index == 0){
                contDivs = contDivs + 1;
            }
        }

        if(contDivs > 2) {
            ehPrimo = "Não é primo.";
        } else {
            ehPrimo = "É primo.";
        }

        return ehPrimo;
    }
    
}