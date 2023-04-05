import { reactive } from 'vue';

export const store = reactive({

    movies: [],
    series: [],
    trendingMovies: [],
    trendingTv: [],

    //pro-version
    // baseApi: "https://api.themoviedb.org/3",
    // apiKey: "?api_key=9a7f31b303aae58124155b7d128e6721",
    // pathMovies: "",
    // pathShows: "",
    // queryParameters: "",
    //pro-version


    APIcallTrendingTv: "https://api.themoviedb.org/3/trending/tv/week?api_key=9a7f31b303aae58124155b7d128e6721",

    APIcallTrendingMovies: "https://api.themoviedb.org/3/trending/movie/week?api_key=9a7f31b303aae58124155b7d128e6721",

    APIcallMovies: "https://api.themoviedb.org/3/search/movie?api_key=9a7f31b303aae58124155b7d128e6721&query=",

    APIcallSeries: "https://api.themoviedb.org/3/search/tv?api_key=9a7f31b303aae58124155b7d128e6721&query=",

    movieOrShow: "",

});