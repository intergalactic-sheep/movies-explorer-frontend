import "./AboutProjects.css";

export default function AboutProjects() {
  return (
    <section className="about-projects">
      <a name="about-project"></a>
      <h2 className="about-projects__title">О проекте</h2>
      <span className="about-projects__line"></span>
      <div className="about-projects__container">
        <article className="about-projects__paragraph">
          <h3 className="about-projects__subtitle">
            Дипломный проект включал 5 этапов
          </h3>
          <p className="about-projects__text">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </article>
        <article className="about-projects__paragraph">
          <h3 className="about-projects__subtitle">
            На выполнение диплома ушло 5 недель
          </h3>
          <p className="about-projects__text">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </article>
      </div>
      <div className="about-projects__progress">
        <div className="about-projects__backend">
          <span className="about-projects__backend-span">1 неделя</span>
          <span className="about-projects__stage-name">Back-end</span>
        </div>
        <div className="about-projects__frontend">
          <span className="about-projects__frontend-span">4 недели</span>
          <span className="about-projects__stage-name">Front-end</span>
        </div>
      </div>
    </section>
  );
}
