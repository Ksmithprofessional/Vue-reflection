<script setup>
import Card from "@/components/CardInfo.vue";

</script>

<template>

  <div class="card-container">

    <div class="cards">

      <Suspense>
        <Card></Card>
      </Suspense>

    </div>

    <div class="info-container">

      <div class="info">

      </div>
    </div>

    <div class="top">
      <a href="#"><img src="../../public/animal-crossing-load.png"></a>
    </div>

  </div>
</template>

<style scoped>

.cards {

display: grid;
grid-template-columns: repeat(1, 1fr);
max-width: 30vw;
}

.card-container {

display: grid;
grid-template-columns: 1fr 1fr;
}

.info-container {

width: 67vw;
}

.info {

position: fixed;
max-width: 62vw;
height: fit-content;
/* overflow-y:scroll; */
border: 3px solid #0b2840;
border-radius: 2%;
background-color: #385e72;
margin: 0 auto;
width: 100%;
padding: 15px;
/* left: 142px; */
top: 150px;
color: white;
font-size: 1.1rem;
}

.top {

  width: 80px;
  height: 74px;
  border: 1px solid white;
  border-radius: 50%;
  overflow: hidden;
  position: fixed;
  bottom: 0px;
  right: 10px;
}

.top img {
  width:100%;
}

@media (min-width: 730px) {

.cards {

  grid-template-columns: repeat(2, 1fr);
}

.info-container {

  width:57vw;
}

.info {

  max-width:47vw;
}
}

@media (min-width: 1024px) {

  .info {

  max-width:455px;
  max-height: 750px;
  }

  .card-container {

    width: 90vw;
    margin: 0 auto;
  }

  .info-container {

    width: 52vw;
  }
}

@media (min-width: 1260px) {

.card-container {

  width:80vw;
  margin: 0 auto;
}

.info-container {

width: 40vw;
}

.cards {

  grid-template-columns: repeat(3, 1fr);
}
}
</style>
