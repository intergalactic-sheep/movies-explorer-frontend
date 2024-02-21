import "./Login.css";
import logo from "../../images/logo_header.svg";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <section className="login">
      <div className="login__container">
        <Link to="/">
          <img className="login__logo" src={logo} alt="Логотип" />
        </Link>
        <h1 className="login__title">Рады видеть!</h1>
        <form className="login__form">
          <label className="login__label">
            <span className="login__label-text">E-mail</span>
            <input
              className="login__input"
              name="email"
              type="email"
              required
              placeholder="Введите почту"
            />
          </label>
          <label className="login__label">
            <span className="login__label-text">Пароль</span>
            <input
              className="login__input"
              name="password"
              type="password"
              minLength="6"
              maxLength="30"
              required
              placeholder="Введите пароль"
            />
          </label>
          <button type="submit" className="login__submit">
            Войти
          </button>
        </form>
        <p className="login__to-register">
          Еще не зарегистрированы?{" "}
          <Link to="/signup" className="login__link">
            Регистрация
          </Link>
        </p>
      </div>
    </section>
  );
}
