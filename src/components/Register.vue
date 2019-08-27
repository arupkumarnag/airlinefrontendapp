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

<div class="jumbotron">       

<h1 class="display-3">Sign up and take off.</h1>
<br>
<p class="text regular text-dark">Creating an account saves you time when booking a flight and if you become a KrisFlyer member, you'll also enjoy exclusive perks and privileges. It only takes a minute.</p>

<p class="text regular text-dark">As a registered customer, you will be the first to know about the deals and promotions on Flyby Airline Flights.</p>

<!--<ul><h3 class="text-md-left display-3">Sign up and take off.</h3></ul>
<br>
<ul><h2 class="title indigo--text font-weight-light">Creating an account saves you time when booking a flight and if you become a KrisFlyer member, you'll also enjoy exclusive perks and privileges. It only takes a minute. 
</h2></ul>

<ul><h2 class="title indigo--text font-weight-light">As a registered customer, you will be the first to know about the deals and promotions on Flyby Airline Flights.</h2></ul>-->
<br> 

<v-divider></v-divider>

<!--=======================================================================-->    

<div class="row d-flex justify-content-center">
  <div class="container" style="width: 35rem;">

    <form>
      <div class="form-row">

        <div class="form-group col-md-6">
          <label for="inputEmail4">First Name (as in passport)</label>
            <input type="text" class="form-control" id="inputEmail4" placeholder="Firstname">

         </div>
          <div class="form-group col-md-6">
            <label for="inputPassword4">Last Name (as in passport)</label>
            <input type="text" class="form-control" id="inputPassword4" placeholder="Last name">
          </div>

        <div class="form-group col-md-6">
          <label for="inputEmail4">Email</label>
          <input type="email" class="form-control" id="inputEmail4" placeholder="Email">
    <!--<small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>-->

        </div>
        <div class="form-group col-md-6">
          <label for="inputPassword4">Set Password</label>
          <input type="password" class="form-control" id="inputPassword4" placeholder="Password">
        </div>
      </div>
      <div class="form-group">
        <label for="inputAddress">Address line 1</label>
        <input type="text" class="form-control" id="inputAddress" placeholder="">
      </div>
      <div class="form-group">
        <label for="inputAddress2">Address line 2</label>
        <input type="text" class="form-control" id="inputAddress2" placeholder="">
      </div>
      <div class="form-group">
        <label for="inputAddress2">Address line 3</label>
        <input type="text" class="form-control" id="inputAddress2" placeholder="">
      </div>
      <div class="form-row">
        <div class="form-group col-md-6">
          <label for="inputCity">State/Province/City</label>
          <input type="text" class="form-control" id="inputCity">
        </div>
        <div class="form-group col-md-4">
          <label for="inputState">Country</label>
          <select id="inputState" class="form-control">
            <option selected>Select</option>
            <option>India</option>
            <option>Singapore</option>
            <option>Taiwan</option>
            <option>Japan</option>
            <option>China</option>
            <option>Vietnam</option>
            <option>Hong Kong SAR</option>
            <option>Indonesia</option>
            <option>Myanmar</option>
            <option>Thailand</option>
            <option>Phillipines</option>
            <option>South Korea</option>
            <option>Cambodia</option>
            <option>Laos</option>
            <option>Malaysia</option>
            <option>Brunei</option>
            <option>North Korea</option>
            <option>Australia</option>
            <option>New Zealand</option>
            <option>Russia</option>
            <option>Macau SAR</option>
            <option>USA</option>
            <option>Canada</option>
            <option>Ireland</option>
            <option>United Kingdom</option>
            <option>Germany</option>
            <option>Sweden</option>
            <option>Slovakia</option>
            <option>France</option>
            <option>Italy</option>
            <option>Spain</option>
            <option>Greece</option>
            <option>Netherlands</option>
            <option>Austria</option>
            <option>Poland</option>
            <option>Belgium</option>
            <option>Denmark</option>
            <option>Romania</option>
            <option>Iceland</option>
            <option>Greenland</option>
            <option>Malta</option>
            <option>Hungary</option>
            <option>Slovenia</option>
            <option>Croatia</option>
            <option>Portugal</option>
            <option>Bulgaria</option>
            <option>Luxembourg</option>
            <option>Albania</option>
            <option>Serbia</option>
            <option>Estonia</option>
            <option>Belarus</option>
            <option>Latvia</option>
            <option>Monaco</option>
            <option>Lithuania</option>
            <option>Kosovo</option>
            <option>Moldova</option>
            <option>Ukrain</option>
            <option>South Africa</option>
            <option>Brazil</option>
            <option>Peru</option>
            <option>Argentina</option>
            <option>Chile</option>
            <option>Bolivia</option>
            <option>Uruguay</option>
            <option>Colombia</option>
            <option>Venezuela</option>
            <option>Puerto Rico</option>
            <option>Egypt</option>
            <option>Kenya</option>
            <option>Rwanda</option>
            <option>Mexico</option>
            <option>Pananma</option>
            <option>UAE</option>
            <option>Afganistan</option>
            <option>Israel</option>
            <option>Srilanka</option>
            <option>Turkey</option>


          </select>
        </div>
        <div class="form-group col-md-2">
          <label for="inputZip">Pin/Zip</label>
          <input type="text" class="form-control" id="inputZip">
        </div>
      </div>
      <div class="form-group">
        <div class="form-check">
          <input class="form-check-input" type="checkbox" id="gridCheck">
          <label class="form-check-label" for="gridCheck">
            I agree to Terms and Conditions.
          </label>
        </div>
      </div>

      <div class="form-group">
        <div class="form-check">
          <input class="form-check-input" type="checkbox" id="gridCheck">
          <label class="form-check-label" for="gridCheck">
            I want to receive news and promotions by email.
          </label>
        </div>
      </div>

      <button type="submit" class="btn btn-primary">Sign up</button>
    </form>

  </div>
</div>
</div>

  </v-app>
</template>




