<script>
import axios from "axios";
import { store } from "./store.js"

import AppHeader from "./components/AppHeader.vue"
import AppMain from "./components/AppMain.vue"

export default {
  data() {
    return {
      store,
    };
  },

  components: {

    AppMain,
    AppHeader,

  },

  created() {

    axios.get(this.store.APIcallTrending).then((res) => {
      console.log(res.data.results);
      this.store.movies = res.data.results;
    });
  },

  methods: {

    searchMovie(movieName) {

      axios.get(this.store.APIcall + movieName).then((res) => {
        console.log(res);
        console.log(res.data.results);
        this.store.movies = res.data.results;

      });
    }
  }

};
</script>


<template>
  <div class="container">

    <AppHeader @search-movie="searchMovie"></AppHeader>
    <AppMain></AppMain>

  </div>
</template>


<style lang="scss">
.container {
  overflow: hidden;
}
</style>
