import { useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import type { Movie } from "../../types/movie";
import { fetchMovies } from "../../services/movieService";
import toast, { Toaster } from "react-hot-toast";
import MovieGrid from "../MovieGrid/MovieGrid";

export default function App() {
  const [movies, setMovies] = useState<Movie[]>([]);

  const handleSearch = async (query: string) => {
    try {
      const results = await fetchMovies(query);

      if (results.length === 0) {
        toast.error("No movies found for your request.");
      }

      setMovies(results);
    } catch (error) {
      toast.error("Something went wrong. Try again later.");
    }
  };

  return (
    <>
      <SearchBar onSubmit={handleSearch} />
      <Toaster />
      <MovieGrid movies={movies} />
    </>
  );
}
