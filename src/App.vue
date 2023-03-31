<script>
import axios from "axios";
import { store } from "./store.js";

import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";
import AppSeries from "./components/AppSeries.vue";

export default {
  data() {
    return {
      store,
    };
  },

  components: {

    AppHeader,
    AppMain,
    AppSeries,

  },

  created() {

    // axios.get(this.store.APIcallTrending).then((res) => {
    //   console.log(res.data.results);
    //   this.store.movies = res.data.results; //test test test
    // });

    axios.get(this.store.APIcallTrending).then((res) => {
      console.log(res.data.results);
      this.store.trending = res.data.results; //test test test
    });
  },

  methods: {

    searchMovie(movieName) {

      axios.get(this.store.APIcall + movieName).then((res) => {
        console.log(res);
        console.log(res.data.results);
        this.store.movies = res.data.results;

      });
    },

    searchSeries(seriesName) {

      axios.get(this.store.APIcallSeries + seriesName).then((res) => {
        console.log(res);
        console.log(res.data.results);
        this.store.series = res.data.results;
      });
    },
  }


};
</script>


<template>
  <div class="container">

    <AppHeader @search-movie="searchMovie" @search-series="searchSeries"></AppHeader>
    <AppMain></AppMain>
    <AppSeries></AppSeries>

  </div>
</template>


<style lang="scss">
.container {
  overflow: hidden;
}
</style>
