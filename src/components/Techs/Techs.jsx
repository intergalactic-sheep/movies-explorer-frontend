import "./Techs.css";

export default function Techs() {
  return (
    <section className="techs">
      <a name='techs'></a>
      <div className="techs__util-container">
        <h2 className="techs__title">Технологии</h2>
        <div className="techs__line"></div>
        <div className="techs__container">
          <h3 className="techs__subtitle">7 технологий</h3>
          <p className="techs__description">
            На курсе веб-разработки мы освоили технологии, которые применили в
            дипломном проекте.
          </p>
          <ul className="techs__card-container">
            <li className="techs__card">
              <p className="techs__tool">HTML</p>
            </li>
            <li className="techs__card">
              <p className="techs__tool">CSS</p>
            </li>
            <li className="techs__card">
              <p className="techs__tool">JS</p>
            </li>
            <li className="techs__card">
              <p className="techs__tool">React</p>
            </li>
            <li className="techs__card">
              <p className="techs__tool">Git</p>
            </li>
            <li className="techs__card">
              <p className="techs__tool">Express.js</p>
            </li>
            <li className="techs__card">
              <p className="techs__tool">mongoDB</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
