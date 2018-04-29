<template>
  <div id="app">
    <Home />
  </div>
</template>

<script>
  import Home from "./components/Home"

  export default {
    name: "App",
    beforeMount: async function() {
       await this.$store.dispatch('reqWeatherData');
    },
    components: {
      Home
    }
  };
</script>

<style lang="sass">
  @import './style/main'
</style>
