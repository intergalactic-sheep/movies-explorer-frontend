import { useContext, useState } from "react";
import "./Profile.css";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import useFormWithValidation from "../../hooks/useFormWithValidation";
import { useMovieContext } from "../../contexts/MoviesContext";

export default function Profile({ onLogout, onUpdate }) {
  const currentUser = useContext(CurrentUserContext);
  const { resetMoviesValues } = useMovieContext();

  const { values, handleChange, errors, isValid } = useFormWithValidation({
    name: currentUser.name,
    email: currentUser.email,
  });

  const [isEditProfile, setIsEditProfile] = useState(false);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onUpdate(values).then(() => {
      setIsEditProfile(false);
    });
  };

  const validityCheck =
    !isValid ||
    (currentUser.name === values.name && currentUser.email === values.email);

  const handleLogOut = () => {
    onLogout();
    resetMoviesValues();
  };

  const openEditProfile = (e) => {
    e.preventDefault();
    setIsEditProfile(true);
  };

  return (
    <section className='profile'>
      <h1 className='profile__title'>Привет, {currentUser.name}!</h1>
      <form
        className='profile__form'
        name='profile'
        noValidate
        onSubmit={handleSubmit}
        autoComplete="off"
      >
        <label className='profile__form-label' htmlFor='name'>
          <span className='profile__form-span'>Имя</span>
          <input
            className={`profile__form-input ${
              errors.name && "profile__input_type_error"
            }`}
            name='name'
            type='text'
            required
            disabled={!isEditProfile}
            minLength='2'
            maxLength='30'
            placeholder='Введите имя'
            pattern={"^[а-яА-Яa-zA-Z0-9]+$"}
            value={values.name}
            onChange={handleChange}
          />
          <span className='profile__error'>{errors.name || ""}</span>
        </label>
        <label className='profile__form-label' htmlFor='email'>
          <span className='profile__form-span'>E-mail</span>
          <input
            className={`profile__form-input ${
              errors.email && "profile__input_type_error"
            }`}
            name='email'
            type='email'
            required
            disabled={!isEditProfile}
            placeholder='Введите почту'
            value={values.email}
            onChange={handleChange}
          />
          <span className='profile__error'>{errors.email || ""}</span>
        </label>
        {!isEditProfile ? (
          <div className='profile__buttons-container'>
            <button
              className='profile__edit-button'
              type='button'
              onClick={openEditProfile}
            >
              Редактировать
            </button>
            <button
              className='profile__logout-button'
              type='button'
              onClick={handleLogOut}
            >
              Выйти из аккаунта
            </button>
          </div>
        ) : (
          <div className='profile__buttons-container'>
            <button
              className='profile__edit-button'
              type='submit'
              disabled={validityCheck}
            >
              Сохранить
            </button>
            <button
              className='profile__logout-button'
              type='button'
              onClick={handleLogOut}
            >
              Выйти из аккаунта
            </button>
          </div>
        )}
      </form>
    </section>
  );
}
