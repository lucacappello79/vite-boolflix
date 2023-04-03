<script>

import { store } from "../store.js";
import AppCard from "./AppCard.vue";

export default {

    name: "AppMain",

    data() {

        return {

            store,
            displayedTrending: 6,
            showMore: true,
        }
    },

    components: {
        AppCard
    },

    methods: {
        loadMore() {

            if (this.showMore) {

                this.displayedTrending += 6;

            } else {

                this.displayedTrending = 6;
            }

            this.showMore = !this.showMore;

        },
    },
};

</script>


<template>
    <main>
        <div class="content">
            <div class="movies">Movies</div>
            <AppCard
                v-for="(item, index) in (store.movies.length > 0 ? store.movies : store.trendingMovies).slice(0, displayedTrending)"
                :img="'https://image.tmdb.org/t/p/w200/' + item.poster_path" :title="item.title ? item.title : item.name"
                :originalTitle="item.original_title ? item.original_title : item.original_name"
                :language="item.original_language" :score="item.vote_average" :overview="item.overview">
            </AppCard>
        </div>
        <button class="load-more" @click="loadMore">{{ showMore ? 'Load More' : 'Show Less' }}</button>
    </main>
</template>


  
<style lang="scss" scoped>
@use "../scss/variables" as *;

.movies {
    position: absolute;
    top: -25px;
    left: -30px;
    z-index: 1;

    color: #ff00ff;
    background-color: black;
    font-size: 20px;
    padding: 8px 15px;
    border: 1px solid;
    border-image: linear-gradient(to bottom right, #00ffff, #ff00ff, #ffff00) 1;
}

main {
    .content {
        @include centered();

        position: relative;

        height: 100%;
        display: flex;
        flex-flow: row wrap;
        justify-content: center;
        row-gap: 20px;
    }

    .load-more {
        background-color: black;
        display: block;
        margin: 30px auto 50px;
        ;
        color: white;
        font-size: 0.8em;
        font-weight: bold;
        text-transform: uppercase;
        padding: 8px 20px;
        border: 1px solid white;
        cursor: pointer;
        outline: none;
    }

}
</style>