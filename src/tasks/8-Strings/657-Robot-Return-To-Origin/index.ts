function judgeCircle(moves: string): boolean {
  let position = { row: 0, col: 0 };

  for (let i = 0; i < moves.length; i++) {
    switch (moves[i]) {
      case "U":
        position.row -= 1;
        break;
      case "D":
        position.row += 1;
        break;
      case "L":
        position.col -= 1;
        break;
      case "R":
        position.col += 1;
        break;
      default:
        console.log(`Unexpected move ${moves[i]}.`);
    }
  }

  const { row, col } = position;
  return row === 0 && col === 0;
}
