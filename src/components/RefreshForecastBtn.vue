<template>
  <button class="btn btn-lg" @click="refreshWeatherData">
      REFRESH
  </button>
</template>

<script>
export default {
  name: "RefreshForecastBtn",
  methods: {
    refreshWeatherData: function() {
      this.$store.dispatch('reqWeatherData');
    }
  }
};
</script>

<style lang="sass" scoped>
main
  button
    margin: 5px 0px
</style>
