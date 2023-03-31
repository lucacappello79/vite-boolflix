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
            <div class="score">
                {{ score.toFixed(1) }}
            </div>
        </div>
        <div class="card-text">
            <div class="title">
                {{ title.slice(0, 30) }}{{ title.length > 30 ? "..." : "" }}
            </div>
            <div class="original-title">
                <div class="original-title-text">
                    Original title:
                </div>
                <!-- <div class="original-title-title">
                                                    {{ title === originalTitle ? 'same title' : originalTitle }}
                                                </div> -->
                <div class="original-title-title">
                    {{ originalTitle.slice(0, 30) }}{{ originalTitle.length > 30 ? "..." : "" }}
                </div>
            </div>
            <div class="language">
                Language: {{ language }}
                <span class="fi fi-jp"></span>
            </div>
        </div>
    </div>
</template>


  
<style lang="scss" scoped>
@import "/node_modules/flag-icons/css/flag-icons.min.css";

.card {

    width: 200px;
    border: 1px solid black;
    padding: 10px;
    font-weight: bold;

    .image {
        position: relative;
        height: 250px;
        // border-radius: 10px;

        img {
            border: 1px solid white;
            border-radius: 10px;
            max-width: 100%;
            max-height: 100%;
        }
    }

    .card-text {
        padding: 0 2px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .title {
        color: white;
        margin-top: 15px;
        margin-bottom: 10px;
        text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.6);
    }

    .original-title,
    .language {
        color: grey;
        font-size: 12px;
        margin-bottom: 5px;
        text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.6);
    }

    .language {
        justify-self: flex-end;
    }

    .score {
        color: #ff00ff;
        background-color: black;
        border: 1px solid;
        border-image: linear-gradient(to bottom right, #00ffff, #ff00ff, #ffff00) 1;

        padding: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        bottom: -10px;
        left: 30px;


        width: 30px;
        height: 30px;
        font-size: 14px;
        text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.6);
    }
}
</style>