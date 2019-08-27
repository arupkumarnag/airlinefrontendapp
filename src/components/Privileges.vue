<template>
    <v-app>
        
<v-layout>
    <v-img
      src="../assets/privilages.jpg"
      aspect-ratio="1"
      class="grey lighten-2"
      max-width=""
      max-height="350"
    ></v-img> 
  </v-layout> 

  <!--==================Main Body===================================-->
<br><br>
<ul><p class="text-md-center indigo--text display-4">Privileges</p></ul>
<br>
<ul><p class="text-md-center indigo--text font-weight-light display-2">Make yourself at home, in ours.</p></ul>
<ul><p class="text-md-left font-weight-regular title">All of our flights go home to Kolkata, India, where we stop to rest and refuel. When you stopover, we want you to relax, Get comfortable and have a great time. That’s why we’ve prepared a host of privileges for you to enjoy – whether you’re staying for three hours, or thirty days.</p></ul>
<br>
<hr class="my-2">
<br>
<!---===============Cards==============================-->

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
      src="../assets/boardingpassprivilages.jpg"
    >
      <v-card-title class="align-end fill-height">Boarding Pass Privileges</v-card-title>
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
      src="../assets/freetour.jpg"
    >
      <v-card-title class="align-end fill-height">Free Fun Tours</v-card-title>
    </v-img>    
  </v-card>
</v-hover>  
</div>
</div>
</div>

<!--===============Group 2=================-->

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
      src="../assets/transitprivilages.jpg"
    >
      <v-card-title class="align-end fill-height">Transit Privileges</v-card-title>
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
      src="../assets/travelinsurance.jpg"
    >
      <v-card-title class="align-end fill-height">Travel Insurance</v-card-title>
    </v-img>
  </v-card>
  </v-hover>
</div>
</div>
</div>



    </v-app>
</template>






