package entregavel1_java.classes;

import java.util.Scanner;

public class B_Somatorio {
    public static String somatorio() {
        Scanner sc1 = new Scanner(System.in);
        int somatorioResultado = 0;
        
        System.out.println("Informe um conjunto de números que deseja somar (Use a vírgula para separar. Ex: 3,4,5,6");
        String conjuntoNumerosTexto = sc1.next();

        String[] conjuntoNumerosArray = conjuntoNumerosTexto.split(",");

        for (int index = 0; index < conjuntoNumerosArray.length; index++) {
            somatorioResultado = somatorioResultado + Integer.parseInt(conjuntoNumerosArray[index]);
        }

        return "Somatório = "+somatorioResultado;
    }
}
