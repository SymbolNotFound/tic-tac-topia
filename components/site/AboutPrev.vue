<template>
  <div>
    <NuxtLink :to="href">
      <slot />
    </NuxtLink>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  href: string;
}>()
</script>

<style>
/*
TODO align 'prev' link-card to the right (how to do that and always be beside 'next'?)
*/
</style>
