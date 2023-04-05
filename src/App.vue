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

    axios.get(this.store.APIcallTrendingMovies).then((res) => {
      console.log(res.data.results);
      this.store.trendingMovies = res.data.results;
    });

    axios.get(this.store.APIcallTrendingTv).then((res) => {
      console.log(res.data.results);
      this.store.trendingTv = res.data.results;
    });
  },

  methods: {

    searchMovieOrShow() {

      axios.get(this.store.APIcallMovies + this.store.movieOrShow).then((res) => {
        console.log(res);
        console.log(res.data.results)
        this.store.movies = res.data.results;
      });

      axios.get(this.store.APIcallSeries + this.store.movieOrShow).then((res) => {
        console.log(res);
        console.log(res.data.results);
        this.store.series = res.data.results;
      });

    },

    //Pro-version
    // searchMovieOrShow() {

    //   this.store.pathMovies = "/search/movie";
    //   this.store.pathShows = "/search/tv"
    //   this.store.queryParameters = "&query=" + encodeURIComponent(this.store.movieOrShow);

    //   axios.get(this.store.baseApi + this.store.pathMovies + this.store.apiKey + this.store.queryParameters).then((res) => {
    //     console.log(res);
    //     console.log(res.data.results)
    //     this.store.movies = res.data.results;
    //   });

    //   axios.get(this.store.baseApi + this.store.pathShows + this.store.apiKey + this.store.queryParameters).then((res) => {
    //     console.log(res);
    //     console.log(res.data.results);
    //     this.store.series = res.data.results;
    //   });

    // },

  },

}

</script>

<template>
  <div class="container">
    <AppHeader @searchMovieOrShowEvent="searchMovieOrShow()"></AppHeader>
    <AppMain></AppMain>
    <AppSeries></AppSeries>
  </div>
</template>


<style lang="scss">
.container {
  overflow: hidden;
}
</style>
