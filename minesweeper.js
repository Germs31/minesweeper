//
// This is only a SKELETON file for the 'Minesweeper' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

// re add export to function, running nodemon
const annotate = (input) => {
  // mapping board (array of strings)
  const answer = input.map((row, rowIdx, rowArr) => {
    // mapping through row to figure count, spliting str in arr
    row.split("").map((sqr, sqrIdx) => {
      if(sqr === "*") return "*"
      let count = 0
      for(let i = rowIdx-1; i<rowIdx+2; i++){
        for(let j = sqrIdx-1; j<sqrIdx+2; j++){
          if(!(i===rowIdx && j===sqrIdx) && rowArr[i] && rowArr[i][j]==='*') count++
        }
      }

      count ? count : ' '
    })
    row
  })

  console.log(answer)
};

annotate([' * * ', '  *  ', '  *  ', '     '])