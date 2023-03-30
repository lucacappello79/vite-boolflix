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
            <AppCard v-for="(item, index) in store.movies" :title="item.title" :originaltitle="item.original_title"
                :language="item.original_language" :score="vote_average"></AppCard>
        </div>
    </main>
</template>


  
<style lang="scss" scoped></style>