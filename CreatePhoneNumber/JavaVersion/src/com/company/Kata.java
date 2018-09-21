package com.company;

public class Kata {
    public static String createPhoneNumber(int[] numbers) {
        // Your code here!
        String str = "(" + numbers[0] + numbers[1] +  numbers[2] + ") " + numbers[3] + numbers[4] + numbers[5] + "-" + numbers[6] + numbers[7] + numbers[8] + numbers[9];
        System.out.println(str);

        return str;
    }
}
