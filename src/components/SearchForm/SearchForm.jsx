import SwitchCheckbox from "../SwitchCheckbox/SwitchCheckbox";
import "./SearchForm.css";

export default function SearchForm() {
  return (
    <section className='search-form'>
      <form className='search-form__form'>
        <div className='search-form__container'>
          <input
            type='text'
            placeholder='Фильм'
            className='search-form__input'
            required
          />
          <button type='submit' className='search-form__submit' />
        </div>
        <SwitchCheckbox />
      </form>
    </section>
  );
}
