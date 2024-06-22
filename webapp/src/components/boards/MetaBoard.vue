<template>
  <div class="gameboard">
    <turn-status class="q-pl-sm" :icon="icon">{{ status }}</turn-status>
    <turn-menu></turn-menu>

    <!-- We could, in theory, model this meta-game in GDL -->
    <div v-for="cell in board"
      class="cell"
      :key="cell.id"
      data-id="{{cell.id}}"
      @click="handleClick(cell.index)"
    >{{ cell.gameIcon }}
    </div>
  </div>
</template>

<style lang="css">
.gameboard {
  display: grid;
  grid-template-columns: repeat(3, 25vmin);
  grid-template-rows: 50px repeat(3, 25vmin);
  gap: 1.5vmin;
}

.cell {
  background-color: lightgray;
  border-radius: 5px;
}

@media (min-width: 768px) {
  .gameboard {
    display: grid;
    grid-template-columns: repeat(3, 190px);
    grid-template-rows: 50px repeat(3, 190px);
    gap: 12px;
  }

  .cell {
    border-radius: 7px;
  }
}

.cell:hover {
  cursor: pointer;
  position: relative;
  top: -3px;
  left: -3px;
  box-shadow: 7px 7px 3px grey;
}

.status {
  grid-column-start: 1;
  grid-column-end: 3;
  gap: 16px;
  display: flex;
  align-self: center;
  align-items: center;
}
</style>

<script setup lang="ts">
import { ref } from 'vue'
import TurnMenu from './TurnMenu.vue'
import TurnStatus from './TurnStatus.vue'

interface CellValue {
  index: number
  id: string
  marked: 'x' | 'o' | undefined
  gameIcon: string
  handleClick: () => void
}

const board = ref<CellValue[]>(
  Array(9).fill(undefined).map(
    (_, index) => ({
      index: index,
      id: name(index),
      marked: undefined,
      gameIcon: '',
    }) as CellValue))

const icon = ref('fa-x')
const status = ref('You go first!')

function name(i: number): string {
  return `cell_${Math.floor(i/3)+1}_${(i%3)+1}`
}

function handleClick(cell_index: number) {
    let cell = board.value[cell_index]
    if (cell.marked == undefined) {
      board.value[cell_index].marked = 'x'
    }
    // TODO Check whether this move produces a winning line.
}
</script>
