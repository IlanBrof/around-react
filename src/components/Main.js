import React from "react";
import { api } from '../utils/api';
import Card from './Card'

function Main(props) {

  const [user, setUser] = React.useState({});
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api.getUserInfo()
      .then(data => {
        setUser({
          name: data.name,
          about: data.about,
          avatar: data.avatar,
        });
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  React.useEffect(() => {
    api.getInitialCards()
      .then(data => {
        setCards(data);
      })
      .catch(err => {
        console.log(err);
      });
  })

    return(
        <main className="main">
        <section className="profile-menu">
          <div className="profile-menu__profile-pic">
            <img className="profile-menu__avatar" src={ user.avatar } id="avatar_image" alt=""></img>
                    <button onClick={ props.onEditAvatarClick } className="profile-menu__avatar-button" type="button"></button>
          </div>
          <div className="profile-menu__info">
            <div className="profile-menu__alignment">
              <h1 className="profile-menu__full-name">{ user.name }</h1>
                        <button onClick={ props.onEditProfileClick }className="profile-menu__edit-button" type="button" aria-label="edit-button"></button>
            </div>
            <p className="profile-menu__title">{ user.about }</p>
          </div>
                <button onClick={ props.onAddPlaceClick } className="profile-menu__add-button" type="button" aria-label="add-button"></button>
        </section>

        <section className="cards">
        <ul className="cards__list">
          {
            cards.map((element) => (
              <Card key={element._id} card={element} onClick={ props.onCardImageClick } updateCardData={ props.updateCardData } />
            ))
            }
            </ul>
        </section>

        
      </main>
    )
}

export default Main;