import AboutMe from '../AboutMe/AboutMe';
import AboutProjects from '../AboutProjects/AboutProjects';
import Portfolio from '../Portfolio/Portfolio';
import Promo from '../Promo/Promo';
import Techs from '../Techs/Techs';
import './Main.css';

function Main() {
  return(
    <>
      <main className='main'>
        <Promo />
        <AboutProjects />
        <Techs />
        <AboutMe />
        <Portfolio />
      </main>
    </>
  )
}

export default Main;