<template>
  <nav><ul id="nav-menu" class="primary-navigation flex">
    <site-nav-link
      slug="/"
      icon="🏠">
      Home
    </site-nav-link>
    <site-nav-link
      slug="/about/"
      icon="📖">
      About
    </site-nav-link>
  <!--
  <site-nav-link
    slug="/support"
    icon="🫶">
    Support
  </site-nav-link>
  -->
    <site-nav-link
      slug="/join"
      icon="🕹️">
      Play
    </site-nav-link>
  </ul></nav>
</template>

<script setup lang="ts">
</script>

<style>
.primary-navigation {
  list-style: none;
  position: fixed;
  padding-inline: 2rem;
  right: 0;

  /* background: hsl(0 0% 100% / .1); */
  backdrop-filter: blur(1rem);
}

.primary-navigation a {
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: bold;
}

.primary-navigation a > [aria-hidden="true"] {
  filter: grayscale(.875);
  margin-inline-end: .5em;
}

@media (max-width: 35em) {
  .primary-navigation {
    --gap: 2.5em;

    position: fixed;
    inset: 0 0 0 61.8%;
    flex-direction: column;
    padding: min(15vh, 3rem) 0; 
  }
}

</style>
