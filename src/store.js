import { reactive } from 'vue';

export const store = reactive({

    movies: [],
    series: [],
    trending: [],

    // APIcall: "https://api.themoviedb.org/3/search/movie?api_key=9a7f31b303aae58124155b7d128e6721&query=",
    APIcallTrending: "https://api.themoviedb.org/3/trending/all/week?api_key=9a7f31b303aae58124155b7d128e6721",
    APIcall: "https://api.themoviedb.org/3/search/multi?api_key=9a7f31b303aae58124155b7d128e6721&query=",
    APIcallSeries: "https://api.themoviedb.org/3/search/tv?api_key=9a7f31b303aae58124155b7d128e6721&query=",

    APIquery: "",

    movieName: "",
    seriesName: "",

});