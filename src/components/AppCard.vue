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
        overview: String,
        score: Number,

    },

    computed: {

        getCountryCode() {

            // STANDARD COMPUTED
            // if (this.language === 'en') {
            //     return 'gb';
            // } else if (this.language === 'ja') {
            //     return 'jp';
            // } else if (this.language === 'ko') {
            //     return 'kr';
            // } else if (this.language === 'zh') {
            //     return 'cn';
            // } else if (this.language === 'hi') {
            //     return 'in';
            // } else if (this.language === 'fa') {
            //     return 'sy';
            // } else if (this.language === 'nb') {
            //     return 'no';
            // } else if (this.language === 'da') {
            //     return 'dk';
            // } else if (this.language === 'el') {
            //     return 'gr'
            // } else {
            //     return this.language;
            // }


            switch (this.language) {

                case "en": return "gb";
                case "ja": return "jp";
                case "ko": return "kr";
                case "zh": return "cn";
                case "hi": return "in";
                case "fa": return "sy";
                case "nb": return "no";
                case "da": return "dk";
                case "el": return "gr";
                case "he": return "il";
                case "cs": return "cz";
                case "ar": return "ae";

                default: return this.language;

            }
        },

    },

    //USING A METHOD WITH ARGUMENTS, REMOVE COMMENT FROM LINE 159 AND COMMENT LINE 158
    // methods: {

    //     getCountryCode(ab) {

    //         if (ab === 'en') {
    //             return 'gb';
    //         } else if (ab === 'ja') {
    //             return 'jp';
    //         } else if (ab === 'ko') {
    //             return 'kr';
    //         } else if (ab === 'zh') {
    //             return 'cn';
    //         } else if (ab === 'hi') {
    //             return 'in';
    //         } else if (ab === 'fa') {
    //             return 'sy';
    //         } else if (ab === 'nb') {
    //             return 'no';
    //         } else if (ab === 'da') {
    //             return 'dk';
    //         } else if (ab === 'el') {
    //             return 'gr'
    //         } else {
    //             return ab;
    //         }
    //     },

    // },

}

</script>


<template>
    <div class="card">

        <div class="card-info">
            <div class="title">
                <h3>Title:</h3>
                <div>{{ title }}</div>
            </div>
            <div class="original-title">
                <h3>Original title:</h3>
                <div>{{ originalTitle }}</div>
            </div>
            <div class="stars">
                <h3>Score:</h3>
                <div class="star" v-for="(item, index) in 5">
                    <i :class="index < Math.ceil(score / 2) ? 'fa-solid fa-star' : 'fa-regular fa-star'"></i>
                </div>
            </div>
            <div class="overview">
                <h3>Overview:</h3>
                <div>
                    {{ overview.slice(0, 300) }}{{ overview.length > 300 ? "..." : "" }}
                </div>
            </div>
        </div>

        <div class="card-content">
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
                    <div class="original-title-title">
                        {{ originalTitle.slice(0, 30) }}{{ originalTitle.length > 30 ? "..." : "" }}
                    </div>
                </div>
                <div class="language">
                    Language:
                    <span :class="'fi fi-' + getCountryCode"></span>
                    <!-- USING METHOD <span :class="'fi fi-' + getCountryCode(language)"></span> -->
                </div>
            </div>
        </div>

    </div>
</template>


  
<style lang="scss" scoped>
@import "/node_modules/flag-icons/css/flag-icons.min.css";

.card {

    position: relative;

    width: 200px;
    border: 1px solid black;
    padding: 10px;
    font-weight: bold;

    .card-info {

        color: grey;

        border: 1px solid grey;
        padding: 10px;
        font-weight: bold;

        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;

        display: flex;
        flex-direction: column;
        opacity: 0;
        visibility: hidden;
        transition: opacity .3s, visibility .3s;

        .title,
        .overview {
            overflow-y: hidden;
            font-style: italic;
            color: grey;
            font-size: 12px;
        }

        h3 {
            color: white;
            margin-bottom: 3px;
            font-size: 13px;
        }

        .stars {
            display: flex;
            align-items: center;
            gap: 3px;
            color: #ffff00;

            i {
                font-size: 12px;
                transform: translate(0, -30%);
            }
        }
    }

    .card-content {
        opacity: 1;
        visibility: visible;
        transition: opacity 1s, visibility 1s;
    }

    &:hover {
        .card-info {
            opacity: 1;
            visibility: visible;
        }

        .card-content {
            opacity: 0;
            visibility: hidden;
        }
    }

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