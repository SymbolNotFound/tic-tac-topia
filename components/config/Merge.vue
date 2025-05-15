<!--
Merges two configurations into one component, may recursively merge.
 -->

<template>
<div class="merged-config"></div>
</template>

<script setup lang="ts">
import { type GameConfig } from "./config"

defineProps<{
  left: GameConfig;
  right: GameConfig;
}>()
</script>
