<template>
<svg class="board board-rect">
  <symbol
    id="mark-x"
    width="16"
    height="16"
    viewBox="0 0 2 2">
  </symbol>
  <symbol
    id="mark-o"
    width="16"
    height="16"
    viewBox="0 0 2 2">
  </symbol>

  <g v-for="row in board">
    <g v-for="cell in row">
      <use v-if="cell == 'X'"
        href="#mark-x"
      ></use>
      <use v-if="cell == 'O'"
        href="#mark-o"
      ></use>
  </g></g>
</svg>
</template>

<script lang="ts" setup>
import { defineProps, ref } from 'vue'

const {rowCount = 3, colCount = 3} = defineProps<{
  rowCount?: number,
  colCount?: number,
}>()

// This allows any type of marking on a cell, which is type-vague but cannot be
// avoided because Typescript requires value-constraining types to use const.
// However, if it is "X" or "O", the predefined SVG templates for them are used.
//
// ..for a specific X vs. O, MNK<3,3,3> board, see Classic.vue
type Marking = string

// init (
//   let ?i in 1..rowCount
//   let ?j in 1..colCount
//   Board(?i-1, ?j-1) = Marking(blank)
// )
const board = ref<Marking[][]>(
  new Array(rowCount).map(() => new Array(colCount).map(()=>" ")))

// TODO rest of the ruels
</script>
