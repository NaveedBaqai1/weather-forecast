<template>
   <div class="currentForecast">
      <skycon :condition="getWeatherIcon" :width="100" :height="100"/>
      <h1>{{ getLocationName }}</h1>
      <h3>{{ getWeatherSummary }}</h3>
      <h3>Temperature: {{ getWeatherTemperature }} &degF</h3>
      <h4>Humidity: {{ getWeatherHumidity }}</h4>
      <h4>Wind: {{ getWeatherWind }} mph</h4>
   </div>
</template>

<script>
  export default {
    name: "CurrentForecast",
    computed: {
      getLocationName: function(){
        return this.$store.getters.getLocationName
      },
      getWeatherIcon: function(){
        return this.$store.getters.getWeatherData.currently.icon
      },
      getWeatherSummary: function(){
        return this.$store.getters.getWeatherData.currently.summary
      },
      getWeatherTemperature: function(){
        return this.$store.getters.getWeatherData.currently.temperature
      },
      getWeatherHumidity: function(){
        return this.$store.getters.getWeatherData.currently.humidity
      },
      getWeatherWind: function(){
        return this.$store.getters.getWeatherData.currently.windSpeed
      },
    }
  };
</script>

<style lang="sass" scoped>
  $fontWeight300: 300;

  .currentForecast
    padding: 10px 0px
    h3, h4
      font-weight: $fontWeight300
</style>
