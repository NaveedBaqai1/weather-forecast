<template>
   <div class="dailyForecast">
      <h1>Daily Weather Forecast</h1>
      <div class="row">
         <div class="col-md-4" v-if="getWeatherDailyForecast.length > 0" v-for="(item, index) in getWeatherDailyForecast">
            <div class="shadow p-3 mb-5 bg-white rounded">
               <h2>{{ item.time | moment('timezone', getTimeZone, 'dddd') }}</h2>
               <h4>{{ item.time | moment('timezone', getTimeZone, 'MMM Do') }}</h4>
               <skycon :condition="item.icon" :width="128" :height="128"/>
               <h5>{{ item.summary }}</h5>
               <hr/>
               <div class="row">
                  <div class="col-md-6">
                     <h5>Temp. Low {{ item.temperatureLow }} &degF</h5>
                  </div>
                  <div class="col-md-6">
                     <h5>Temp. High {{ item.temperatureHigh }} &degF</h5>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>

<script>
  export default {
    name: "DailyForecast",
    computed: {
      getWeatherDailyForecast: function(){
        return this.$store.getters.getWeatherData.daily.data
      },
      getTimeZone: function(){
        return this.$store.getters.getWeatherData.timezone
      }
    }
  };
</script>

<style lang="sass" scoped>
  $fontWeight300: 300;

  .dailyForecast
    h1, h2, h3, h4, h5
      font-weight: $fontWeight300
    .row
      margin: 20px auto
      .col-md-4
        text-align: center

  @media (min-width: 1200px)
    .dailyForecast
      .row
        .col-md-4
          .shadow
            min-height: 420px
</style>
