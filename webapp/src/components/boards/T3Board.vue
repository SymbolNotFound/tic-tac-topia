<template>
  <div class="grid">
<!-- on second thought, this is more like a store than a component -->
  </div>
</template>

<style>
.grid {
  display: grid;
}
</style>

<script setup lang="ts">
import { ref } from 'vue'

defineProps<{
  history: number[]
}>()

export interface CellData {
  index: number
  contents: string
}

function newCellData(index: number): CellData {
  return {
    index,
    contents: ''
  }
}

const cells = ref<CellData[]>(Array(9).fill(void 0).map((index) => newCellData(index+1)))
</script>
