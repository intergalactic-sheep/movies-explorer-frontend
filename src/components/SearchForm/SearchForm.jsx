import SwitchCheckbox from "../SwitchCheckbox/SwitchCheckbox";
import "./SearchForm.css";
import useFormWithValidation from "../../hooks/useFormWithValidation";

export default function SearchForm({
  onSearch,
  searchQuery,
  shortFilm,
  onShortFilmCheck,
}) {
  const { values, handleChange } = useFormWithValidation({
    search: searchQuery,
  });

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onSearch(values.search);
  };

  const handleShortFilmSwitch = (evt) => {
    onShortFilmCheck(evt.target.checked);
  };

  return (
    <section className='search-form'>
      <form
        className='search-form__form'
        noValidate
        name='search'
        onSubmit={handleSubmit}
      >
        <div className='search-form__container'>
          <input
            className='search-form__input'
            type='text'
            name='search'
            placeholder='Фильм'
            autoComplete='off'
            required
            value={values.search || ""}
            onChange={handleChange}
          />
          <button type='submit' className='search-form__submit' />
        </div>
        <SwitchCheckbox
          isChecked={shortFilm}
          onSwitchToggle={handleShortFilmSwitch}
        />
      </form>
    </section>
  );
}
