<template>
  <div class="board-container">
    <div class="game-status"></div>
    <svg class="board rect-board">
      <symbol id="mark-x" width="16" height="16" viewBox="0 0 2 2">
      </symbol>
      <symbol id="mark-o" width="16" height="16" viewBox="0 0 2 2">
      </symbol>

      <g v-for="row in board">
        <g v-for="cell in row">
          <use v-if="cell == 'X'"
            href="#mark-x"
          ></use>
          <use v-if="cell == 'O'"
            href="#mark-x"
          ></use>
      </g></g>
    </svg>
    <div class="turn-status"></div>
    <div class="turn-actions"></div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

// base (
//   Marking(blank) = " "
//   Marking(x)     = "X"
//   Marking(o)     = "O"
// )
type Marking = " " | "X" | "O"

// init (
//   let ?i in 1..3
//   let ?j in 1..3
//   Board(?i-1, ?j-1) = Marking(blank)
// )
const board = ref(new Array(3).map(() => new Array(3).map(()=>" ") as Marking[]))

</script>
