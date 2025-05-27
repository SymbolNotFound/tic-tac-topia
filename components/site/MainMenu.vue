<template>
<nav><ul class="main-menu">

  <!-- TODO make these links/buttons -->
  <SiteMenuButton
    to="/metagame.config"
    >Join Room</SiteMenuButton>
  <SiteMenuButton
    v-if="auth.hasRole('creator')"
    to="/metagame.config"
    >Create Lobby</SiteMenuButton>
  <SiteMenuButton
    v-else
    >Login / Register</SiteMenuButton>
  <SiteMenuButton
    to="/rules/"
    >The Games</SiteMenuButton>
  <SiteMenuButton
    to="/about/"
    >About Site</SiteMenuButton>

</ul></nav>
</template>

<script setup lang="ts">
const auth = useAuthStatus()
</script>

<style>
.main-menu {
  display: flex;
  flex-direction: column;
  margin: auto;
}

.main-menu .li {
  size: 1.2;
}
</style>
