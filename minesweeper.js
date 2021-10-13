//
// This is only a SKELETON file for the 'Minesweeper' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

// re add export to function, running nodemon
const annotate = (input) => {
  // mapping board (array of strings)
  input.map((row, rowIdx, rowArr) => {
    console.log(row, rowArr)
  })
};

annotate([' * * ', '  *  ', '  *  ', '     '])