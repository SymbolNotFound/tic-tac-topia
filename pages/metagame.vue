<template>
<div class="flex-col">
  <div>
    <div class="status">{{ statusMsg }}</div>
    <game-menu />
  </div>

  <rect-3x3
    :history
    @mark="startSubgame"
  >
    <template #cell_1_1>(1, 1)</template>
    <template #cell_1_2>(1, 2)</template>
    <template #cell_1_3>(1, 3)</template>
    <template #cell_2_1>(2, 1)</template>
    <template #cell_2_2>(2, 2)</template>
    <template #cell_2_3>(2, 3)</template>
    <template #cell_3_1>(3, 1)</template>
    <template #cell_3_2>(3, 2)</template>
    <template #cell_3_3>(3, 3)</template>
  </rect-3x3>

  <slot name="game-status">
    <game-match-status />
  </slot>
</div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'gameplay'
})

const props = defineProps<{
  history: PlayerMove[]
}>()
const statusMsg = useState('status', () => 'loading...')

const store = useMetagameStore()

watchEffect(() => {
  // for (var i in )
})

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
