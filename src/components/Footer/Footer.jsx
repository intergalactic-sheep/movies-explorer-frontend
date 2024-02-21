import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <p className="footer__description">
        Учебный проект Яндекс.Практикум x BeatFilm
      </p>
      <span className="footer__line"></span>
      <div className="footer__container">
        <p className="footer__date">© 2024</p>
        <a
          className="footer__link"
          href="https://practicum.yandex.ru"
          target="_blank"
          alt="Ссылка на Яндекс.Практикум"
          rel="noreferrer"
        >
          Яндекс.Практикум
        </a>
        <a
          className="footer__link"
          href="https://github.com/intergalactic-sheep"
          target="_blank"
          alt="Ссылка на GitHub"
          rel="noreferrer"
        >
          GitHub
        </a>
      </div>
    </footer>
  );
}
