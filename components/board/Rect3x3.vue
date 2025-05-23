<template>
<div class="board board-3x3">
  <div v-for="i in 9"
    role="button" aria-pressed="false"
    :key="board[i]?.name"
    :class="[
      'cell',
      board[i]?.name]"
    :tabindex="i"
    v-text="marked(i)"
    @click="board[i]?.mark"
    @keydown.space="board[i]?.mark"
  ></div>
</div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const { board } = defineProps<{
  board: RectCell<Marker>[];
}>()
const emit = defineEmits(['mark', 'line', 'filled'])

// Each cell in the board is a product of its coordinate and current marking.
class CellState {
  constructor(
    readonly coord: RectCoord,
    public marker: Marker) {
  }

  get name(): string {
    const [ row, col ] = this.coord
    return `cell_${row}_${col}`
  }

  mark() {
    if (this.marker == BLANK) {
      emit('mark', this.coord)
    }
    // TODO check line
    // TODO check filled
  }
}

function marked(index: number): Marker {
  const cell = board.value[index]
  if (cell === undefined) {
    return BLANK
  }
  return cell.marker
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
