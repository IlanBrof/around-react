function PopupWithForm(props) {
    return (
        <div className={`popup-menu ${props.isOpen && 'popup-menu_opened'}`} id={`popup-menu_type_${props.name}`}>
        <div className="popup-menu__edit-form">
                <button className="popup-menu__close-button" onClick={ props.onClose } type="button" aria-label="close-button"></button>
                <h3 className="popup-menu__title">{ props.headerText }</h3>
            <form className="popup-menu__submit-form" name="form-wrapper" id="profile-form">
                {props.children}
            <button className="popup-menu__save-button" id="edit-profile_save-button" type="submit">Save</button>
          </form>
        </div>
      </div> 
    )
}

export default PopupWithForm;