<template>
  <nav><ul id="nav-menu" class="primary-navigation flex">
    <SiteNavLink
      href="/"
      icon="🏠">
      Home
    </SiteNavLink>
    <SiteNavLink
      href="/about/"
      icon="📖">
      About
    </SiteNavLink>
    <SiteNavLink
      href="/support"
      icon="🫶">
      Support
    </SiteNavLink>
    <SiteNavLink
      href="/join"
      icon="🕹️">
      Play
    </SiteNavLink>
  </ul></nav>
</template>

<script setup lang="ts">
</script>

<style>
.primary-navigation {
  list-style: none;
  padding: 0;
  margin: 0;

  background: hsl(0 0% 100% / .1);
  backdrop-filter: blur(1rem);
}

.primary-navigation a {
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: bold;
}

.primary-navigation a > [aria-hidden="true"] {
  filter: grayscale(.7);
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
