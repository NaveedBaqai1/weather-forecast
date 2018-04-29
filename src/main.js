import Vue from "vue";
import App from "./App";
import store from './store/index';
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import * as VueGoogleMaps from "vue2-google-maps";
import Carousel3d from 'vue-carousel-3d';
import VueSkycons from 'vue-skycons';
import VueMoment from 'vue-moment';
import moment from 'moment-timezone';

Vue.use(VueMoment, {
    moment,
});

Vue.use(VueSkycons, { color: 'orange' });

Vue.use(require('vue-moment'));

Vue.use(Carousel3d);

Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyBnThz8BgYT3hQhG17uzOgx8KLkUzq52f0",
    libraries: "places" //necessary for places input
  }
});

new Vue({
  el: "#app",
  components: { App },
  store,
  template: "<App/>"
});
