<script>

import { store } from "../store.js";

export default {

    name: "AppHeader",

    data() {

        return {

            store,

        }
    },

    emits: ['searchMovieOrShowEvent'],

};

</script>


<template>
    <header>
        <div class="header-wrapper">
            <div class="logo">
                <h1>BoolFlix</h1>
            </div>
            <div class="search-field">
                <input v-model="store.movieOrShow" type="text" placeholder="Enter your search"
                    @keyup.enter="$emit('searchMovieOrShowEvent')">
                <button @click="$emit('searchMovieOrShowEvent')">Search</button>
            </div>
        </div>
    </header>
</template>


  
<style lang="scss" scoped>
@use "../scss/variables" as *;

header {
    margin-bottom: 50px;
}

.header-wrapper {

    @include centered();

    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 30px 0;

    h1 {
        color: red;
    }
}

.search-field {

    input {

        width: 200px;
    }

    input {
        background-color: #000000;
        border: 1px solid #e50914;
        color: white;
        font-weight: bold;
        padding: 5px 10px;
        border-radius: 4px 0 0 4px;
        outline: none;
        transition: background-color 0.3s, border-color 0.3s;

        &::placeholder {
            color: white;
            opacity: 0.8;
        }

        &:focus {
            background-color: rgba(255, 10, 22, 0.2);
            border-color: #ff0a16;
        }
    }

    button {
        background-color: #000000;
        border: 1px solid #e50914;
        color: white;
        font-weight: bold;
        padding: 5px 10px;
        border-radius: 0 4px 4px 0;
        cursor: pointer;
        transition: background-color 0.3s, border-color 0.3s;

        &:hover {
            background-color: rgba(255, 10, 22, 0.2);
            border-color: #ff0a16;
        }

    }
}
</style>