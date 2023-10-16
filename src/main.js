function solve (board = []) {
    const row = board.length
    if (row === 8) return [board]
    return [0, 1, 2, 3, 4, 5, 6, 7].flatMap(col =>
        board.every((v, r) => v !== col && Math.abs(v - col) !== row - r) ? solve([...board, col]) : []
    )
}

function printBoard (board, index) {
    console.log(`\nSolution ${index + 1}:`)
    board.forEach(row => console.log(`${' □ '.repeat(row)} ♛ ${' □ '.repeat(7 - row)}`))
}

solve().forEach(printBoard)
