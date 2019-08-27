<template>
    <v-app>
        
<v-layout>
    <v-img
      src="../assets/earnmiles.jpg"
      aspect-ratio="1"
      class="grey lighten-2"
      max-width=""
      max-height="300"
    ></v-img> 
  </v-layout> 

  <!--==================Main Body===================================-->
<br>
<ul><p class="text-md-center display-4">Earn Miles</p></ul>
<ul><h2 class="text-md-center title indigo--text font-weight-medium">It’s easy to quickly accumulate miles.</h2></ul>
<br><br>
<hr class="my-2">
<ul><h2 class="title font-weight-regular">There are many ways to earn KrisFlyer miles. Fly with us or with our partner airlines and you can earn tier bonus on top of the actual miles flown.</h2></ul>
<br>
<ul><h2 class="title font-weight-regular">Our partners include all those in the world’s largest airline network, Star Alliance, and Star Alliance Connecting Partners. As well as Scoot, Alaska Airlines, JetBlue, Virgin Atlantic, Virgin Australia and Vistara.</h2></ul>
<br>
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
    <v-img
      class="white--text"
      height="200px"
      src="../assets/Krysmiles2.jpg"
    >
      <v-card-title class="align-end fill-height">Earn when you fly</v-card-title>
    </v-img>
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
    <v-img
      class="white--text"
      height="200px"
      src="../assets/earnontheground.jpg"
    >
      <v-card-title class="align-end fill-height">Earn on the ground</v-card-title>
    </v-img>
  </v-card>
</v-hover>  
</div>
</div>

<div class="col-sm">

<v-hover v-slot:default="{ hover }">

    <v-card
    :elevation="hover ? 12 : 2"
    class="mx-auto"
    max-width="400"
  >
    <v-img
      class="white--text"
      height="200px"
      src="../assets/earnwhenyoushop3.jpg"
    >
      <v-card-title class="align-end fill-height">Earn when you shop</v-card-title>
    </v-img>
  </v-card> 
</v-hover>
</div>
</div>








    </v-app>
</template>






