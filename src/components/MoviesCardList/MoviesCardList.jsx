import MovieCard from "../MoviesCard/MovieCard";
import "./MoviesCardList.css";
import useResize from "../../hooks/useResize";
import { useState } from "react";

export default function MoviesCardList({
  movies,
  searched,
  searchQuery,
  shortFilm,
  onSave,
  onUnsave,
  checkSavedMovies
}) {
  const width = useResize();
  const [cards, setCards] = useState(getInitialCardsCount());

  function getInitialCardsCount() {
    if (width >= 1280) {
      return 12;
    } else if (width <= 1180) {
      return 8;
    } else if (width < 767) {
      return 5;
    }
  }

  const handleCardAddition = () => {
    let newVisibleCards;
    if (width >= 1280) {
      newVisibleCards = cards + 3;
    } else if (width <= 1180) {
      newVisibleCards = cards + 2;
    } else if (width < 767) {
      newVisibleCards = cards + 2;
    }

    setCards(newVisibleCards);
  };

  const searchedMovies = searched
    ? movies
        .filter((movie) => {
          const movieNameRU = (movie.nameRU || "").toLowerCase();
          const movieNameEN = (movie.nameEN || "").toLowerCase();
          const query = searchQuery || "";
          const includesSearchQuery =
            movieNameRU.includes(query.toLowerCase()) ||
            movieNameEN.includes(query.toLowerCase());
          return includesSearchQuery && (!shortFilm || movie.duration <= 40);
        })
        .slice(0, cards)
    : [];

  const showMoreButton = cards === searchedMovies.length;

  return (
    <section className='card-list'>
      {searched && searchedMovies.length > 0 ? (
        <>
          <ul className='card-list__grid'>
            {searchedMovies.map((movie) => (
              <MovieCard
                movie={movie}
                onSave={onSave}
                onUnsave={onUnsave}
                key={movie._id || movie.movieId}
                checkSavedMovies={checkSavedMovies}
              />
            ))}
          </ul>
          {showMoreButton && (
            <button className='card-list__more' onClick={handleCardAddition}>
              Ещё
            </button>
          )}
        </>
      ) : (
        <>
          {searched ? (
            <p className='card-list__error'>Ничего не найдено.</p>
          ) : (
            ""
          )}
        </>
      )}
    </section>
  );
}
