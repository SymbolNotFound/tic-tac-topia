<template>
<div class="flex-col">

  <div>bla bla TODO configure the game</div>
  <nuxt-link
    to="/metagame">Play</nuxt-link>




  <div>
    <div class="status">{{ statusMsg }}</div>
    <game-menu />
  </div>

  <slot name="game-status">
    <game-match-status />
  </slot>
</div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'gameplay'
})

import { ref } from 'vue'

const MetaBoard = useMNK(3, 3, 3)
const cells = ref(MetaBoard.cells)

const statusMsg = useState('status', () => 'loading...')

function startSubgame(row: number, col: number) {
  // let games = [
  //   [GameTicTacThrice, GameTicTacStones,   GameTicTacCards],
  //   [GameTicTacTandem, GameTicTacRainbow,  GameTicTacShadow],
  //   [GameTicTacTiles,  GameTicTacRoshambo, GameTicTacThrow],
  // ]


}

function onGoalUpdate(winner: string) {
  // TODO winner declared, emotes enabled, , CtA "replay?" on challenger only, CtA "subscribe!"
}

function onTerminal() {
  // TODO game over (draw message), CtA "replay?" on both, CtA "subscribe!"
}
</script>

<style>
.flex-col {
  display: flex;
  flex-direction: column;
}
</style>
