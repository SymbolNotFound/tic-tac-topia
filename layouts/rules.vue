<template>
  <site-header />
  <slot />
  <site-footer />
</template>

<script setup lang="ts">
</script>

<style>
.flex {
  display: flex;
  gap: var(--gap, 1.5rem);
}

.logo {
  margin: 2rem;
}

.primary-header {
  align-items: center;
  justify-content: space-between;
}
</style>
u