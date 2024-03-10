import info_failed from "../../images/login_failed.svg";
import info_success from "../../images/login_success.svg";
import './InfoTooltip.css';

export default function InfoTooltip({ isOpen, loadStatus, onClose }) {
  return (
    <div className={`popup popup_type_info ${isOpen ? "popup_opened" : ""}`}>
      <div className='popup__container'>
        <button
          className='button popup__close-button'
          aria-label='Close'
          type='button'
          onClick={onClose}
        ></button>
        <img
          className='popup__info-image'
          src={loadStatus.status === true ? info_success : info_failed}
          alt='Статус запроса'
        />
        <h2 className='popup__info-title'>{loadStatus.message}</h2>
      </div>
    </div>
  );
}
