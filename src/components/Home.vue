<template>
<v-app>
    <v-layout  justify-center>
    <v-img
      src="../assets/dreams.jpg"
      aspect-ratio="1"
      class="grey lighten-2"
      max-width=""
      max-height="300"
    ></v-img>
  </v-layout>


<!----------------------------------------------------> 
<br>

<v-card
    max-width="600"
    class="mx-auto"
  >
   <div align="center">
  <router-link to="/book"><v-btn class="indigo--text font-weight-bold">Make a Booking</v-btn></router-link>
  <router-link to="/managebooking"><v-btn class="indigo--text font-weight-bold">Manage Booking</v-btn></router-link>
  <router-link to="/webcheckin"><v-btn class="indigo--text font-weight-bold">Web Ckeckin</v-btn></router-link>
  </div>
  </v-card>

<br><br>
<p class="text-md-center display-3">Hot Destinations Trending in Kolkata Now !</p>
  <hr class="my-2">
<!---============================================================-->  
<br><br>

<div class="container">
  <div class="row">
    <div class="col-sm">
    <v-hover v-slot:default="{ hover }">
    <v-card
    :elevation="hover ? 12 : 2"
    class="mx-auto"
    max-width="350"
  >
  <router-link to="/book"><v-img
    class="white--text"
    height="300px"
    src="../assets/Bali1.jpg"
     >
      <v-card-title class="align-end fill-height">Denpasar Bali, Indonesia</v-card-title>
    </v-img></router-link>
    </v-card> 
    </v-hover>     
</div>

<div class="col-sm">
    <v-hover v-slot:default="{ hover }">
    <v-card
    :elevation="hover ? 12 : 2"
    class="mx-auto"
    max-width="350"
  >
  <router-link to="/book"><v-img
    class="white--text"
    height="300px"
    src="../assets/Macau1.jpg"
     >
      <v-card-title class="align-end fill-height">Macau SAR</v-card-title>
    </v-img></router-link>
    </v-card> 
    </v-hover>    
</div>

<div class="col-sm">
    <v-hover v-slot:default="{ hover }">
    <v-card
    :elevation="hover ? 12 : 2"
    class="mx-auto"
    max-width="350"
  >
  <router-link to="/book"><v-img
    class="white--text"
    height="300px"
    src="../assets/HK1.jpg"
     >
      <v-card-title class="align-end fill-height">Hong Kong SAR</v-card-title>
    </v-img></router-link>
    </v-card> 
    </v-hover>      
</div>
<!--=============================-->
<div class="container">
  <div class="row">
    <div class="col-sm">
      <v-hover v-slot:default="{ hover }">
    <v-card
    :elevation="hover ? 12 : 2"
    class="mx-auto"
    max-width="350"
  >
  <router-link to="/book"><v-img
    class="white--text"
    height="300px"
    src="../assets/Singapore1.jpg"
     >
      <v-card-title class="align-end fill-height">Singapore</v-card-title>
    </v-img></router-link>
    </v-card> 
    </v-hover>
</div>

<div class="col-sm">
    <v-hover v-slot:default="{ hover }">
    <v-card
    :elevation="hover ? 12 : 2"
    class="mx-auto"
    max-width="350"
  >
  <router-link to="/book"><v-img
    class="white--text"
    height="300px"
    src="../assets/Malaysia1.jpg"
     >
      <v-card-title class="align-end fill-height">Kuala Lumpur, Malaysia</v-card-title>
    </v-img></router-link>
    </v-card> 
    </v-hover>
</div>

<div class="col-sm">
    <v-hover v-slot:default="{ hover }">
    <v-card
    :elevation="hover ? 12 : 2"
    class="mx-auto"
    max-width="350"
  >
  <router-link to="/book"><v-img
    class="white--text"
    height="300px"
    src="../assets/Taiwan1.jpg"
     >
      <v-card-title class="align-end fill-height">New Taipei City, Taiwan</v-card-title>
    </v-img></router-link>
    </v-card> 
    </v-hover>
</div>
</div>
</div>
</div>
</div>  
<br>

</v-app>
</template>