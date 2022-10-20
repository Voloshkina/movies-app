import "./Home.css";
import { useEffect, useState } from "react";
import Movie from "../components/Movie";

function Home() {
  const [movies, setMovies] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function loadMovies() {
      setIsLoading(true);
      try {
        const movies = await getMovies();
        setMovies(movies);
      } catch (err) {
        setError(err.message);
      }
      setIsLoading(false);
    }
    loadMovies();
  }, []);

  function getMovies() {
    fetch("https://yts.mx/api/v2/list_movies.json?sort_by=raiting")
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.data.movies);
      });
  }

  return (
    <section className="container">
      {isLoading && <p>Loading movies...</p>}
      {error && <p>{error}</p>}
      {!error && movies && (
        <div className="movies">
          {movies.map((movie) => (
            <Movie
              key={movie.id}
              id={movie.id}
              year={movie.year}
              title={movie.title}
              summary={movie.summary}
              poster={movie.medium_cover_image}
              genres={movie.genres}
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default Home;
