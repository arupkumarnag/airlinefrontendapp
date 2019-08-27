<template>
    <v-app>
        
<v-layout>
    <v-img
      src="../assets/businesssingapore.jpg"
      aspect-ratio="1"
      class="grey lighten-2"
      max-width=""
      max-height="300"
    ></v-img> 
  </v-layout> 

  <!--==================Main Body===================================-->
<br><br>
<ul><p class="text-md-center display-4">Travel Programme</p></ul>
<ul><h2 class="text-md-center title indigo--text font-weight-medium">Our network empowers yours</h2></ul>
<br>
<hr class="my-2">
<br>
<ul><h2 class="title font-weight-regular">When it comes to the business of travelling for work, it's more than just a matter of getting from here to there. Our worldwide hubs ensure that you'll enjoy hassle-free connections to over 130 destinations in 30 countries, while our suite of travel management tools give you better control over your bottom line.</h2></ul>
<br>
<ul><h2 class="title font-weight-regular">So whether you're looking to organise a global conference for tens of thousands, or simply to get your team together for a brainstorm, your network can count on ours.</h2></ul>
<br>

<div class="container">
  <div class="row">
    <div class="col-sm">

<v-hover v-slot:default="{ hover }">

    <v-card
    :elevation="hover ? 12 : 2"
    class="mx-auto"
    max-width="400"
  >
    <router-link to="/book"><v-img
      class="indigo--text"
      height="200px"
      src="../assets/book400.jpg"
    >
      <v-card-title class="align-end fill-height">Book Now</v-card-title>
    </v-img></router-link>
  </v-card> 
</v-hover>
</div>

<div class="col-sm">
  <v-hover v-slot:default="{ hover }">
   <v-card
   :elevation="hover ? 12 : 2"
    class="mx-auto"
    max-width="400"
  >
    <router-link to="/privileges"><v-img
      class="white--text"
      height="200px"
      src="../assets/privilages.jpg"
    >
      <v-card-title class="align-end fill-height">Privileges</v-card-title>
    </v-img></router-link>
  </v-card>
  </v-hover> 
</div>
  </div>
</div>

<br><br><br><br>

<hr class="my-2">



    </v-app>
</template>






