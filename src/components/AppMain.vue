<script>

import { store } from "../store.js";
import AppCard from "./AppCard.vue";

import AppCard from "./components/AppCard.vue"

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
        Main
        <AppCard></AppCard>
    </main>
</template>


  
<style lang="scss" scoped></style>