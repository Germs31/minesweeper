//
// This is only a SKELETON file for the 'Minesweeper' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

// re add export to function, running nodemon
export const annotate = (input) => {
  // mapping board (array of strings)
  let answerArr = []
  input.map((row, rowIdx, rowArr) => {
    // mapping through row to figure count, spliting str in arr
    let newRow = []
    row.split("").map((sqr, sqrIdx) => {
      if(sqr === "*") return newRow.push("*")
      let count = 0
      // cross examine both rows to determine patten
      for(let i = rowIdx-1; i<rowIdx+2; i++){
        for(let j = sqrIdx-1; j<sqrIdx+2; j++){
          if(!(i===rowIdx && j===sqrIdx) && rowArr[i] && rowArr[i][j]==='*') count++
        }
      }
      newRow.push(count ? count : ' ')
    })
    answerArr.push(newRow.join(''))
  })

  return answerArr
};

