function Card(props) {

    const imageDataForPopup = () => {
        props.onClick();
        props.updateCardData(props.card);
    }

    return (
    <li className="card">
    <button className="card__erase" type="button" aria-label="erase-button"></button>
            <img className="card__image" onClick={ imageDataForPopup } src={ props.card.link } alt="" />
    <div className="card__photo-description">
            <h2 className="card__text">{ props.card.name }</h2>
      <div className="card__heart-container">
        <button className="card__like-button" type="button" aria-label="like-button"></button>
                <span className="card__like-count">{ props.card.likes.length }</span>
      </div>

    </div>
    </li>
    );
}

export default Card;