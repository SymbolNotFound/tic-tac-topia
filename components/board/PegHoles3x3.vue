<template>
<div class="board board-peghole board-3x3">
  <div ref="cell_1_1"></div>
  <div ref="cell_1_2"></div>
  <div ref="cell_1_3"></div>
  <div ref="cell_2_1"></div>
  <div ref="cell_2_2"></div>
  <div ref="cell_2_3"></div>
  <div ref="cell_3_1"></div>
  <div ref="cell_3_2"></div>
  <div ref="cell_3_3"></div>
</div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

</script>

<style module>
.board-3x3 {
  display: grid;
}
</style>
