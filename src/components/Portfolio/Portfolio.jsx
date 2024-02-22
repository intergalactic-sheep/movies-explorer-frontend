import "./Portfolio.css";

export default function Portfolio() {
  return (
    <section className='portfolio'>
      <h2 className='portfolio__title'>Портфолио</h2>
      <ul className="portfolio__links">
        <li className='portfolio__link-container'>
          <a
            className='portfolio__link'
            href='https://github.com/intergalactic-sheep/how-to-learn'
            target='_blank'
            rel='noreferrer'
          >
            Статичный сайт
          </a>
          <button className='portfolio__button' />
        </li>
        <li className='portfolio__link-container'>
          <a
            className='portfolio__link'
            href='https://github.com/intergalactic-sheep/russian-travel'
            target='_blank'
            rel='noreferrer'
          >
            Адаптивный сайт
          </a>
          <button className='portfolio__button' />
        </li>
        <li className='portfolio__link-container'>
          <a
            className='portfolio__link'
            href='https://github.com/intergalactic-sheep/react-mesto-api-full-gha'
            target='_blank'
            rel='noreferrer'
          >
            Одностраничное приложение
          </a>
          <button className='portfolio__button' />
        </li>
      </ul>
    </section>
  );
}
