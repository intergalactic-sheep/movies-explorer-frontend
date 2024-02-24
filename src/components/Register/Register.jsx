import "./Register.css";
import logo from "../../images/logo_header.svg";
import { Link } from "react-router-dom";

export default function Register() {
  return (
    <section className="register">
      <div className="register__container">
        <Link to="/">
          <img className="register__logo" src={logo} alt="Логотип" />
        </Link>
        <h2 className="register__title">Добро пожаловать!</h2>
        <form className="register__form">
          <label className="register__label">
            <span className="register__label-text">Имя</span>
            <input
              className="register__input"
              name="name"
              type="text"
              required
              placeholder="Введите имя"
              minLength={2}
              maxLength={30}
            />
          </label>
          <label className="register__label">
            <span className="register__label-text">E-mail</span>
            <input
              className="register__input"
              name="email"
              type="email"
              required
              placeholder="Введите почту"
            />
          </label>
          <label className="register__label">
            <span className="register__label-text">Пароль</span>
            <input
              className="register__input"
              name="password"
              type="password"
              minLength="6"
              maxLength="30"
              required
              placeholder="Введите пароль"
            />
          </label>
          <button type="submit" className="register__submit">
            Зарегистрироваться
          </button>
        </form>
        <p className="register__to-login">
          Уже зарегистрированы?{" "}
          <Link to='/signin' className="register__link">
            Войти
          </Link>
        </p>
      </div>
    </section>
  );
}
