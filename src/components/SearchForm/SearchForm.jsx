import SwitchCheckbox from "../SwitchCheckbox/SwitchCheckbox";
import "./SearchForm.css";

export default function SearchForm() {
  return (
    <section className="search-form">
      <div className="search-form__container">
        <form className="search-form__form">
          <input
            type="text"
            placeholder="Фильм"
            className="search-form__input"
          />
          <button type="submit" className="search-form__submit" />
        </form>
      </div>
      <SwitchCheckbox />
      <span className="search-form__line"></span>
    </section>
  );
}
