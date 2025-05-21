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

const emit = defineEmits(['mark'])

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

// A computed property for more convenient use in a display:grid layout.
const flattenedBoard = computed(() => board.value.flat())

// init turn = 1
// TODO Probably this should be pulled from GameState (or SubGameState?)
const turn = ref(1)

function marked(row: number, col: number): Marking {
  return board.value[row][col]
}

function currentPlayer(turn: number): Role {
  if (turn % 2 === 1) {
    return PLAYER_X
  }
  return PLAYER_O
}

const mark = (player: Role, row: number, col: number) => {
  if (board.value[row][col] == BLANK) {
    emit('mark', row, col)
  }
}

</script>

<style>
.board {
  display: grid;
}

.board-cell {
  background-color: purple;
}
</style>
