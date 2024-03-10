import "./Register.css";
import logo from "../../images/logo_header.svg";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import useFormWithValidation from "../../hooks/useFormWithValidation";

export default function Register({ onRegister }) {
  const { values, handleChange, resetForm, errors, isValid } =
    useFormWithValidation();

  useEffect(() => {
    resetForm();
  }, [resetForm]);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onRegister(values);
    resetForm();
  };

  return (
    <section className='register'>
      <div className='register__container'>
        <Link to='/'>
          <img className='register__logo' src={logo} alt='Логотип' />
        </Link>
        <h2 className='register__title'>Добро пожаловать!</h2>
        <form
          className='register__form'
          name='register'
          noValidate
          onSubmit={handleSubmit}
        >
          <label className='register__label'>
            <span className='register__label-text'>Имя</span>
            <input
              className={`register__input ${
                errors.name && "register__input_type_error"
              }`}
              name='name'
              type='text'
              required
              placeholder='Введите имя'
              value={values.name || ""}
              minLength={2}
              maxLength={30}
              pattern='^[a-zA-Zа-яА-Я\s\-]+$'
              onChange={handleChange}
            />
            <span className='register__error'>{errors.name || ""}</span>
          </label>
          <label className='register__label'>
            <span className='register__label-text'>E-mail</span>
            <input
              className={`register__input ${
                errors.email && "register__input_type_error"
              }`}
              name='email'
              type='email'
              value={values.email || ""}
              onChange={handleChange}
              required
              placeholder='Введите почту'
            />
            <span className='register__error'>{errors.email || ""}</span>
          </label>
          <label className='register__label'>
            <span className='register__label-text'>Пароль</span>
            <input
              className={`register__input ${
                errors.password && "register__input_type_error"
              }`}
              name='password'
              type='password'
              value={values.password || ""}
              onChange={handleChange}
              minLength='6'
              maxLength='30'
              required
              placeholder='Введите пароль'
            />
            <span className='register__error'>{errors.password || ""}</span>
          </label>
          <button
            type='submit'
            className={`register__submit ${!isValid ? 'register__submit_type_disabled' : ''}`}
            disabled={!isValid}
          >
            Зарегистрироваться
          </button>
        </form>
        <p className='register__to-login'>
          Уже зарегистрированы?{" "}
          <Link to='/signin' className='register__link'>
            Войти
          </Link>
        </p>
      </div>
    </section>
  );
}
