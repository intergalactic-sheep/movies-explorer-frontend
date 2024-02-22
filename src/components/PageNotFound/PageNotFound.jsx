import './PageNotFound.css';

export default function PageNotFound({ onReturn }) {

  return (
    <section className='not-found'>
        <h2 className='not-found__404'>404</h2>
        <p className='not-found__message'>Страница не найдена</p>
        <p className='not-found__link' onClick={onReturn}>Назад</p>
    </section>
  )
}
