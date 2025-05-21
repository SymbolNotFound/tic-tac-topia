<template>
<div class="flex-col">
  <div>
    <div class="status">{{ statusMsg }}</div>
    <game-menu />
  </div>
  <div class="grid-3x3">
    <div ref="cell_1_1"><game-icon src=""></game-icon></div>
  </div>
  <game-match-status />
</div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const statusMsg = ref('starting...')

function onTerminal(winner: string | undefined) {
  if (winner === undefined) {
    statusMsg.value = 'Game drawn.  Position frozen for a turn.'
  }
}
</script>

<style>
.flex-col {
  display: flex;
  flex-direction: column;
}
</style>
