<template>
<div class="board board-rect board-classic">
  <div v-for="(row, i) in board" :key="i"
    class="board-row">
    <div v-for="(marking, j) in row" :key="j"
      class="board-cell"
      @drop.prevent="mark(currentPlayer(turn), i, j)"
      @dragenter.prevent @dragover.prevent
      @click="mark(currentPlayer(turn), i, j)">
      {{ marking }}
    </div>
  </div>
</div>
</template>

<script lang="ts" setup>
import { useTemplateRef, onMounted, ref } from 'vue'

// role(x)
// role(o)
type Role = "X" | "O"
const PLAYER_X = "X"
const PLAYER_O = "O"

// base (
//   Marking(BLANK) = " "
//   Marking(X)     = "X"
//   Marking(O)     = "O"
// )
type Marking = " " | "X" | "O"
const BLANK:  Marking = " "
const X_MARK: Marking = "X"
const O_MARK: Marking = "O"

// init (
//   let ?i in 1..3
//   let ?j in 1..3
//   Board(?i-1, ?j-1) = Marking(BLANK)
// )
const board = ref<Array<Array<Marking>>>(
  new Array(3).map(() => new Array(3).map(()=>BLANK)))

// init turn = 1
const turn = ref(1)

function currentPlayer(turn: number): Role {
  if (turn % 2 === 1) {
    return PLAYER_X
  }
  return PLAYER_O
}

const mark = (player: Role, row: number, col: number) => {
  if (board.value[row][col] == BLANK) {
    // emit
  }
}

</script>
