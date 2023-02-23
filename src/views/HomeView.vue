<script setup>
import {onUnmounted} from 'vue'

onUnmounted(() => document.querySelector('.info').style = "display:none;")
</script>

<template>
  <main>
    <div class="card">

      <img src="../../public/pietro.png">
      <RouterLink to="/villagers"><button>Villagers</button></RouterLink>
    </div>

    <div class="card">

      <img src="../../public/sea-bass.png">
      <RouterLink to="/fish"><button>Fish</button></RouterLink>
    </div>

    <div class="card">

      <img src="../../public/tarantula.png">
      <RouterLink to="/bugs"><button>Bugs</button></RouterLink>
    </div>

    <div class="card">

      <img src="../../public/juramaia.png">
      <RouterLink to="/fossils"><button>Fossils</button></RouterLink>
    </div>
  </main>
  <div class="info"></div>
</template>

<style scoped>


main {

  /* height: 88vh;
  width: 75vw; */
  display: grid;
  margin:0 auto;
}

.card {

margin: 5px;
border: 2px solid #0b2840;
text-align: center;
border-radius: 5%;
background-color: #385e72;
color: white;
height: 260px;
width: 230px;
margin: 30px auto;
}

img {

  width: 90%;
  height: 80%;
}

button {

  width:90px;
  margin-top: 5px;
}

@media (min-width: 730px) {

main {

  grid-template-columns: repeat(2, 1fr);
  height: 89vh;
}

/* .card {

  margin-left: unset;
  margin-right: unset;
} */
}

@media (min-width: 1260px) {

main {

  width: 1249px;
  height: 87.5vh;
}
}
</style>
