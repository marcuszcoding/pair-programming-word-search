const wordSearch = (letters, word) => { 
    const horizontalJoin = letters.map(ls => ls.join(''))
    console.log("horizontolJoin:", horizontalJoin)
    
    for (l of horizontalJoin) {
        if (l.includes(word)) {
         return true
        } 
    }
    
    const verticalJoin = transpose(letters).map((ls) => ls.join(""));
    console.log("verticalJoin:", verticalJoin);
  
    for (l of verticalJoin) {
        if (l.includes(word)){ 
          return true; 
      }
    }
    return false;
  };
  
  const transpose = function(matrix) {
    
    const array = [];
    for (let row = 0; row < matrix.length; row++) { 
      for (let col = 0; col < matrix[row].length; col++) { 
        // This is a conditional statement that checks if the array at index col is empty. If it is, it assigns an empty array to that index.
        if (!array[col]) {
          array[col] = [];
        } 
        array[col].push(matrix[row][col]);
      }
    }
    return array;
    };


  module.exports = wordSearch

  /*
  row = 0, col = 0
  Array = [[]]
  Array = [[A]]
  //
  //
  //
    row = 0, col = 1
    Array = [[A]]
    Array = [[A],[]]
    Array = [[A],[W]]

    //

    row = 0, col = 2
    Array = [[A],[W]]
    Array =  [[A],[W] []]
    Array =  [[A],[W],[C]]

    ... for every column we end up doing this 

    lets move to when we finish our first loop...

    row = 1, col = 0
    Array = [[A],[W],[C]]
    If doesnt run because array exists at col = 0 so push value
    Array = [[A, S],[W],[C]]
  */

