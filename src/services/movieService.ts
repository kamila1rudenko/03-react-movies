import axios from "axios";
import type { Movie } from "../types/movie";

const BASE_URL = "https://api.themoviedb.org/3/search/movie";

const options = {
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
  },
};

export const fetchMovies = async (query: string): Promise<Movie[]> => {
  const response = await axios.get(BASE_URL, {
    params: {
      query,
    },
    ...options,
  });

  return response.data.results;
};
