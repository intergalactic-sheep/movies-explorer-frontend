import './PageNotFound.css';

export default function PageNotFound() {
  return (
    <section className='not-found'>
        <h2 className='not-found__404'>404</h2>
        <p className='not-found__message'>Страница не найдена</p>
        <a className='not-found__link' href='.' alt='Вернуться назад'>Назад</a>
    </section>
  )
}
