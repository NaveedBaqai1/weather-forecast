<template>
   <div class="hourlyForecast">
   <h1>Next 12 Hours Weather Forecast</h1>
   <carousel-3d class="slider" :disable3d="true" :space="370" :loop="false"
      :clickable="true" :controls-visible="true" :controls-next-html="'&#10093;'"
      :controls-prev-html="'&#10092;'" :controls-width="30" :controls-height="60">
      <div/>
         <slide class="slide" v-for="(item, index) in getWeatherHourForecast" :index="index" v-if="index < 12">
            <div class="slideContent">
               <h2>{{ item.time | moment('timezone', getTimeZone, 'calendar') }}</h2>
               <skycon :condition="getWeatherIcon" :width="128" :height="128"/>
                  <h3>{{ item.temperature }} &degF</h3>
                  <h3>{{ item.summary }}</h3>
            </div>
         </slide>
   </carousel-3d>
   </div>
</template>

<script>
  import { Carousel3d, Slide } from 'vue-carousel-3d'
  export default {
    name: "HourlyForecast",
    components: {
      Carousel3d,
      Slide
    },
    computed: {
      getWeatherHourForecast: function(){
        return this.$store.getters.getWeatherData.hourly.data
      },
      getWeatherIcon: function(){
        return this.$store.getters.getWeatherData.hourly.icon
      },
      getTimeZone: function(){
        return this.$store.getters.getWeatherData.timezone
      }
    }
  };
</script>

<style lang="sass" scoped>
$fontWeight300: 300;

.hourlyForecast
  h1
    font-weight: $fontWeight300
  .slider
    .slide
      font-weight: $fontWeight300
      padding: 20px
      background-color: #33495f
      text-align: center
      border-radius: 5px
      .slideContent
        color: #ffffff
        h2, h3, h4
          font-weight: $fontWeight300
</style>
