<template>
    <v-app>

 <v-layout  justify-center>
    <v-img
      src="../assets/Travelinfo.jpg"
      aspect-ratio="1"
      class="grey lighten-2"
      max-width=""
      max-height="300"
    ></v-img>
  </v-layout>

<!--========================================================================-->
<br>
<p class="text-md-center display-3">Travel Info</p>
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
    <router-link to="/checkin"><v-img
      class="white--text"
      height="200px"
      src="../assets/checkinsingapore.jpg"
    >
      <v-card-title class="align-end fill-height">Check-In</v-card-title>
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
    <router-link to="/baggage"><v-img
      class="white--text"
      height="200px"
      src="../assets/baggagesingapore.jpg"
    >
      <v-card-title class="align-end fill-height">Baggage</v-card-title>
    </v-img></router-link>
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
    <router-link to="/requests"><v-img
      class="white--text"
      height="200px"
      src="../assets/requestssingapore.jpg"
    >
      <v-card-title class="align-end fill-height">Requests</v-card-title>
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
    <router-link to="/visaimmigration"><v-img
      class="white--text"
      height="200px"
      src="../assets/visaandimmigration.jpg"
    >
      <v-card-title class="align-end fill-height">Visa and Immigration</v-card-title>
    </v-img></router-link>
  </v-card>
  </v-hover>
</div>
</div>
</div>

    </v-app>
</template>