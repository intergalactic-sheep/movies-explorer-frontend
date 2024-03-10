import "./Login.css";
import logo from "../../images/logo_header.svg";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import useFormWithValidation from "../../hooks/useFormWithValidation";

export default function Login({ onLogin }) {
  const { values, handleChange, resetForm, errors, isValid } =
    useFormWithValidation();

  useEffect(() => {
    resetForm();
  }, [resetForm]);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onLogin(values);
    resetForm();
  };

  return (
    <section className='login'>
      <div className='login__container'>
        <Link to='/'>
          <img className='login__logo' src={logo} alt='Логотип' />
        </Link>
        <h1 className='login__title'>Рады видеть!</h1>
        <form className='login__form' noValidate onSubmit={handleSubmit}>
          <label className='login__label'>
            <span className='login__label-text'>E-mail</span>
            <input
              className={`login__input ${
                errors.email && "login__input_type_error"
              }`}
              name='email'
              type='email'
              value={values.email || ''}
              onChange={handleChange}
              required
              placeholder='Введите почту'
            />
            <span className='login__error'>{errors.email || ""}</span>
          </label>
          <label className='login__label'>
            <span className='login__label-text'>Пароль</span>
            <input
              className='login__input'
              name='password'
              type='password'
              value={values.password || ''}
              onChange={handleChange}
              minLength='6'
              maxLength='30'
              required
              placeholder='Введите пароль'
            />
            <span className='login__error'>{errors.password || ""}</span>
          </label>
          <button
            type='submit'
            className={`login__submit ${!isValid ? 'login__submit_type_disabled' : ''}`}
            disabled={!isValid}
          >
            Войти
          </button>
        </form>
        <p className='login__to-register'>
          Еще не зарегистрированы?{" "}
          <Link to='/signup' className='login__link'>
            Регистрация
          </Link>
        </p>
      </div>
    </section>
  );
}
