import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieReviews } from "../../services/api";
import styles from "./MovieReviews.module.css";

function MovieReviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchMovieReviews(movieId).then(setReviews);
  }, [movieId]);

  return (
    <div>
      <h3>Reviews</h3>
      {reviews.length === 0 ? (
        <p>No reviews found.</p>
      ) : (
        <ul>
          {reviews.map(({ id, author, content }) => (
            <li key={id}>
              <strong>{author}</strong>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default MovieReviews;
