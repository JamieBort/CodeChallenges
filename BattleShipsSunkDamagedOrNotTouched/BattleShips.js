function damagedOrSunk (board, attacks){
    //the battle starts here!
    console.log(board);
    console.log(attacks);
  }

  var board = [ [0, 0, 1, 0],
              [0, 0, 1, 0],
              [0, 0, 1, 0] ];
          
var attacks = [[3, 1], [3, 2], [3, 3]];
var result = damagedOrSunk(board, attacks);