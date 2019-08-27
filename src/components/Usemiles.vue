<template>
    <v-app>
        
<v-layout>
    <v-img
      src="../assets/usemiles.jpg"
      aspect-ratio="1"
      class="grey lighten-2"
      max-width=""
      max-height="300"
    ></v-img> 
  </v-layout> 

  <!--==================Main Body===================================-->
<br><br>
<ul><p class="text-md-center display-4">Use Miles</p></ul>
<ul><h2 class="text-md-center title indigo--text font-weight-medium">The best things in the sky are yours to enjoy</h2></ul>
<br>
<hr class="my-2">
<br>
<ul><h2 class="title font-weight-regular">With your KrisFlyer miles, it’s easy to enjoy the best things in the sky. Such as award tickets to over 50 destinations Or upgrades to Premium Economy Class, Business Class, and remember, you can use your miles like cash, to pay for your next flight on flybyair.com.</h2></ul>
<br>
<ul><h2 class="title font-weight-regular">So now if anyone asks your favourite way to fly, tell them it’s with your KrisFlyer miles.</h2></ul>
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
</div>
</div>
<br><br><br><br>

<hr class="my-2">



    </v-app>
</template>






