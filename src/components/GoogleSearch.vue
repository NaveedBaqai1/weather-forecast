<template>
   <div class="searchLocation">
      <h1>Find Weather Forecast</h1>
      <div class="input-group searchField">
         <gmap-autocomplete
            placeholder="Search Location"
            class="form-control py-2 border-right-0 border"
            @place_changed="updateLocation">
         </gmap-autocomplete>
         <span class="input-group-append">
         <button class="btn btn-outline-secondary border-left-0 border" type="button" @click="updateWeatherData">
         <span class="fa fa-search" />
         </button>
         </span>
      </div>
      <div class="alert alert-danger" role="alert" v-if='getSearchErrorStatus'>
         Please select the location from above list.
      </div>
   </div>
</template>

<script>
  export default {
    name: "GoogleSearch",
    data() {
      return {
        location: null
      };
    },
    computed: {
      getSearchErrorStatus: function(){
        return this.$store.getters.getSearchErrorStatus
      }
    },
    methods: {
      updateLocation: function(place) {
        this.location = place;
      },
      updateWeatherData: function() {
        if(this.location === null || this.location === "" || this.location === undefined){
          this.$store.dispatch('updateSearchStatus', true);
        } else{
          this.$store.dispatch('updateSearchStatus', false);
          let locationName = this.location.name;
          let locationLat = this.location.geometry.location.lat();
          let locationLng = this.location.geometry.location.lng();
          this.$store.dispatch('updateLocation', {locationName: locationName, locationLat: locationLat, locationLng: locationLng}).then(() => {
            this.$store.dispatch('reqWeatherData');
          });
        }
      }
    }
  };
</script>

<style lang="sass" scoped>
$fontWeight300: 300;

.searchLocation
  padding: 30px 0px
  h1
    font-weight: $fontWeight300
  .alert
    margin-top: 10px

</style>
