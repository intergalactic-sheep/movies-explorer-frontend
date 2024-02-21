import "./SwitchCheckbox.css";

export default function SwitchCheckbox() {
  return (
    <section className="switch__container">
      <label className="switch">
        <input type="checkbox" className="switch__input" />
        <span className="switch__slider" />
      </label>
      <p className="switch__description">Короткометражки</p>
    </section>
  );
}
