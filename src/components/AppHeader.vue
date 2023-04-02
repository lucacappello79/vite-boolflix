<script>

import { store } from "../store.js";

export default {

    name: "AppHeader",

    data() {

        return {

            store,

        }
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
                    <input v-model="store.movieOrShow" type="text" placeholder="Search movie"
                        @keyup.enter="$emit('search-movieOrShow')">
                    <button @click="$emit('search-movieOrShow')">Search</button>
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
series-search,
movie-series-search {

    input {

        width: 200px;
    }
}
</style>