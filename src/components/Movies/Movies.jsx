import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import "./Movies.css";
import { useMovieContext } from "../../contexts/MoviesContext";
import { getAllMovies } from "../../utils/MoviesApi";

export default function Movies({ movies, onSave, onUnsave, checkSavedMovies }) {
  const {
    searchQuery,
    setSearchQuery,
    shortFilm,
    setShortFilm,
    searched,
    setSearched,
  } = useMovieContext();

  const handleSearch = (query) => {
    if (!searched) {
      getAllMovies();
      setSearched(true);
    }
    setSearchQuery(query);
    localStorage.setItem("searchQuery", query);
  };

  const handleShortFilmCheck = () => {
    setShortFilm(!shortFilm);
  };

  return (
    <main className='movies'>
      <SearchForm
        searchQuery={searchQuery}
        onSearch={handleSearch}
        shortFilm={shortFilm}
        onShortFilmCheck={handleShortFilmCheck}
      />
      <MoviesCardList
        movies={movies}
        searched={searched}
        searchQuery={searchQuery}
        shortFilm={shortFilm}
        onSave={onSave}
        onUnsave={onUnsave}
        checkSavedMovies={checkSavedMovies}
      />
    </main>
  );
}
