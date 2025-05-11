<template>
  <nav>
    <ul id="nav-menu" class="primary-navigation flex">
      <li class="acive"> <!-- programmatically define the active bullet-->
        <a href="/">
          <span aria-hidden="true">🏠</span>Home
        </a>
      </li><li>
        <a href="/about/">
          <span aria-hidden="true">📖</span>About
        </a>
      <!--
      </li><li>
        <a href="/support">
          <span aria-hidden="true">🫶</span>Support
        </a>
      -->
      </li><li>
        <a href="/join">
          <span aria-hidden="true">🕹️</span>Play
        </a>
      </li>
    </ul>
  </nav>

  <slot />
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

.primary-navigation {
  list-style: none;
  padding: 0;
  margin: 0;

  background: hsl(0 0% 100% / .1);
  backdrop-filter: blur(1rem);
}

.primary-navigation a {
  text-decoration: none;
}

.primary-navigation a > [aria-hidden="true"] {
  filter: grayscale(.7);
  margin-inline-end: .5em;
}

@media (max-width: 35em) {
  .primary-navigation {
    --gap: 2em;

    position: fixed;
    inset: 0 0 0 20%;
    flex-direction: column;
    padding: min(20vh, 5rem) 2rem;
  }
}
</style>
