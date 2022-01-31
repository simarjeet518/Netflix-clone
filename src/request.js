const API_KEY = "34830eb9ec2999bbcc261a36b8ebfdfb";

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_netwrols=213`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fectchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fectchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fectchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fectchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fectchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
};

export default requests;
