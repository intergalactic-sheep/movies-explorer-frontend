import MovieCard from "../MoviesCard/MovieCard";
import "./MoviesCardList.css";
import useResize from "../../hooks/useResize";
import { useState } from "react";
import {
  ADDED_MOVIES_AMOUNT,
  MOVIES_AMOUNT,
  SCREEN_SIZE,
} from "../../utils/constants";

export default function MoviesCardList({
  movies,
  searched,
  searchQuery,
  shortFilm,
  onSave,
  onUnsave,
  checkSavedMovies,
}) {
  const width = useResize();
  const [cards, setCards] = useState(getInitialCardsCount());

  function getInitialCardsCount() {
    if (width >= SCREEN_SIZE.L) {
      return MOVIES_AMOUNT.L;
    } else if (width <= SCREEN_SIZE.m) {
      return MOVIES_AMOUNT.m;
    } else if (width < SCREEN_SIZE.S) {
      return MOVIES_AMOUNT.s;
    }
  }

  const handleCardAddition = () => {
    let newVisibleCards;
    if (width >= SCREEN_SIZE.L) {
      newVisibleCards = cards + ADDED_MOVIES_AMOUNT.L;
    } else if (width <= SCREEN_SIZE.M) {
      newVisibleCards = cards + ADDED_MOVIES_AMOUNT.M;
    } else if (width < SCREEN_SIZE.S) {
      newVisibleCards = cards + ADDED_MOVIES_AMOUNT.S;
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
