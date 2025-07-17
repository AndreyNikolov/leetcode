function isValidSudoku(board: string[][]): boolean {
    const rows = Array.from({ length: 9 }, () => new Set<string>());
    const cols = Array.from({ length: 9 }, () => new Set<string>());
    const boxes = new Map<string, Set<string>>();

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            const curr = board[i][j];
            if (curr === '.') continue;

            const boxKey = `${Math.floor(i / 3)}-${Math.floor(j / 3)}`;

            if (
                rows[i].has(curr) ||
                cols[j].has(curr) ||
                (boxes.has(boxKey) && boxes.get(boxKey)!.has(curr))
            ) {
                return false;
            }

            rows[i].add(curr);
            cols[j].add(curr);
            if (!boxes.has(boxKey)) boxes.set(boxKey, new Set<string>());
            boxes.get(boxKey)!.add(curr);
        }
    }

    return true;
}