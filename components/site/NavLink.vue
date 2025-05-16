<template>
<li><NuxtLink :to="slug">
  <span aria-hidden="true">{{ icon }}</span>
  <slot></slot>
</NuxtLink>
</li>
</template>

<script lang="ts" setup>
const { slug, icon } = defineProps<{
  slug: string,
  icon: string,
}>()

</script>
