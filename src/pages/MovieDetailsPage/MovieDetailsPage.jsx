import { useState, useEffect } from "react";
import { useParams, Link, Outlet, useLocation } from "react-router-dom";
import { fetchMovieDetails, IMAGE_URL } from "../../services/api";
// import styles from "./MovieDetailsPage.modulle.css";

function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const backLink = location.state?.from || "/movies";

  useEffect(() => {
    fetchMovieDetails(movieId).then(setMovie);
  }, [movieId]);

  if (!movie) return <p>Loading...</p>;

  return (
    <div>
      <Link to={backLink}>Go back</Link>
      <h1>{movie.title}</h1>
      <img src={`${IMAGE_URL}${movie.poster_path}`} alt={movie.title} />
      <p>{movie.overview}</p>
      <nav>
        <Link to="cast">Cast</Link>
        <Link to="reviews">Reviews</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default MovieDetailsPage;
