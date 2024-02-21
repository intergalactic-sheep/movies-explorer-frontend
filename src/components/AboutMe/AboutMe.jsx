import "./AboutMe.css";

export default function AboutMe() {
  return (
    <section className="about-me">
      <a name='about-me'></a>
      <h2 className="about-me__title">Студент</h2>
      <span className="about-me__line"></span>
      <div className="about-me__container">
        <article className="about-me__info">
          <h3 className="about-me__name">Егор</h3>
          <p className="about-me__occupation">Фронтенд-разработчик, 19 лет</p>
          <p className="about-me__description">
            Я живу в городе Санкт-Петербург. Люблю спорт и компьютерные игры.
            Начал изучать программирование в начале 2023 года. Близок к
            окончанию курса по веб-разработке. Планирую найти работу в IT-сфере
            в ближайшее время.
          </p>
          <a
            className="about-me__link"
            href="https://github.com/intergalactic-sheep"
            target="_blank"
            alt="Ссылка на GitHub" rel="noreferrer"
          >
            GitHub
          </a>
        </article>
        <img className="about-me__photo" src="." alt="Мое фото" />
      </div>
    </section>
  );
}
