<template>
<div class="board board-3x3">
  <div v-for="cell in board"
    role="button" aria-pressed="false"
    :key="cell.name"
    :class="[
      'cell',
      cell.name]"
    :tabindex="cell.index"
    v-text="cell.marker"
    @drop.prevent="mark(cell)"
    @dragenter.prevent @dragover.prevent
    @click="mark(cell)"
    @keydown.space="mark(cell)"
  ></div>
</div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { BLANK } from '~/shared/types/equip'

const { board } = defineProps<{
  board: RectCell[]
}>()
const emit = defineEmits(['mark', 'line', 'filled'])

function mark(cell: RectCell) {
  if (cell.marker == BLANK) {
    emit('mark', cell.coord)
  }
  // TODO check line
  // TODO check filled
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
