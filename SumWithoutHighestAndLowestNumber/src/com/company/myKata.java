package com.company;

import com.sun.tools.javac.util.ArrayUtils;

import java.util.Arrays;

public class myKata {
    public static int sum(int[] numbers) {


        int max = 0;
        int indexOfMax = 0;
        int min = 0;
        int indexOfMin = 0;

        for (int i = 1; i < numbers.length; i++) {
//            Finding the max value
//            int max;
            if (numbers[i] > numbers[i - 1]) {
                max = numbers[i];
//                System.out.println("The Max number is: " + max);

//        Apply the knowing the element, now find the index number to that element.
                if (numbers[i] == max) {
//                    System.out.println("The index of " + max + " is " + i);
                    indexOfMax = i;
                }
            }
//            Finding the min value

            if (numbers[i] < numbers[i - 1]) {
                min = numbers[i];
                System.out.println("The min number is: " + min);

//        Apply the knowing the element, now find the index number to that element.
                if (numbers[i] == min) {
                    System.out.println("The index of " + min + " is " + i);
                    indexOfMin = i;
                }
            }
        }

        System.out.println("The index of " + max + " is " + indexOfMax);

        int sum = 0;
        for (int i = 0; i < numbers.length; i++) {
            if ((i != indexOfMax) && (i != indexOfMin)) {
                sum += numbers[i];
            }
        }
        System.out.println(sum);
        return sum;
    }
}

// int[] myArray = {6, 2, 1, 8, 10}; // expected sum is 16.

// int[] myArray = { 1, 1, 11, 2, 3 }; // expected sum is 6.