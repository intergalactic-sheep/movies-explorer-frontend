import './NavTab.css';

export default function NavTab() {
  return (
    <nav className='navtab'>
      <a className='navtab__button' href='#about-project' rel='noopener noreferrer'>О проекте</a>
      <a className='navtab__button' href='#techs' rel='noopener noreferrer'>Технологии</a>
      <a className='navtab__button' href='#about-me' rel='noopener noreferrer'>Студент</a>
    </nav>
  )
}
