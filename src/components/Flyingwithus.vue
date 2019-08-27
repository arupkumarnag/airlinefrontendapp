<template>
    <v-app>
<v-layout>
  <v-hover v-slot:default="{ hover }">
    <v-img
      src="../assets/flyingwithus2.jpg"
      aspect-ratio="1"
      class="grey lighten-2"
      max-width=""
      max-height="300"
    ></v-img>
  </v-hover>  
  </v-layout> 
  
  <v-content>
 <v-card-text>
        
  <br><br>

<p class="text-md-center display-3">Making every journey personal</p>
<br>

<div class="text-center">
    <h2 class="indigo--text headline">When everything is designed around you, flying becomes a personal experience.</h2>
</div>

<br>

<p class="text-md-center title">The luxurious world of Suites offers you the ideal space for celebration, theprivacy of Business Class allows you to immerse yourself in work or leisure. Across every cabin class, experience how intuitive service brings each encounter to life.</p>
<br>
<hr class="my-2">
<br>
<p class="text-md-center display-3">The Flyby Airlines fleet</p>

<br>

<br>
<div class="text-center">
  <h3 class="text-md-center title">Explore the world with us, and experience a journey unlike any other on some of the most comfortable and spacious aircraft in the world. Wherever your travels may take you with Flyby Airlines, you’ll be flying on one of the most modern aircraft and fuel-efficient fleets in the skies.</h3>
</div>
<br>
  <hr class="my-2">


<br>

<div class="text-center">
  <h3 class="text-md-center title"> We invite you to step onboard and luxuriate in our warm and impeccable service, and discover a journey that’s every bit as delightful as the destination itself.</h3>
</div>

</v-card-text>
</v-content>


<br>
<div class="container">
  <div class="row">
    <div class="col-sm">
    <v-hover v-slot:default="{ hover }">
    <v-card
    :elevation="hover ? 12 : 2"
    class="mx-auto"
    max-width="390"
  >
  <v-img
    class="white--text"
    height="225px"
    src="../assets/Boeing-777-300.jpg" 
     >
      <v-card-title class="align-end fill-height">Boeing 777-300</v-card-title>
    </v-img>
    </v-card> 
    </v-hover>     
</div>

<div class="col-sm">
    <v-hover v-slot:default="{ hover }">
    <v-card
    :elevation="hover ? 12 : 2"
    class="mx-auto"
    max-width="390"
  >
  <v-img
    class="white--text"
    height="225px"
    src="../assets/Boeing-787-10-edited.jpg"
     >
      <v-card-title class="align-end fill-height">Boeing 787-10</v-card-title>
    </v-img>
    </v-card> 
    </v-hover>    
</div>

<div class="col-sm">
    <v-hover v-slot:default="{ hover }">
    <v-card
    :elevation="hover ? 12 : 2"
    class="mx-auto"
    max-width="390"
  >
  <v-img
    class="white--text"
    height="225px"
    src="../assets/Boeing-787-Dreamliner-edited.jpg"
     >
      <v-card-title class="align-end fill-height">Boeing-787 Dreamliner</v-card-title>
    </v-img>
    </v-card> 
    </v-hover>  
    <br><br>   
</div>

<!--=============Group 2================-->

<div class="container">
  <div class="row">
    <div class="col-sm">
      <v-hover v-slot:default="{ hover }">
    <v-card
    :elevation="hover ? 12 : 2"
    class="mx-auto"
    max-width="390"
  >
  <v-img
    class="white--text"
    height="225px"
    src="../assets/Boeing-747---Queen.jpg"
     >
      <v-card-title class="align-end fill-height">Boeing 747</v-card-title>
    </v-img>
    </v-card> 
    </v-hover>
</div>

<div class="col-sm">
    <v-hover v-slot:default="{ hover }">
    <v-card
    :elevation="hover ? 12 : 2"
    class="mx-auto"
    max-width="390"
  >
  <v-img
    class="white--text"
    height="225px"
    src="../assets/Boeing-777X.jpg"
     >
      <v-card-title class="align-end fill-height">Boeing 777-X</v-card-title>
    </v-img>
    </v-card> 
    </v-hover>
</div>

<div class="col-sm">
    <v-hover v-slot:default="{ hover }">
    <v-card
    :elevation="hover ? 12 : 2"
    class="mx-auto"
    max-width="390"
  >
  <v-img
    class="white--text"
    height="225px"
    src="../assets/Airbus-A320NEO-edited.jpg"
     >
      <v-card-title class="align-end fill-height">Airbus-A320 NEO</v-card-title>
    </v-img>
    </v-card> 
    </v-hover>
</div>
</div>
</div>
</div>
</div>  

</v-app>
</template>
