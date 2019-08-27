 <template>
    <v-app>

<div class="jumbotron">
<div class="display-3 indigo--text">Enter your booking details to checkin online</div>
<v-divider></v-divider>
<br>
<div style="text-align: center">
<h3 class="display-5 text-info">Enter your booking details here</h3>
</div>
<div class="row d-flex justify-content-center">
  <div class="container" style="width: 50rem;">

<form>
    <div class="form-row">
        <div class="form-group col-md-6">
        <label for="inputPassword4"></label>
        <input type="text" class="form-control" id="inputPassword4" placeholder="Booking reference number">
        </div>

    <div class="form-group col-md-6">
        <label for="inputEmail4"></label>
        <input type="email" class="form-control" id="inputEmail4" placeholder="Enter your email">
    </div>  
    <div class="container">
        <div class="row">
            <div class="col text-center">
            <button type="button" class="btn btn-outline-primary">Checkin</button>
    </div>
    </div>
    </div>     
</div>
</form>
</div>
</div>
</div>

</v-app>
</template>