/**
 * @param {number} num
 * @return {string}
 */

const myObject = [
    {
        Symbol: "I",
        Value: 1
    },
    {
        Symbol: "V",
        Value: 5
    },
    {
        Symbol: "X",
        Value: 10
    },
    {
        Symbol: "L",
        Value: 50
    },
    {
        Symbol: "C",
        Value: 100
    },
    {
        Symbol: "D",
        Value: 500
    },
    {
        Symbol: "M",
        Value: 1000
    }
]
// console.log(myObject);

const myObject2 = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
}
// console.log(myObject2);

// special cases: 9 = 10 - 1. 4 = 5 - 1. 

// Define logic? Such that M > D, C, L, X, V, and I?

const I = 1;
const V = 5;
const X = 10;
const L = 50;
const C = 100;
const D = 500;
const M = 1000;

var string = "";
var intToRoman = function (num) {
    var multiples_of_M = (num - (num % M)) / M;
    var remainder_of_M = num % M;
    console.log("Multiples of M: ",multiples_of_M);
    console.log("The remainder is: ",remainder_of_M);
    for (let i = 0; i < multiples_of_M; i++) {
        string += "M";
    }

    var multiples_of_D = (remainder_of_M - (remainder_of_M % D)) / D;
    var remainder_of_D = remainder_of_M % D;
    console.log("Multiples of D: ",multiples_of_D);
    console.log("The remainder is: ",remainder_of_D);
    for (let i = 0; i < multiples_of_D; i++) {
        string += "D";
    }

    var multiples_of_C = (remainder_of_D - (remainder_of_D % C)) / C;
    var remainder_of_C = remainder_of_D % C;
    console.log("Multiples of C: ",multiples_of_C);
    console.log("The remainder is: ",remainder_of_C);
    for (let i = 0; i < multiples_of_C; i++) {
        string += "C";
    }

    var multiples_of_L = (remainder_of_C - (remainder_of_C % L)) / L;
    var remainder_of_L = remainder_of_C % L;
    console.log("Multiples of l: ",multiples_of_L);
    console.log("The remainder is: ",remainder_of_L);
    for (let i = 0; i < multiples_of_L; i++) {
        string += "L";
    }

    var multiples_of_X = (remainder_of_L - (remainder_of_L % X)) / X;
    var remainder_of_X = remainder_of_L % X;
    console.log("Multiples of l: ",multiples_of_X);
    console.log("The remainder is: ",remainder_of_X);
    for (let i = 0; i < multiples_of_X; i++) {
        string += "X";
    }

    var multiples_of_V = (remainder_of_X - (remainder_of_X % V)) / V;
    var remainder_of_V = remainder_of_X % V;
    console.log("Multiples of l: ",multiples_of_V);
    console.log("The remainder is: ",remainder_of_V);
    for (let i = 0; i < multiples_of_V; i++) {
        string += "V";
    }

    var multiples_of_I = (remainder_of_V - (remainder_of_V % I)) / I;
    var remainder_of_I = remainder_of_V % I;
    console.log("Multiples of l: ",multiples_of_I);
    console.log("The remainder is: ",remainder_of_I);
    for (let i = 0; i < multiples_of_I; i++) {
        string += "I";
    }


    // if (num < 4) {
    //     for (let i = 0; i < num; i++) {
    //         string += "I";
    //     }
    // } else {
    //     string = "IV";
    // }
    console.log(string);
};

intToRoman(1888);

// var string = "";
// console.log("this is my string: ",string);
// var intToRoman = function (num) {
//     for (let i = 0; i < num; i++) {
//         string += "I";
//         console.log("this is my string: ",string);
//     }
// };

// intToRoman(4);

// Input: 3 intToRoman(3);
// Output: "III"

// Input: 4 intToRoman(4);
// Output: "IV"