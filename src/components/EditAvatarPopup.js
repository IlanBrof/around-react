// import React from 'react';
import PopupWithForm from './PopupWithForm';
import { useRef } from 'react';

function EditAvatarPopup(props) {
  const avatarRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    props.onUpdateAvatar({
      avatar: avatarRef.current.value,
    });
    e.target.reset();
  }

  return (
    <PopupWithForm
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
      name="change-profilePic"
      headerText="Change Profile Picture"
      buttonText="Save"
    >
      <input
        ref={avatarRef}
        className="popup-menu__input popup-menu__input_type_url"
        name="link"
        type="text"
        placeholder="Profile Image link"
      />
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
