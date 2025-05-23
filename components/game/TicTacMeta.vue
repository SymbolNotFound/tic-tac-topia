<template>
<div class="flex-col">
  <slot name="header">
    <div>
      <div class="status">{{ statusMsg }}</div>
      <game-menu />
    </div>
  </slot>

  <rect-3x3
    :board
    @mark="startSubgame"
    @line="goal"
    @filled="terminal"
  />

  <slot name="game-status">
    <game-match-status />
  </slot>
</div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { type Marker } from '~/shared/types/equip'

// The board is represented as a flat list for convenience with grid layout.
const { board } = useRectGrid(3, 3, 3)

const statusMsg = ref('starting...')

function startSubgame(row: number, col: number) {
  
}

function goal(winner: string) {
  // TODO winner declared, emotes enabled, , CtA "replay?" on challenger only, CtA "subscribe!"
}

function terminal() {
  // TODO game over (draw message), CtA "replay?" on both, CtA "subscribe!"
}
</script>

<style>
.flex-col {
  display: flex;
  flex-direction: column;
}
</style>
