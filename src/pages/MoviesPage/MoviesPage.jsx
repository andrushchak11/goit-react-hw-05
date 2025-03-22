import { useState } from "react";
import { searchMovies } from "../../services/api";
import MovieList from "../../components/MovieList/MovieList";

function MoviesPage() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!query) return;
    const results = await searchMovies(query);
    setMovies(results);
  };

  return (
    <div>
      <h1>Search Movies</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter movie name"
        />
        <button type="submit">Search</button>
      </form>
      <MovieList movies={movies} />
    </div>
  );
}

export default MoviesPage;
