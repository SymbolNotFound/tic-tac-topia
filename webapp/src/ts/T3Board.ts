
export interface PlayerMove {
  row: Row;
  col: Column;
  marking: string;
}

export type Row = 1 | 2 | 3;
export type Column = 1 | 2 | 3;

export interface Line {
  a: {row: Row, col: Column};
  b: {row: Row, col: Column};
  c: {row: Row, col: Column};
}

export function index(i: Row, j: Column): number {
  return (i-1)*3 + j - 1
}

// Returns true if either player has marked three in a row, assuming
// that players always alternate turns.
export function hasLine(history: PlayerMove[]): boolean {
  const counters = Array(2).fill(void 0).map(
    () => Array(8).fill(3))
  let player = 0
  for (const move of history.slice(2, undefined)) {
    const i = index(move.row, move.col)
    for (const lineID of lines[i]) {
      counters[player][lineID]--
      if (counters[player][lineID] == 0) {
        return true
      }
    }
    player = 1 - player
  }
  return false
}

// Enumerate the lines such that each can be identified by a single number.
// Then we can determine line formation by finding any line-index that
// sums to three.  Arbitrary order: rows from top to bottom (0..2), diagonal
// front-slash (3), columns from left to right (4..6), back-slash (7).
const lines: number[][] = [
  [0, 4, 7],    // top-left
  [0, 5],       // top
  [0, 3, 6],    // top-right
  [1, 4],       // left
  [1, 3, 5, 7], // center
  [1, 6],       // right
  [2, 3, 4],    // bottom-left
  [2, 5],       // bottom
  [2, 6, 7],    // bottom-right
];
