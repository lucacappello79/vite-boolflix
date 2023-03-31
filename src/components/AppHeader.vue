<script>

import { store } from "../store.js";

export default {

    name: "AppHeader",

    data() {

        return {

            store,

        }
    },

    components: {

    },
};

</script>


<template>
    <header>
        <div class="header-wrapper">
            <div class="logo">
                <span>BoolFlix</span>
            </div>
            <div class="search-field">
                <div class="movie-search">
                    <input v-model="store.movieName" type="text" placeholder="Search movie"
                        @keyup.enter="$emit('search-movie', store.movieName)">
                    <button @click="$emit('search-movie', store.movieName)">Search</button>
                </div>
                <div class="series-search">
                    <input v-model="store.seriesName" type="text" placeholder="Search tv show"
                        @keyup.enter="$emit('search-series', store.seriesName)">
                    <button @click="$emit('search-series', store.seriesName)">Search</button>
                </div>
            </div>
        </div>
    </header>
</template>


  
<style lang="scss" scoped>
@use "../scss/variables" as *;

.header-wrapper {

    @include centered();

    display: flex;
    justify-content: space-between;

    padding: 30px 0;

    span {
        color: red;
    }
}

movie-search,
series-search {

    input {

        width: 200px;
    }
}
</style>