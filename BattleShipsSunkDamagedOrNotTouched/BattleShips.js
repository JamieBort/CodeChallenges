function damagedOrSunk(board, attacks) {
    // Counting the number of boats.
    // Since each boat is represented by a number and the first boat starts with '1', then the highest number represents the number of boats.
    // Therefore we need to parse the arrays in the array to find the highest digit.

    // Try this with foreach now.
    // let myArray =[];
    // let myNumber = 0;
    // board.forEach(element => {
    //     console.log(Math.max(Math.max(...element)));
    //     myNumber = Math.max(Math.max(...element));
    //     console.log(typeof myNumber);
    //     myArray.push(myNumber);
    // });
    // console.log(myArray);
    // console.log(Math.max(Math.max(...myArray)));

    // Using a for loop.
    var dummmyArray = [];
    var NumberOfBoats = 0;
    for (i=0; i<board.length; i++){
        dummmyArray.push(Math.max(...board[i]));
    }
    NumberOfBoats = Math.max(...dummmyArray);

    console.log(NumberOfBoats, "number of boats");
    console.log(board, "board");
    console.log(attacks, "attacks");
}

//   Game 1.
var board = [[0, 0, 1, 0],
[0, 0, 1, 0],
[0, 0, 1, 0]];

var attacks = [[3, 1], [3, 2], [3, 3]];
var result = damagedOrSunk(board, attacks);

// Game 2
// var board = [ [3, 0, 1],
//               [3, 0, 1],
//               [0, 2, 1], 
//               [0, 2, 0] ];

// var attacks = [[2, 1], [2, 2], [ 3, 2], [3, 3]]
// var result = damagedOrSunk(board, attacks)