import { reactive } from 'vue';

export const store = reactive({

    movies: [],
    series: [],

    // APIcall: "https://api.themoviedb.org/3/search/movie?api_key=9a7f31b303aae58124155b7d128e6721&query=",
    // APIcall: "https://api.themoviedb.org/3/trending/all/week?api_key=9a7f31b303aae58124155b7d128e6721",
    APIcall: "https://api.themoviedb.org/3/search/multi?api_key=9a7f31b303aae58124155b7d128e6721&query=",

    APIquery: "",

    movieName: "",

});