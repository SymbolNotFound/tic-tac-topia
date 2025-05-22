<template>
<div class="board board-3x3">
  <div v-for="i in 9"
    role="button" aria-pressed="false"
    :class="['cell', name(i)]"
    :key="name(i)"
    @click="mark(i)"
    @keydown.space="mark(i)"
    :tabindex="i"
  >{{ cell(i) }}</div>
</div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const emit = defineEmits(['mark'])

type Mark = '_' | 'X' | 'O'
type Coord = [number, number]

interface Marking {
  Mark: Mark;
  Coord: Coord;
}
const BLANK: Mark = '_'

const board = ref(new Array(9).map((i) => (
  {Mark: BLANK, Coord: coord(i)}) as Marking))

function coord(index: number): [number, number] {
  return [
    Math.floor(index/3) + 1,
    (index % 3) + 1]
}

function cell(index: number): Marking {
  const m = board.value[index]
  if (m === undefined) {
    return {Mark: BLANK, Coord: [0, 0]}
  }
  return m
}

function name(index: number): string {
  const [row, col] = coord(index)
  return `cell_${row}_${col}`
}

function mark(index: number) {
  if (cell(index).Mark == BLANK) {
    emit('mark', coord(index))
  }
}
</script>

<style module>
.board-3x3 {
  display: grid;
}

.cell:hover {
  opacity: 0.8;
}

.cell_2_2 {
  opacity: 0.5;
}
</style>
