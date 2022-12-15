<script setup>

import {useRoute} from 'vue-router'

  let currentRoute = useRoute().name;
  // console.log(currentRoute)

  let url = `http://acnhapi.com/v1a/` + currentRoute;

  const res = await fetch(url)
  const data = await res.json()

  // console.log(data[0]);

  let showInfo = (a) => {

    let info = a;

    if(currentRoute === "villagers") {

      document.querySelector('.info').innerHTML =
      `<img src="` + data[info -1].image_uri + `" alt="` + data[info -1].name["name-USen"] + ` icon" style="width:100%">
      <h2 style="text-align: center;"> `+ data[info -1].name["name-USen"] + `</h2>
      <p> Species: ` + data[info -1].species + `</p>
      <p> Gender: ` + data[info -1].gender + `</p>
      <p> Birthday: ` + data[info -1].birthday + `</p>
      <p> Personality: ` + data[info -1].personality + `</p>
      <p> Hobby: ` + data[info -1].hobby + `</p>
      <p> Saying: ` + data[info -1].saying + `</p>
      <p> Catch-phrase: ` + data[info -1]["catch-phrase"] + `</p>
      `
    } else if(currentRoute === "fish" || currentRoute === "bugs") {

      console.log(data[info -1].availability["month-array-northern"].toString().replaceAll(',', ', '));
      

      document.querySelector('.info').innerHTML =
      `<img src="` + data[info -1].image_uri + `" alt="` + data[info -1].name["name-USen"] + ` icon" style="max-width:100%;">
      <h2 style="text-align: center;"> `+ data[info -1].name["name-USen"] + `</h2>
      <p>Months available: </p>
      <p> North: ` + data[info -1].availability["month-array-northern"].toString().replaceAll(',', ', ')  + `</p>
      <p> South: ` + data[info -1].availability["month-array-southern"].toString().replaceAll(',', ', ') + `</p>
      <p> Time: ` + data[info -1].availability["time-array"].toString().replaceAll(',', ', ') + `</p>
      <p> Location: ` + data[info -1].availability["location"] + `</p>
      <p> Rarity: ` + data[info -1].availability["rarity"] + `</p>
      <p> Price: ` + data[info -1].price + ` bells</p>
      <p> Catch-phrase: ` + data[info -1]["catch-phrase"] + `</p>
      `
    } else if(currentRoute === "fossils") {

      document.querySelector('.info').innerHTML =
      `<img src="` + info.image_uri + `" alt="` + info.name["name-USen"] + ` icon" class="info-img" style="margin: 0 27%; width: 45%; height: 45%;">
      <h2 style="text-align: center;"> `+ info.name["name-USen"] + `</h2>
      <p> Price: ` + info.price + `</p>
      <p> Part of: ` + info["part-of"] + `</p>
      <p> Museum quote: ` + info["museum-phrase"] + `</p>
      `

    }

  }

</script>

<template>
  <div class="card" v-for="info in data">

    <img v-if="currentRoute === 'fish' || currentRoute === 'bugs' || currentRoute === 'villagers'" v-bind:src=" info.icon_uri ">
    <img v-if="currentRoute === 'fossils'" v-bind:src=" info.image_uri ">
    <h3>{{ info.name["name-USen"] }}</h3>
    <button v-if="currentRoute === 'fish' || currentRoute === 'bugs' || currentRoute === 'villagers'" @click="showInfo(info.id)">More info</button>
    <button v-if="currentRoute === 'fossils'" @click="showInfo(info)">More info</button>
  </div>
</template>

<style scoped>

.card {

  margin: 5px;
  border: 2px solid #0b2840;
  text-align: center;
  border-radius: 5%;
  background-color: #385e72;
  color: white;
  height: 220px;
}

button {

  position: absolute;
  width: 60%;
  bottom: 0px;
  left: 20%;
  right: 20%;
}
</style>