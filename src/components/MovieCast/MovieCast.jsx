import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieCast, IMAGE_URL } from "../../services/api";

function MovieCast() {
  const { movieId } = useParams();
  const { cast, setCast } = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getCast() {
      try {
        setLoading(true);
        const data = await fetchMovieCast(movieId);
        console.log("Cast in MovieCast component:", data); // ЛОГУЄМО ОТРИМАНІ ДАНІ
        setCast(data || []);
      } catch (error) {
        setError("Failed to load cast.");
      } finally {
        setLoading(false);
      }
    }
    getCast();
  }, [movieId]);

  if (loading) return <p>Loading cast...</p>;
  if (error) return <p>{error}</p>;
  if (!cast || cast.length === 0) return <p>No cast information available.</p>;

  return (
    <div className={styles.cast - container}>
      <h3>Cast</h3>
      <ul className="cast-list">
        {cast.map(({ id, name, profile_path }) => (
          <li className={styles.cast - item} key={id}>
            {profile_path ? (
              <img src={`${IMAGE_URL}${profile_path}`} alt={name} width="50" />
            ) : (
              <p>No image</p>
            )}
            <p>{name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MovieCast;
