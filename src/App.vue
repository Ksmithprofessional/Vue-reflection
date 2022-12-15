<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <header>
    <h1>Animal crossing: New horizons Information!</h1>
  </header>

  <nav>
      <RouterLink to="/villagers">Villagers</RouterLink>
      <RouterLink to="/fish">Fish</RouterLink>
      <RouterLink to="/bugs">Bugs</RouterLink>
      <RouterLink to="/fossils">Fossils</RouterLink>
  </nav>

  <div class="background">
    <router-view />
  </div>

</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
  margin: 0 auto;
  text-align: center;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

.info-img {

width: 400px;
}

.background {

  background: url(../Nookipedia_-_Leaf_Background_Winter.jpg) border-box;
  /* background-size: cover; */
  background-attachment: fixed;
  width:100vw;
  /* height:100vh; */
}

.cards {

  display: grid;
  grid-template-columns: repeat(1, 1fr);
  max-width: 30vw;
}

.villager-container {

  display: grid;
  grid-template-columns: 1fr 1fr;
}

.info-container {

  width: 50vw;
}

.info {

  position: fixed;
  max-width: 500px;
}

nav {
  width: 100%;
  /* font-size: 14px; */
  text-align: center;
  margin-top: 1.5rem;
  padding-bottom: 10px;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    /* display: flex; */
    place-items: center;
    /* padding-right: calc(var(--section-gap) / 2); */
    width: 900px;
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    /* text-align: left; */
    font-size: 1.2rem;
    padding: 1rem 0;
    margin: 0.7rem auto 0;
    width: 900px;
  }
}

@media (min-width: 1280px) {
  header,
  nav {
    width: 1200px;
  }
}
</style>
