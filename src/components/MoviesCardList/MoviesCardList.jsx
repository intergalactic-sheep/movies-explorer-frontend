import MovieCard from "../MoviesCard/MovieCard";
import "./MoviesCardList.css";

export default function MoviesCardList({ movies }) {
  return (
    <section className="card-list">
      <ul className="card-list__grid">
        {movies.map((movie) => (
          <MovieCard movie={movie} key={movie._id} />
        ))}
      </ul>
      <button className="card-list__more">Ещё</button>
    </section>
  );
}
