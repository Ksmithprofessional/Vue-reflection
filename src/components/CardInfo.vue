<script setup>

  import {useRoute} from 'vue-router'
  import {ref} from 'vue'

  let currentRoute = useRoute().name;
  // console.log(currentRoute)

  let url = `https://acnhapi.com/v1a/` + currentRoute;

  const res = await fetch(url)
  let data = await res.json()

  let species = [];

  data.forEach(info => {
    // console.log(info.species);
    species.push(info.species);
  });
  let speciesSet = new Set(species);
  // console.log(speciesSet);


  let rarity = [];
if (currentRoute === 'fish' || currentRoute === 'bugs') {


  data.forEach(info => {
    // console.log(info.availability["rarity"]);
    rarity.push(info.availability["rarity"]);
  });
}

  let raritySet = new Set(rarity);
  // console.log(raritySet);




  // let filter = (b) => {

  //   let filtered = b;
  //   console.log(filtered);

  //   let filteredData = data.filter(data => data.species === filtered);
  //   console.log(filteredData);
  // }

  let filter = ref('');

  let showInfo = (a) => {

    let info = a;
    //console.log(filter)

    if(currentRoute === "villagers") {

      document.querySelector('.info').innerHTML =
      `<img src="` + info.image_uri + `" alt="` + info.name["name-USen"] + ` icon" style="width:100%">
      <h2 style="text-align: center;"> `+ info.name["name-USen"] + `</h2>
      <p> Species: ` + info.species + `</p>
      <p> Gender: ` + info.gender + `</p>
      <p> Birthday: ` + info.birthday + `</p>
      <p> Personality: ` + info.personality + `</p>
      <p> Hobby: ` + info.hobby + `</p>
      <p> Saying: ` + info.saying + `</p>
      <p> Catch-phrase: ` + info["catch-phrase"] + `</p>
      `
    } else if(currentRoute === "fish" || currentRoute === "bugs") {

      // console.log(info.availability["month-array-northern"].toString().replaceAll(',', ', '));
      

      document.querySelector('.info').innerHTML =
      `<img src="` + info.image_uri + `" alt="` + info.name["name-USen"] + ` icon" style="max-width:100%;">
      <h2 style="text-align: center;"> `+ info.name["name-USen"] + `</h2>
      <p>Months available: </p>
      <p> North: ` + info.availability["month-array-northern"].toString().replaceAll(',', ', ')  + `</p>
      <p> South: ` + info.availability["month-array-southern"].toString().replaceAll(',', ', ') + `</p>
      <p> Time: ` + info.availability["time-array"].toString().replaceAll(',', ', ') + `</p>
      <p> Location: ` + info.availability["location"] + `</p>
      <p> Rarity: ` + info.availability["rarity"] + `</p>
      <p> Price: ` + info.price + ` bells</p>
      <p> Catch-phrase: ` + info["catch-phrase"] + `</p>
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

  //refs can't be updated normally, you have to update ref.value for it to work, hence filter.value works
  //but filter wouldn't
  let updateFilter = (e) => {

    filter.value = e.target.value;
    //console.log(filter)
  }

  // console.log(updateFilter(ref('Anteater')))

</script>

<template>

  <select class="sort" v-on:change="updateFilter($event)">

    <option value="" style="position:unset;">All</option>
    <option v-for= "info in speciesSet" style="position:unset;" v-if="currentRoute === 'villagers'">{{info}}</option>
    <option v-for= "info in raritySet" style="position:unset;" v-if="currentRoute === 'fish' || currentRoute === 'bugs'">{{info}}</option>
  </select>

  <div class="card" v-if="currentRoute === 'villagers'" v-for="info in data.filter(data => data.species === filter)">
    <img v-bind:src=" info.icon_uri ">
    <h3>{{ info.name["name-USen"] }}</h3>
    <button @click="showInfo(info)">More info</button>
  </div>

  <div class="card" v-if="filter === ''" v-for="info in data">

    <img v-if="currentRoute === 'fish' || currentRoute === 'bugs' || currentRoute === 'villagers'" v-bind:src=" info.icon_uri ">
    <img v-if="currentRoute === 'fossils'" v-bind:src=" info.image_uri ">
    <h3>{{ info.name["name-USen"] }}</h3>
    <button v-if="currentRoute === 'fish' || currentRoute === 'bugs' || currentRoute === 'villagers'" @click="showInfo(info)">More info</button>
    <button v-if="currentRoute === 'fossils'" @click="showInfo(info)">More info</button>
  </div>

  <div class="card" v-if="currentRoute === 'fish' || currentRoute === 'bugs'" v-for="info in data.filter(data => data.availability['rarity'] === filter)">
    <img v-bind:src=" info.icon_uri ">
    <h3>{{ info.name["name-USen"] }}</h3>
    <button @click="showInfo(info)">More info</button>
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

@media (min-width: 730px) {
  .sort {

    grid-column-start:1;
    grid-column-end:3;
  }
}

@media (min-width: 1260px) {
  .sort {

    grid-column-start:1;
    grid-column-end:4;
  }
}
</style>
