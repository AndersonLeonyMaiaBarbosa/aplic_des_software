package entregavel1_java.classes;

public class UtilCustom {

    public static String printArrayElements(int[] array) {
        String elementsOfArray = "";
        for (int i = 0; i < array.length; i++) {
            if(i == array.length -1 ) {
                elementsOfArray = elementsOfArray + array[i];
            } else {
                elementsOfArray = elementsOfArray + array[i] + ",";
            }
        }
        return "["+elementsOfArray+"]";
    }
    
}
