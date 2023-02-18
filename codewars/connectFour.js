/**
 * The first player who connects four items of the same color is the winner.
 * You should return "Yellow", "Red" or "Draw" accordingly.
 */
function whoIsWinner(piecesPositionList){
  const diagonals = [
    [
      {
        column: "A",
        row: 2
      },
       {
        column: "B",
        row: 3
      },
      {
        column: "C",
        row: 4
      },
      {
        column: "D",
        row: 5
      },
    ],
    [
       {
        column: "A",
        row: 1
      },
       {
        column: "B",
        row: 2
      },
      {
        column: "C",
        row: 3
      },
      {
        column: "D",
        row: 4
      },
      {
        column: "E",
        row: 5
      },
    ],
    [
      {
        column: "A",
        row: 0
      },
       {
        column: "B",
        row: 1
      },
      {
        column: "C",
        row: 2
      },
      {
        column: "D",
        row: 3
      },
      {
        column: "E",
        row: 4
      },
         {
        column: "E",
        row: 5
      },
    ],
    [
      {
        column: "B",
        row: 0
      },
       {
        column: "C",
        row: 1
      },
      {
        column: "D",
        row: 2
      },
      {
        column: "E",
        row: 3
      },
      {
        column: "F",
        row: 4
      },
         {
        column: "G",
        row: 5
      },
    ],
    [
      {
        column: "C",
        row: 0
      },
       {
        column: "D",
        row: 1
      },
      {
        column: "E",
        row: 2
      },
      {
        column: "F",
        row: 3
      },
      {
        column: "G",
        row: 4
      },
    ],
     [
      {
        column: "D",
        row: 0
      },
       {
        column: "E",
        row: 1
      },
      {
        column: "F",
        row: 2
      },
      {
        column: "G",
        row: 3
      },
    ],
    [
      {
        column: "G",
        row: 2
      },
       {
        column: "F",
        row: 3
      },
      {
        column: "E",
        row: 4
      },
      {
        column: "D",
        row: 5
      },
    ],
    [
      {
        column: "G",
        row: 1
      },
       {
        column: "F",
        row: 2
      },
      {
        column: "E",
        row: 3
      },
      {
        column: "D",
        row: 4
      },
        {
        column: "C",
        row: 5
      },
    ],
    [
      {
        column: "G",
        row: 0
      },
       {
        column: "F",
        row: 1
      },
      {
        column: "E",
        row: 2
      },
      {
        column: "D",
        row: 3
      },
        {
        column: "C",
        row: 4
      },
      {
        column: "B",
        row: 5
      },
    ],
    [
      {
        column: "F",
        row: 0
      },
       {
        column: "E",
        row: 1
      },
      {
        column: "D",
        row: 2
      },
      {
        column: "C",
        row: 3
      },
        {
        column: "B",
        row: 4
      },
      {
        column: "A",
        row: 5
      },
    ],
    [
      {
        column: "E",
        row: 0
      },
       {
        column: "D",
        row: 1
      },
      {
        column: "C",
        row: 2
      },
      {
        column: "B",
        row: 3
      },
        {
        column: "A",
        row: 4
      },
    ],
    [
      {
        column: "D",
        row: 0
      },
       {
        column: "C",
        row: 1
      },
      {
        column: "B",
        row: 2
      },
      {
        column: "A",
        row: 3
      },
    ]
  ]
  const rows ={
    0: [],
    1: [],
    2: [],
    3: [],
    4: [],
    5: []
  }
  const columns = {
    A: [],
    B: [],
    C: [],
    D: [],
    E: [],
    F: [],
    G: []
  }
  function checkGroups(groups, color) {
    for (let i = 0; i < Object.keys(groups).length; i++) {
      const key = Object.keys(groups)[i]
      let group = groups[key]
      let connectFourCounter = 0
      let lastPieceIndex = undefined
      group.map((currentColor, i) => {
        if (currentColor === color && connectFourCounter < 4) {
          if (i === 0 || lastPieceIndex === undefined) {
            connectFourCounter++
            lastPieceIndex = i
          } else if (lastPieceIndex + 1 === i) {
            connectFourCounter++
            lastPieceIndex = i
          } else {
            connectFourCounter = 0
            connectFourCounter++
            lastPieceIndex = i
          }
        } else if (currentColor !== color && connectFourCounter < 4) {
          connectFourCounter = 0
        }
      })
      if (connectFourCounter === 4) {
        return color
      }
    }
    return null
  }
  
  function checkDiagonals(pieceColor) {
    for (let i = 0; i < diagonals.length;i++) {
      const diagonal = diagonals[i]
     let connectFourCounter = 0
      let lastPieceIndex = undefined;
      diagonal.map(({color}, i) => {
        if (pieceColor === color && connectFourCounter < 4) {
          if (i === 0 || lastPieceIndex === undefined) {
            connectFourCounter++
            lastPieceIndex = i
          } else if (lastPieceIndex + 1 === i) {
            connectFourCounter++
            lastPieceIndex = i
          } else {
            connectFourCounter = 0
            connectFourCounter++
            lastPieceIndex = i
          }
        } else if (pieceColor !== color && connectFourCounter < 4) {
          connectFourCounter = 0
        }
      })
      if (connectFourCounter === 4) return pieceColor
    }
    return null
  }

  for (let i = 0; i < piecesPositionList.length;i++) {
    const piece = piecesPositionList[i]
    const color = piece.slice(2)
    const col = piece.slice(0, 1) // column
    columns[col].push(color)
    const rowNum = columns[col].length - 1
    const rowPlace = Object.keys(columns).indexOf(col)
    // Add piece to row
     if (rows[rowNum]) rows[rowNum][rowPlace] = color
    // Add piece to diagonal
    diagonals.forEach((diagonal, i) => {
       diagonal.forEach(({column, row}, i) => {
        if (column === col && row === rowNum) diagonal[i].color = color
      })
    })    
    // Check columns
    if (checkGroups(columns, color)) return color
    // Check rows
    if (checkGroups(rows, color)) return color
    // Check diagonals
    if (checkDiagonals(color)) return color
  }
  return "Draw"
}