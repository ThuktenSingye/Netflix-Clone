// https://api.themoviedb.org/3/movie/550?api_key=02e26676d8c8d50c93c2c465c83b3479
const APIKEY = '02e26676d8c8d50c93c2c465c83b3479';

const requests = {
    fetchTrending: `/trending/movie/day?api_key=${APIKEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${APIKEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${APIKEY}&language=en-US&page=1`,
    fetchActionMovies: `/discover/movie?api_key=${APIKEY}&language=en-US&sort_by=popularity.desc&include_adult=false&with_genres=28`,
    fetchComedyMovies:`/discover/movie?api_key=${APIKEY}&language=en-US&sort_by=popularity.desc&include_adult=false&with_genres=35`,
    fetchHorrorMovies:`/discover/movie?api_key=${APIKEY}&language=en-US&sort_by=popularity.desc&include_adult=false&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${APIKEY}&language=en-US&sort_by=popularity.desc&include_adult=false&with_genres=10749`,
    fetchDocumentaris: `/discover/movie?api_key=${APIKEY}&language=en-US&sort_by=popularity.desc&include_adult=false&with_genres=99`,
}
export default requests;

