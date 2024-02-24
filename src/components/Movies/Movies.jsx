import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import './Movies.css';

export default function Movies({ movies }) {
  return (
    <main className='movies'>
      <SearchForm />
      <MoviesCardList movies={movies} />
    </main>
  )
}
