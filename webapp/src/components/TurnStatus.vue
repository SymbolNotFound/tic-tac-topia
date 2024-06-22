<template>
  <div class="status">
    <i class="fa-solid" :class="icon"></i>
    <span><slot></slot></span>
  </div>
</template>

<script setup lang="ts">
defineProps({
  icon: String
})
</script>

<style>
.status i {
  font-size: 1.8rem;
  animation: 0.7s ease-in-out status-icon-animation;
}

@keyframes status-icon-animation {
  0% {
    transform: scale(1);
  }
  25% {
    transform: scale(1.4);
  }
  100% {
    transform: scale(1);
  }
}

.status span {
  font-size: 1.7em;
  animation: 0.5s ease-in-out status-text-animation;
}

@keyframes status-text-animation {
  0% {
    opacity: 0;
    transform: translateX(-20px);
  }
  100% {
    opacity: 100%;
    transform: translateX(0);
  }
}

</style>
