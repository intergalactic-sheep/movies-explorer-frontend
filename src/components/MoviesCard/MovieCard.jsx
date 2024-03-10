import "./MovieCard.css";
import { useLocation } from "react-router-dom";

export default function MovieCard({
  movie,
  onSave,
  onUnsave,
  checkSavedMovies,
}) {
  const path = useLocation().pathname;
  const isSaved = checkSavedMovies(movie);

  const handleSaveClick = () => {
    onSave(movie);
  };

  const handleUnsaveClick = () => {
    onUnsave(movie);
  };

  const calculateMovieDuration = () => {
    if (movie.duration >= 60 && movie.duration % 60 === 0) {
      return `${movie.duration / 60}ч`;
    } else if (movie.duration >= 60) {
      const hours = Math.floor(movie.duration / 60);
      const minutes = movie.duration % 60;
      return `${hours}ч ${minutes}м`;
    } else {
      return `${movie.duration}м`;
    }
  };

  return (
    <>
      <li className='card'>
        <div className='card__image-container'>
          {path === "/movies" ? (
            <button
              className={
                isSaved ? "card__save-button_type_saved" : "card__save-button"
              }
              type='button'
              onClick={isSaved ? handleUnsaveClick : handleSaveClick}
            >
              {isSaved ? "" : "Сохранить"}
            </button>
          ) : isSaved ? (
            <button
              className='card__save-button_type_delete'
              onClick={handleUnsaveClick}
            ></button>
          ) : null}
          <a
            target='_blank'
            rel='noreferrer'
            href={movie.trailerLink}
            className='card__trailer-link'
          >
            <img
              className='card__image'
              src={movie.image}
              alt={`Кадр из фильма ${movie.nameRU}`}
            />
          </a>
        </div>
        <div className='card__description-container'>
          <h2 className='card__name'>{movie.nameRU}</h2>
          <span className='card__duration'>{calculateMovieDuration()}</span>
        </div>
      </li>
    </>
  );
}
