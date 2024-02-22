import "./Footer.css";

export default function Footer() {
  return (
    <footer className='footer'>
      <p className='footer__description'>
        Учебный проект Яндекс.Практикум x BeatFilm
      </p>
      <div className='footer__container'>
        <p className='footer__date'>© 2024</p>
        <ul className='footer__links'>
          <li>
            <a
              className='footer__link'
              href='https://practicum.yandex.ru'
              target='_blank'
              rel='noreferrer'
            >
              Яндекс.Практикум
            </a>
          </li>
          <li>
            <a
              className='footer__link'
              href='https://github.com/intergalactic-sheep'
              target='_blank'
              rel='noreferrer'
            >
              GitHub
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
