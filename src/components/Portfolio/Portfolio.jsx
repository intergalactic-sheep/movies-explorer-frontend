import "./Portfolio.css";

export default function Portfolio() {
  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <div className="portfolio__link-container">
        <a className="portfolio__link" href="." alt="Ссылка на статичный сайт">
          Статичный сайт
        </a>
        <button className="portfolio__button" />
      </div>
      <span className="portfolio__line"></span>
      <div className="portfolio__link-container">
        <a className="portfolio__link" href="." alt="Ссылка на адаптивный сайт">
          Адаптивный сайт
        </a>
        <button className="portfolio__button" />
      </div>
      <span className="portfolio__line"></span>
      <div className="portfolio__link-container">
        <a
          className="portfolio__link"
          href="."
          alt="Ссылка на одностраничное приложение"
        >
          Одностраничное приложение
        </a>
        <button className="portfolio__button" />
      </div>
    </section>
  );
}
