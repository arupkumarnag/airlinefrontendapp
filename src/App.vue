<template>
<v-app>
<!--Top Navbar Starts-->  
<v-system-bar dark color="primary"
  flat
  height="80px"
  tile>
<router-link to="/home"><v-btn text>Home</v-btn></router-link>
<router-link to="/travelinfo"><v-btn text>Travel Info</v-btn></router-link>
<router-link to="/krysflyer"><v-btn text>Krysflyer</v-btn></router-link>
<router-link to="/flyingwithus"><v-btn text>Flying with us</v-btn></router-link>
<v-spacer></v-spacer>
<router-link to="/login"><v-btn text>Login</v-btn></router-link>
<router-link to="/register"><v-btn text>Register</v-btn></router-link>
</v-system-bar>
<!--Top Navbar ends--> 

<!--<v-layout  justify-center>
    <v-img
      src="../src/components/images/dreams.jpg"
      aspect-ratio="1"
      class="grey lighten-2"
      max-width=""
      max-height="400"
    ></v-img>
  </v-layout>-->


<main>
  <router-view></router-view>
</main>

<!--Footer Starts Here-->
<v-card height="150">
    <v-footer
      absolute
      class="font-weight-medium"
    >
      <v-flex
        text-center
        xs12
      >
      <strong>© 2019 Flyby Airlines. All Rights Reserved.</strong>
      </v-flex>
    </v-footer>
  </v-card>
<!--Footer Ends Here-->



</v-app> 
</template>




<script>

  



</script>
