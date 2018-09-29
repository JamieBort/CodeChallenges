package com.company;

import com.sun.javafx.scene.layout.region.RepeatStructConverter;
import com.sun.tools.javac.util.ArrayUtils;

import java.util.Arrays;
import java.util.Collections;

public class myKata {
    public static int sum(int[] numbers) {
//        ============= Finding the max and min values. =============

//        Integer[] num = { 2, 4, 7, 5, 9 };
//        The following lines of code are from: https://stackoverflow.com/questions/880581/how-to-convert-int-to-integer-in-java
// and: https://www.geeksforgeeks.org/find-max-min-value-array-primitives-using-java/
        Integer[] num = Arrays.stream(numbers).boxed().toArray(Integer[]::new);

        // using Collections.min() to find minimum element
        // using only 1 line.
        int min = Collections.min(Arrays.asList(num));

        // using Collections.max() to find maximum element
        // using only 1 line.
        int max = Collections.max(Arrays.asList(num));

        // printing minimum and maximum numbers
        System.out.println("Minimum number of array is : " + min);
        System.out.println("Maximum number of array is : " + max);
//        ===========================================================

//        ============= Summing the rest of the values in the array. =============

        int sum = 0;
        int time = 0;
        for (int i = 0; i < numbers.length; i++) {
//            if ((min != numbers[i]) && (max != numbers[i])) {
            if (min == numbers[i]) {
                numbers[i] -= min;
                min = 0;
            }
            if (max == numbers[i]) {
                numbers[i] -= max;
                max = 0;
            }
            sum += numbers[i];
        }


//            while (time < 3) {
//                if (min != numbers[i]) {
//                    time++;
//                    if (max != numbers[i]) {
//                        time++;
//                        sum += numbers[i];
//                    }
//                }
//            }

        System.out.println("The total sum of the remaining elements of the array is : " + sum);
        return sum;

    }
}


// int[] myArray = {6, 2, 1, 8, 10}; // expected sum is 16.

// int[] myArray = { 1, 1, 11, 2, 3 }; // expected sum is 6.


//finding index of value
//for(int i=0; i<array.length; i++){
//        if(array[i] == value)
//        return i;}


// ============ Old code ============

//        int max = 0;
//        int indexOfMax = 0;
//        int min = 0;
//        int indexOfMin = 0;
//
//        for (int i = 1; i < numbers.length; i++) {
////            Finding the max value
//            // int[] myArray = { 1, 1, 11, 2, 3 }; // expected sum is 6.
////            if 1 >= 1, discard 1.
////                    Repeat.
////            { 1, 11, 2, 3 }
////            if 11 >= 1, discard 1.
////            Repeat.
////            {11, 2, 3 }
////            If 2 >= 11, discard 11. Else, discard 2.
////                    Repeat.
////            {11, 3 }
////            If 3 >= 11, discard 11. Else, discard 3.
//            int counter = 0;
//            int[] dummyArray = new int[numbers.length-1];
//            while(counter < numbers.length){
//                for (int i = 0; i < dummyArray.length; i++) {
//                if (numbers[i]>=numbers[i+1]){
////               dummArray[i]
//                }
//                counter ++;
//            }
//
//
//
//
//            if (numbers[i] > numbers[i - 1]) {
//                max = numbers[i];
//                System.out.println("The Max number is: " + max);
//
////        Apply the knowing the element, now find the index number to that element.
//                if (numbers[i] == max) {
////                    System.out.println("The index of " + max + " is " + i);
//                    indexOfMax = i;
//                }
//            }
////            Finding the min value
//
//            if (numbers[i] < numbers[i - 1]) {
//                min = numbers[i];
////                System.out.println("The min number is: " + min);
//            }
//
////        Apply the knowing the element, now find the index number to that element.
//            if (numbers[i] == min) {
////                System.out.println("The index of " + min + " is " + i);
//                indexOfMin = i;
//            }
//        }
//
//        System.out.println("The index of " + max + " is " + indexOfMax);
//
//        int sum = 0;
//        for (int i = 0; i < numbers.length; i++) {
//            if ((i != indexOfMax) && (i != indexOfMin)) {
//                sum += numbers[i];
//            }
//        }
//        System.out.println(sum);
//        return sum;
//    }
//}

// int[] myArray = {6, 2, 1, 8, 10}; // expected sum is 16.

// int[] myArray = { 1, 1, 11, 2, 3 }; // expected sum is 6.