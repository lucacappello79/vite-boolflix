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

    axios.get(this.store.APIcall).then((res) => {
      console.log(res.data.results);
      this.store.movies = res.data.results;
    });
  },

  // methods: {

  //   search() {

  //     let apiNewString = this.store.APIquery + this.store.movieName;

  //     axios.get(apiNewString).then((res) => {
  //       this.store.movies = res.data.data;
  //     });

  //   },

  // },

};
</script>


<template>
  <div class="container">

    <AppHeader></AppHeader>
    <AppMain></AppMain>

  </div>
</template>


<style lang="scss"></style>
