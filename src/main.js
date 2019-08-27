import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueRouter from 'vue-router';

import Home from './components/Home.vue';
import Login from './components/Login.vue';
import Register from './components/Register.vue';
import Baggage from './components/Baggage.vue';
import Checkin from './components/Checkin.vue';
import Flyingwithus from './components/Flyingwithus.vue';
import Travelinfo from './components/Travelinfo.vue';
import Krysflyer from './components/Krysflyer.vue';
import Managebooking from './components/Managebooking.vue';
import Requests from './components/Requests.vue';
import Signup from './components/Signup.vue';
import Unaccompaniedminor from './components/Unaccompaniedminor.vue';
import Usemiles from './components/Usemiles.vue';
import Earnmiles from './components/Earnmiles.vue';
import Visaimmigration from './components/Visaimmigration.vue';
import Webcheckin from './components/Webcheckin.vue';
import Booking from './components/Booking.vue';
import Forbusiness from './components/Forbusiness.vue';
import Ucminors from './components/Ucminors.vue';
import Privileges from './components/Privileges.vue';




Vue.config.productionTip = false 

Vue.use(VueRouter)

const routes= [
  { path: '/', component: Home },
  { path: '/home', component: Home },
  { path: '/login', component: Login },
  { path: '/register', component: Register },
  { path: '/baggage', component: Baggage },
  { path: '/checkin', component: Checkin },
  { path: '/flyingwithus', component: Flyingwithus },
  { path: '/travelinfo', component: Travelinfo },
  { path: '/krysflyer', component: Krysflyer },
  { path: '/managebooking', component: Managebooking },
  { path: '/requests', component: Requests },
  { path: '/signup', component: Signup },
  { path: '/unaccompaniedminor', component: Unaccompaniedminor },
  { path: '/usemiles', component: Usemiles },
  { path: '/earnmiles', component: Earnmiles },
  { path: '/visaimmigration', component: Visaimmigration },
  { path: '/webcheckin', component: Webcheckin },
  { path: '/book', component: Booking },
  { path: '/forbusiness', component: Forbusiness },
  { path: '/unaccompaniedminors', component: Ucminors },
  { path: '/privileges', component: Privileges }
  
  
];

const router = new VueRouter({
  routes,
  mode: 'history'
});

new Vue({
  vuetify,
  render: h => h(App),
  router,
}).$mount('#app')
