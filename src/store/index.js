import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    locationName: 'Edinburgh',
    locationLat: 55.953252,
    locationLng: -3.188266999999996,
    weatherData: null,
    isLoading: false,
    isSearchError: false,
    isWeatherServiceError: false
  },
  getters: {
    getLocationName: state => state.locationName,
    getLocationLat: state => state.locationLat,
    getLocationLng: state => state.locationLng,
    getWeatherData: state => state.weatherData,
    getLoadingStatus: state => state.isLoading,
    getSearchErrorStatus: state => state.isSearchError,
    getWeatherServiceErrorStatus: state => state.isWeatherServiceError
  },
  mutations: {
    setLocationName(state, value){
      state.locationName = value
    },
    setLocationLat(state, value){
      state.locationLat = value
    },
    setLocationLng(state, value){
      state.locationLng = value
    },
    setWeatherData(state, value){
      state.weatherData = value
    },
    setLoadingStatus(state, value){
      state.isLoading = value
    },
    setSearchErrorStatus(state, value){
      state.isSearchError = value
    },
    setWeatherServiceErrorStatus(state, value){
      state.isWeatherServiceError = value
    }
  },
	actions: {
    updateLocation(context, {locationName: locationName, locationLat: locationLat, locationLng: locationLng}){
      context.commit('setLocationName', locationName);
      context.commit('setLocationLat', locationLat);
      context.commit('setLocationLng', locationLng);
    },
    updateSearchStatus(context, value){
      context.commit('setSearchErrorStatus', value);
    },
    reqWeatherData(context){
      context.commit("setLoadingStatus", true);
      let URL = 'https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/a1d49c663e7af63a0de24a508e41157d/'+this.state.locationLat+','+this.state.locationLng+'';
      axios(URL, {
        method: 'GET',
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET',
          'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token',
        }
      }).then(response => {
        context.commit('setWeatherData', response.data);
        context.commit("setLoadingStatus", false);
        context.commit("setWeatherServiceErrorStatus", false);
      })
      .catch(error => {
        context.commit("setLoadingStatus", false);
        context.commit("setWeatherServiceErrorStatus", true);
      })
    }
	}
})
