import "./Profile.css";

export default function Profile({ onLogout }) {
  return (
    <section className="profile">
      <h1 className="profile__title">Привет, Виталий!</h1>
      <form className="profile__form">
        <label className="profile__form-label">
          <span className="profile__form-span">Имя</span>
          <input
            className="profile__form-input"
            name="name"
            type="text"
            required
            disabled
            minLength="2"
            maxLength="30"
            placeholder="Введите имя"
            value="Виталий"
          />
        </label>
        <label className="profile__form-label">
          <span className="profile__form-span">E-mail</span>
          <input
            className="profile__form-input"
            name="email"
            type="email"
            required
            disabled
            placeholder="Введите почту"
            value="pochta@yandex.ru"
          />
        </label>
        <div className="profile__buttons-container">
          <button className="profile__edit-button">Редактировать</button>
          <button className="profile__logout-button" onClick={onLogout}>Выйти из аккаунта</button>
        </div>
      </form>
    </section>
  );
}
