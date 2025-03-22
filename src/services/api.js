import axios from "axios";

const API_KEY =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5Y2YwZDE2YTY3YjQ2ZjA4NmMxYmRkMGMxNTIyZWJlMSIsIm5iZiI6MTc0MjU3ODQ4Ni44NDA5OTk4LCJzdWIiOiI2N2RkYTMzNjVmOTc3ODM2YWI3YTdkMTciLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.ONyxclzNjsfY9Cs-RxfKXY7bnF56ltgpDEGYLZI6Gck";
const BASE_URL = "https://api.themoviedb.org/3";
const IMAGE_URL = "https://image.tmdb.org/t/p/w500";

const options = {
  headers: {
    Authorization: `Bearer ${API_KEY}`,
  },
};

export const fetchTrendingMovies = async () => {
  const response = await axios.get(`${BASE_URL}/trending/movie/day`, options);
  return response.data.results;
};

export const searchMovies = async (query) => {
  const response = await axios.get(
    `${BASE_URL}/search/movie?query=${query}`,
    options
  );
  return response.data.results;
};

export const fetchMovieDetails = async (id) => {
  const response = await axios.get(`${BASE_URL}/movie/${id}`, options);
  return response.data;
};

export const fetchMovieCast = async (id) => {
  const response = await axios.get(`${BASE_URL}/movie/${id}/credits`, options);
  return response.data.cast;
};

export const fetchMovieReviews = async (id) => {
  const response = await axios.get(`${BASE_URL}/movie/${id}/reviews`, options);
  return response.data.results;
};

export { IMAGE_URL };
