<template>
  <site-header />
  <slot></slot>
  <site-footer />
</template>

<script setup lang="ts">
import type { GameInfo, GameResult } from '~/shared/types/game'

function onSubgameStart(gameinfo: GameInfo) {

}

function onGoalUpdate() {

}

function onTerminal(gameinfo: GameInfo, result: GameResult) {

}
</script>
