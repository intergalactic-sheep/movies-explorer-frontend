import { createContext, useContext, useEffect, useState } from "react";

const MoviesContext = createContext();

export const useMovieContext = () => {
  return useContext(MoviesContext);
};

export const MoviesProvider = ({ children }) => {
  const checkSearchQuery = () => {
    const savedSearchQuery = localStorage.getItem("searchQuery") ?? "";
    return savedSearchQuery;
  };

  const checkSearched = () => {
    const savedSearched = localStorage.getItem("searched") ?? "";
    return savedSearched === true;
  };

  const checkShortFilm = () => {
    const savedShortFilm = localStorage.getItem("shortFilm") ?? false;
    return savedShortFilm === true;
  };

  const checkFoundMovies = () => {
    const savedFoundMovies = localStorage.getItem("foundMovies") ?? "[]";
    return JSON.parse(savedFoundMovies);
  };

  const [searchQuery, setSearchQuery] = useState(checkSearchQuery());
  const [searched, setSearched] = useState(checkSearched());
  const [shortFilm, setShortFilm] = useState(checkShortFilm());
  const [foundMovies, setFoundMovies] = useState(checkFoundMovies());

  const resetMoviesValues = () => {
    setSearchQuery("");
    setSearched(false);
    setShortFilm(false);
    setFoundMovies([]);
  };

  useEffect(() => {
    localStorage.setItem("searchQuery", searchQuery);
    localStorage.setItem("searched", searched);
    localStorage.setItem("shortFilm", shortFilm);
    if (foundMovies.length > 0) {
      localStorage.setItem("foundMovies", JSON.stringify(foundMovies));
    }
  }, [searchQuery, searched, shortFilm, foundMovies]);

  const moviesContextValues = {
    searchQuery,
    setSearchQuery,
    searched,
    setSearched,
    shortFilm,
    setShortFilm,
    foundMovies,
    setFoundMovies,
    resetMoviesValues,
  };

  return (
    <MoviesContext.Provider value={moviesContextValues}>
      {children}
    </MoviesContext.Provider>
  );
};