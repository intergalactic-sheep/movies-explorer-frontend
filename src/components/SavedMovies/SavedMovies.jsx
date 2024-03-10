import './SavedMovies.css';
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import { getAllMovies } from "../../utils/MoviesApi";
import { useMovieContext } from "../../contexts/MoviesContext";
import { useState } from "react";

export default function SavedMovies({ movies, onUnsave, checkSavedMovies }) {
  const { searched, setSearched } = useMovieContext();

  const [searchQuerySave, setSearchQuerySave] = useState("");
  const [shortFilmSave, setShortFilmSave] = useState(false);

  const handleSearch = (query) => {
    if (!searched) {
      getAllMovies();
      setSearched(true);
    }
    setSearchQuerySave(query);
    localStorage.setItem("searchQuery", query);
  };

  const handleShortFilmCheck = () => {
    setShortFilmSave(!shortFilmSave);
    localStorage.setItem("shortFilmSave", true);
  };

  return (
    <main className='saved-movies'>
      <SearchForm
        onSearch={handleSearch}
        shortFilm={shortFilmSave}
        onShortFilmCheck={handleShortFilmCheck}
      />
      <MoviesCardList
        movies={movies}
        searched={searched}
        searchQuery={searchQuerySave}
        shortFilm={shortFilmSave}
        onUnsave={onUnsave}
        checkSavedMovies={checkSavedMovies}
      />
    </main>
  );
}
