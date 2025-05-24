<template>
<div class="board board-3x3">
  <div v-for="cell of unref(board)"
    role="button" aria-pressed="false"
    :key="cell.name()"
    :class="[
      'cell',
      cell.name()]"
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
import { BLANK, type Marker, type Equipment } from '~/shared/types/equip'

const { /*at,*/ board } = defineProps<{
  board: Ref<RectCell[]> | RectCell[]
  // at(row: number, col: number): Equipment
}>()
const emit = defineEmits(['mark'])

function mark(cell: RectCell) {
  if (cell.marker == BLANK) {
    emit('mark', cell.coord)
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
