<template>
  <v-app>
    
<v-layout>
  <v-hover v-slot:default="{ hover }">
    <v-img
      src="../assets/login-singapore.jpg"
      aspect-ratio="1"
      class="grey lighten-2"
      max-width=""
      max-height="350"
    ></v-img>
  </v-hover>  
  </v-layout> 

<br><br>

<ul><p class="text-md-center display-3">Earn easier, redeem faster, travel better</p></ul>

<hr class="my-2">
<br>
<!--=====================Login Form=====================================-->    


  
  
    
    <div class="row d-flex justify-content-center">
  <div class="container" style="width: 25rem;">

    <form>
      <div class="form-group">
        <label for="exampleInputEmail1">Email</label>
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">

      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
      </div>
      
      <div class="form-group form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1">
        <label class="form-check-label" for="exampleCheck1">Remember me</label>
      </div>
      <button type="submit" class="btn btn-primary">Login</button>
    </form>

  </div>
</div>  
      





<br><br><br> 

</v-app>
</template>


