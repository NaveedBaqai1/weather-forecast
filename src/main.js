import Vue from "vue"
import App from "./App"
import store from './store/index'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import * as VueGoogleMaps from "vue2-google-maps"
import Carousel3d from 'vue-carousel-3d'
import VueSkycons from 'vue-skycons'
import VueMoment from 'vue-moment'
import moment from 'moment-timezone'

Vue.use(VueMoment, {
    moment,
});
Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyD2y32RmCoqHUnnbnmT145qON3pkeK9_JY",
    libraries: "places" //necessary for places input
  }
});
Vue.use(VueSkycons, { color: 'orange' });
Vue.use(require('vue-moment'));
Vue.use(Carousel3d);

new Vue({
  el: "#app",
  components: { App },
  store,
  template: "<App/>"
});
