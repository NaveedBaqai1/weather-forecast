<template>
   <div>
      <spinner class="loading" v-if='getLoadingStatus'
         :size="150"
         :speed="2">
      </spinner>

      <div class="loadErrorWrapper" v-if='!getLoadingStatus && getWeatherServiceErrorStatus'>
         <div class="loadErrorCenter">
            <div class="loadErrorContent">
               <h1>Sorry...</h1>
               <h2>Ooops, something went wrong. Please try again by clicking refresh button</h2>
               <br/>
               <RefreshForecastBtn/>
            </div>
         </div>
      </div>

      <main role="main" v-if='!getLoadingStatus && !getWeatherServiceErrorStatus'>
         <header class="jumbotron">
            <div class="container">
               <div class="row">
                  <div class="col-md-7">
                     <CurrentForecast/>
                     <RefreshForecastBtn/>
                  </div>
                  <div class="col-md-5">
                     <GoogleSearch/>
                  </div>
               </div>
            </div>
         </header>
         <section class="py-5">
            <div class="container">
               <HourlyForecast/>
            </div>
         </section>
         <section class="py-5">
            <div class="container">
               <DailyForecast/>
            </div>
         </section>
      </main>
   </div>
</template>

<script>
  import Spinner from 'vue-spinner-component/src/Spinner.vue'
  import  GoogleSearch from './GoogleSearch.vue'
  import CurrentForecast from './CurrentForecast.vue'
  import HourlyForecast from './HourlyForecast.vue'
  import DailyForecast from './DailyForecast.vue'
  import RefreshForecastBtn from './RefreshForecastBtn.vue'

  export default {
    name: 'Home',
    components: {
      Spinner,
      GoogleSearch,
      CurrentForecast,
      HourlyForecast,
      DailyForecast,
      RefreshForecastBtn
    },
    computed: {
      getLoadingStatus: function(){
        return this.$store.getters.getLoadingStatus
      },
      getWeatherServiceErrorStatus: function(){
        return this.$store.getters.getWeatherServiceErrorStatus
      }
    }
  }
</script>

<style lang="sass" scoped>
  .loading
    Position: absolute
    top: calc(50% - 70px)
    left: calc(50% - 70px)

  .loadErrorWrapper
    display: table
    position: absolute
    height: 100%
    width: 100%
    .loadErrorCenter
      display: table-cell
      vertical-align: middle
      .loadErrorContent
        margin-left: auto
        margin-right: auto
        max-width: 1000px
        text-align: left

  main
    header
      background-color: #001b31
      color: #ffffff
      margin: 0
      border-radius: 0
    section
      background-color: #FCF5F4
</style>
