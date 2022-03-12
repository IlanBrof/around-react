import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddCardPopupOpen, setIsAddCardPopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isCardImagePopupOpen, setIsCardImagePopupOpen] = React.useState(false);
  const [cardData, setCardData] = React.useState({});

  function handleEditProfilePopupClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlacePopupClick() {
    setIsAddCardPopupOpen(true);
  }

  function handleEditAvatarPopupClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleCardImagePopupClick() {
    setIsCardImagePopupOpen(true);
  }

  function handleCardData(cardData) {
    setCardData(cardData);
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddCardPopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsCardImagePopupOpen(false);
  }

  return (
    <div className="page-container">

      <Header />
      <Main
        onEditProfileClick={handleEditProfilePopupClick}
        onAddPlaceClick={handleAddPlacePopupClick}
        onEditAvatarClick={handleEditAvatarPopupClick}
        onCardImageClick={handleCardImagePopupClick}
        updateCardData={handleCardData}
      />
      
      <Footer />
      <PopupWithForm name='edit-profile' isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} headerText="Edit profile" >
        <input className="popup-menu__input popup-menu__input_type_name" name='name' type='text' placeholder='Full Name' />
        <input className="popup-menu__input popup-menu__input_type_title" name='title' type='text' placeholder='Title' />
      </PopupWithForm>

      <PopupWithForm name='add-card' isOpen={isAddCardPopupOpen} onClose={closeAllPopups} headerText="New Place" >
        <input className="popup-menu__input popup-menu__input_type_title" name='userName' type='text' placeholder='Name' />
        <input className="popup-menu__input popup-menu__input_type_url" name='link' type='text' placeholder='Image link' />
      </PopupWithForm>

      <PopupWithForm name='change-profilePic' isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} headerText="Change Profile Picture" >
        <input className="popup-menu__input popup-menu__input_type_url" name='link' type='text' placeholder='Profile Image link' />
      </PopupWithForm>

      <ImagePopup isOpen={isCardImagePopupOpen} onClose={closeAllPopups} cardData={ cardData }/>

    </div>
  );
  
}
export default App;