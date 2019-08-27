<template>
    <v-app>

 <v-layout  justify-center>
    <v-img
      src="../assets/Krysmiles2.jpg"
      aspect-ratio="1"
      class="grey lighten-2"
      max-width=""
      max-height="300"
    ></v-img>
  </v-layout>

<!--========================================================================-->
<br>
<p class="text-md-center indigo--text display-3">Earn easier, redeem faster, travel better</p>
<br>
<div class="text-center">
  <ul><h2 class="title font-weight-light"> Welcome to the frequent flyer programme of the Singapore Airlines Group that makes every experience miles better. With special deals, flying perks and exclusive partners offers, it has never been easier to make every experience a rewarding one.</h2></ul>
</div>
  <hr class="my-2">

<br>

<!--===============Group 1=================-->

<div class="container">
  <div class="row">
    <div class="col-sm">

<v-hover v-slot:default="{ hover }">

    <v-card
    :elevation="hover ? 12 : 2"
    class="mx-auto"
    max-width="400"
  >
    <router-link to="/earnmiles"><v-img
      class="white--text"
      height="200px"
      src="../assets/earnmiles.jpg"
    >
      <v-card-title class="align-end fill-height">Earn Miles</v-card-title>
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
    <router-link to="/usemiles"><v-img
      class="white--text"
      height="200px"
      src="../assets/usemiles.jpg"
    >
      <v-card-title class="align-end fill-height">Use Miles</v-card-title>
    </v-img></router-link>
    <!--<v-card-actions>
      <v-btn
        text
        color="blue"
      >
        <router-link to="/baggage">Click Here</router-link>
      </v-btn>
    </v-card-actions>-->
  </v-card>
</v-hover>  
</div>
</div>
</div>
<!--==============Group 2==============-->
<div class="container">
  <div class="row">
    <div class="col-sm">
    <v-hover v-slot:default="{ hover }"> 
    <v-card
     :elevation="hover ? 12 : 2"
      class="mx-auto"
      max-width="400"
  >
    <router-link to="/forbusiness"><v-img
      class="white--text"
      height="200px"
      src="../assets/businesssingapore.jpg"
    >
      <v-card-title class="align-end fill-height">For Business</v-card-title>
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

    </v-app>
</template>