<template>
<div class="board board-holes353">
  <div ref="cell_1_1"></div>
  <div ref="cell_1_2"></div>
  <div ref="cell_1_3"></div>

  <div ref="cell_2_1"></div>
  <div ref="cell_2_2"></div>
  <div ref="cell_2_3"></div>

  <div ref="cell_3_1"></div>
  <div ref="cell_3_2"></div>

  <div ref="cell_4_1"></div>
  <div ref="cell_4_2"></div>
  <div ref="cell_4_3"></div>
</div>
</template>

<script lang="ts" setup>
// enum Marking := *" " | "X" | "O" | string
type          Marking = string
const BLANK:  Marking = " "
const X_MARK: Marking = "X"
const O_MARK: Marking = "O"

type Board = Marking[]
const board: Board = new Array<string>(11).map(() => BLANK)

// For each position, their geometric coordinates within a 1.0-unit square.
type Coord = { x: number, y: number }
const coordinates = new Map<number, Coord>([
  [0,  {x: 0,   y: 0  }],
  [1,  {x: 1/2, y: 0  }],
  [2,  {x: 1,   y: 0  }],
  [3,  {x: 0,   y: 1/3}],
  [4,  {x: 1/2, y: 1/3}],
  [5,  {x: 1,   y: 1/3}],
  [6,  {x: 1/4, y: 1/2}],
  [7,  {x: 3/4, y: 1/2}],
  [8,  {x: 0,   y: 1  }],
  [9,  {x: 1/2, y: 1  }],
  [10, {x: 1,   y: 1  }],
])

type Completion = { chk1: number, chk2: number }
// For each position, the pairs of positions which would complete a line-of-3.
const completes = new Map<number, Array<Completion>>([
  [0, [
    {chk1: 1, chk2: 2},
    {chk1: 3, chk2: 8},
    {chk1: 4, chk2: 7},
    {chk1: 6, chk2: 9}]],
  [1, [
    {chk1: 0, chk2: 2},
    {chk1: 4, chk2: 9},
    {chk1: 6, chk2: 8},
    {chk1: 7, chk2: 10}]],
  [2, [
    {chk1: 0, chk2: 1},
    {chk1: 4, chk2: 6},
    {chk1: 5, chk2: 10},
    {chk1: 7, chk2: 9}]],
  [3, [
    {chk1: 0, chk2: 8},
    {chk1: 4, chk2: 5},
    {chk1: 6, chk2: 10}]],
  [4, [
    {chk1: 0, chk2: 7},
    {chk1: 1, chk2: 9},
    {chk1: 2, chk2: 6},
    {chk1: 3, chk2: 5}]],
  [5, [
    {chk1: 2, chk2: 10},
    {chk1: 3, chk2: 4},
    {chk1: 7, chk2: 8}]],
  [6, [
    {chk1: 0, chk2: 9},
    {chk1: 1, chk2: 8},
    {chk1: 2, chk2: 4},
    {chk1: 3, chk2: 10}]],
  [7, [
    {chk1: 0, chk2: 4},
    {chk1: 1, chk2: 10},
    {chk1: 2, chk2: 9},
    {chk1: 5, chk2: 8}]],
  [8, [
    {chk1: 0, chk2: 3},
    {chk1: 1, chk2: 6},
    {chk1: 5, chk2: 7},
    {chk1: 9, chk2: 10}]],
  [9, [
    {chk1: 0, chk2: 6},
    {chk1: 1, chk2: 4},
    {chk1: 2, chk2: 7},
    {chk1: 8, chk2: 10}]],
  [10, [
    {chk1: 1, chk2: 7},
    {chk1: 2, chk2: 5},
    {chk1: 3, chk2: 6},
    {chk1: 8, chk2: 9}]],
])

function completesLine(position: number): boolean {
  if (position < 0 || position >= board.length) {
    return false
  }
  let match = board[position]
  completes.get(position)?.forEach((candidate) => {
    if (board[candidate.chk1] === match && board[candidate.chk2] === match) {
      return true
    }
  })
  return false
}
</script>
