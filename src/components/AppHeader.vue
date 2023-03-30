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
                <input v-model="store.movieName" type="text" placeholder="Search movie"
                    @keyup.enter="$emit('search-movie', store.movieName)">
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
}
</style>