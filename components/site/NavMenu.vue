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
