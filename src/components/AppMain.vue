<script>

import { store } from "../store.js";
import AppCard from "./AppCard.vue";

export default {

    name: "AppMain",

    data() {

        return {

            store,

        }
    },

    components: {
        AppCard
    },
};

</script>


<template>
    <main>
        <div class="content">
            <AppCard v-for="(item, index) in store.movies" :img="'https://image.tmdb.org/t/p/w200/' + item.poster_path"
                :title="item.title ? item.title : item.name"
                :originaltitle="item.original_title ? item.original_title : item.original_name"
                :language="item.original_language" :score="item.vote_average">
            </AppCard>
        </div>
    </main>
</template>


  
<style lang="scss" scoped>
@use "../scss/variables" as *;

main {
    background-color: black;

    .content {

        @include centered();

        display: flex;
        flex-flow: row wrap;
        justify-content: center;
        row-gap: 20px;
    }

}
</style>