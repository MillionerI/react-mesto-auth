import React from 'react';

export default function PopupWithForm({
  name, title, buttonText, isOpen, onClose, onSubmit, children,
}) {
  return (
		<div className={isOpen ? `popup popup_type_${name} popup_opened` : `popup popup_type_${name}`}>
			<div className="popup__container">
	      <form name={name} action="#" onSubmit={onSubmit} className="popup__form">
	        <button type="button" className="popup__button-close" onClick={onClose}/>
	        <h2 className="popup__title">{title}</h2>
	        {children}
	        <button type="submit" className="popup__form-button">{buttonText}</button>
	      </form>
	    </div>
	  </div>
  );
}
