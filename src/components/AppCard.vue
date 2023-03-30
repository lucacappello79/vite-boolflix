<script>

import { store } from "../store.js";

export default {

    name: "AppCard",

    data() {

        return {

            store,

        }
    },

    props: {

        img: String,
        title: String,
        originalTitle: String,
        language: String,
        score: Number,

    },
};

</script>


<template>
    <div class="card">
        <div class="image">
            <img :src="img" alt="">
        </div>
        <div class="title">
            {{ title }}
        </div>
        <div class="original-title">
            {{ originalTitle }}
        </div>
        <div class="language">
            {{ language }}
        </div>
        <div class="title">
            {{ score }}
        </div>
    </div>
</template>


  
<style lang="scss" scoped>
.card {

    width: 200px;
    border: 1px solid black;
    padding: 10px;
    font-weight: bold;

    div {
        color: white;
    }

    .image {
        height: 250px;

        img {
            max-width: 100%;
            max-height: 100%;
        }
    }
}
</style>