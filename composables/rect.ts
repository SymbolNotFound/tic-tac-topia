// Copyright (c) 2025, Symbol Not Found
// 
// Redistributions of source code must retain the above copyright notice, this
// list of conditions and the following disclaimer.
// 
// Redistributions in binary form must reproduce the above copyright notice,
// this list of conditions and the following disclaimer in the documentation
// and/or other materials provided with the distribution.
// 
// Neither the name of the copyright holder nor the names of its contributors
// may be used to endorse or promote products derived from this software without
// specific prior written permission.
// 
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
// AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
// IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
// ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE
// LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
// CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
// SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
// INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
// CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
// ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
// POSSIBILITY OF SUCH DAMAGE.
//
// github:SymbolNotFound/tic-tac-topia/composables/rect.ts

import { BLANK, type  Equipment, type Marker } from '~/shared/types/equip'

export interface MNKBoard {
  cells: MNKCell[]
  
  at(i: number, j: number): Equipment | undefined
  update(i: number, j: number, mark: Equipment): void
  lineWith(row: number, col: number, mark: Equipment): boolean

  filled(): boolean
}

export class MNKCell {
  constructor(
    readonly index: number,
    readonly coord: RectCoord,
    public marker: Equipment) {}
  
  get name(): string {
    const { row, col } = this.coord
    return `cell_${row}_${col}`
  }

  apply(value: Equipment) {
    this.marker = value
  }
}


// Models the state of a classic <M,N,K>-game board.
// (e.g. Tic-Tac-Toe is a <3,3,3>-game)
export function useMNK(m: number, n: number, k: number): MNKBoard {
  const coord = (index: number) => ({
      row: Math.floor(index / n) + 1,
      col: (index % n) + 1,
  }) as RectCoord

  const index = (row: number, col: number) => (
    (row - 1) * n + col - 1
  ) as number

  const cells = new Array(m*n).map((i) => (
      {marker: BLANK, index: i, coord: coord(i)} as MNKCell
  ))

  const at = (row: number, col: number) => cells[index(row, col)]?.marker

  const update = (row: number, col: number, equip: Equipment) => {
    let cell = cells[index(row, col)]
    if (cell) {
      cell.marker = equip
    }
  }

  const filled = () => {
    for (var cell of cells) {
      if (cell.marker == BLANK) {
        return false
      }
    }
    return true
  }

  const lineWith = (row: number, col: number, mark: Marker): boolean => {
    let run = 0

    // completes a row of length k?
    let first = Math.max(col - k + 1, 1)
    let last = Math.min(col + k - 1, n)
    for (var j = first; j <= last; j += 1) {
      if (j == col) {
        run += 1
        continue
      }
      if (at(row, j) === mark) {
        run += 1
        if (run === k) {
          return true
        }
        continue
      }
      run = 0
    }

    // completes a column of length k?
    run = 0
    first = Math.max(row - k + 1, 1)
    last = Math.min(row + k - 1, m)
    for (var i = first; i <= last; i += 1) {
      if (i == row) {
        run += 1
        continue
      }
      if (at(i, col) === mark) {
        run += 1
        if (run === k) {
          return true
        }
        continue
      }
      run = 0
    }

    // completes a forward diagonal of length k?
    run = 0
    let start = Math.max(-k, 1-row, 1-col)
    let limit = Math.min(k, m-row, n-col)

    for (var d = start; d < limit; d += 1) {
      let i = row-d, j = col-d
      if (i == row && j == col) {
        run += 1
        continue
      }
      if (at(i, j) === mark) {
        run += 1
        if (run === k) {
          return true
        }
        continue
      }
      run = 0
    }

    // completes a backward diagonal of length k?
    run = 0
    start = Math.max(-k, 1-row, -n+col)
    limit = Math.min(k, m-row, col-1)

    for (var d = start; d < limit; d += 1) {
      let i = row-d, j = col-d
        if (i == row && j == col) {
          run += 1
          continue
        }
        if (at(i, j) === mark) {
          run += 1
          if (run === k) {
            return true
          }
          continue
        }
        run = 0
    }

    return false
  }

  return { cells, at, update, lineWith, filled }
}
