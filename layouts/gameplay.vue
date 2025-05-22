<template>
  <site-header />
  <game-tic-tac-meta
    @subgame="onSubgameStart"
    @payout="onGoalUpdate"
    @terminal="onTerminal">
    <!-- are we putting anything in the default slot?
        personal profile etc. will go in site-header,
        site licence/policy in site-footer...
        
        websockets or auth token or something?
        there are things that the game component itself needn't care about
      -->
  </game-tic-tac-meta>
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
