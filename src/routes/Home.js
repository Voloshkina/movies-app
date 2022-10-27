import "./Home.css";
import Movie from "../components/Movie";
import useFetchApi from "elenauseapihook";

function Home() {
  const [isLoading, isError, data] = useFetchApi(
    "https://yts.mx/api/v2/list_movies.json?sort_by=raiting"
  );

  return (
    <section className="container">
      {isLoading && <p>Loading movies...</p>}
      {isError && <p>{isError}</p>}
      {!isError && data && (
        <div className="movies">
          {data.map((movie) => (
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
