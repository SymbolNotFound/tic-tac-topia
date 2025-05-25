<template>
<svg class="board board-rect">
  <symbol
    id="mark-x"
    width="16"
    height="16"
    viewBox="0 0 9 9">
    <path
      d="m 0.29289,0.29289 c 0.39053,-0.39052 1.02369,-0.39052 1.41422,0 L 4.5,3.08579 7.29289,0.29289 c 0.39053,-0.39052 1.02371,-0.39052 1.41421,0 0.3905,0.39053 0.3905,1.02369 0,1.41422 L 5.91421,4.5 8.7071,7.29289 c 0.3905,0.39053 0.3905,1.02371 0,1.41421 -0.3905,0.3905 -1.02368,0.3905 -1.41421,0 L 4.5,5.91421 1.70711,8.7071 c -0.39053,0.3905 -1.02369,0.3905 -1.41422,0 -0.39052,-0.3905 -0.39052,-1.02368 0,-1.41421 L 3.08579,4.5 0.29289,1.70711 c -0.39052,-0.39053 -0.39052,-1.02369 0,-1.41422 z"
      style="fill:#1934f1;fill-opacity:1;stroke:none;stroke-opacity:1"></path>
  </symbol>
  <symbol
    id="mark-o"
    width="16"
    height="16"
    viewBox="0 0 9 9">
    <path
      d="M 4.5,2 C 3.1193,2 2,3.11929 2,4.5 2,5.88071 3.1193,7 4.5,7 5.8807,7 7,5.88071 7,4.5 7,3.11929 5.8807,2 4.5,2 Z M 0,4.5 C 0,2.01472 2.0147,0 4.5,0 6.9853,0 9,2.01472 9,4.5 9,6.98528 6.9853,9 4.5,9 2.0147,9 0,6.98528 0,4.5 Z"
      style="clip-rule:evenodd;fill:#ff0d19;fill-opacity:1;fill-rule:evenodd">
    </path>
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

interface RectCell {

}

// init (
//   let ?i in 1..rowCount
//   let ?j in 1..colCount
//   Board(?i-1, ?j-1) = Marking(blank)
// )
const board = ref<Marking[][]>(
  new Array(rowCount).map(() => new Array(colCount).map(()=>" ")))

// TODO rest of the ruels
</script>
