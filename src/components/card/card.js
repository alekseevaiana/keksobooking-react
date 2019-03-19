import React, {Component} from 'react';

export default class Card extends Component {
  render() {

    const {item, closeCard} = this.props;

    const featuresList = item.offer.features.map((feature) => {
      return <li className={`popup__feature popup__feature--${feature}`}/>
    });

    const addPhotos = item.offer.photos.map((photo) => {
      return <img src={photo} className="popup__photo" width="45" height="40" alt="Фотография жилья"/>
    });

    let typeName = item.offer.type;

    if (item.offer.type === 'flat') {
      typeName = 'Квартира'
    }
    if (item.offer.type === 'bungalo') {
      typeName = 'Бунгало'
    }
    if (item.offer.type === 'palace') {
      typeName = 'Дворец'
    }
    if (item.offer.type === 'house') {
      typeName = 'Дом'
    }

    return (
      <section id="card">
        <article className="map__card popup">
          <img src={item.author.avatar} className="popup__avatar" width="70" height="70" alt="Аватар пользователя"/>
            <button type="button" className="popup__close" tabIndex="0" onClick={closeCard}>Закрыть</button>
            <h3 className="popup__title">{item.offer.title}</h3>
            <p className="popup__text popup__text--address">{item.offer.address}</p>
            <p className="popup__text popup__text--price">{item.offer.price}&#x20bd;<span>/ночь</span></p>
            <h4 className="popup__type">{typeName}</h4>
            <p className="popup__text popup__text--capacity">{item.offer.rooms} комнаты для {item.offer.guests} гостей</p>
            <p className="popup__text popup__text--time">Заезд после {item.offer.checkin}, выезд до {item.offer.checkout}</p>
            <ul className="popup__features">
              {featuresList}
            </ul>
            <p className="popup__description">{item.offer.description}</p>
            <div className="popup__photos">
              {addPhotos}
            </div>
        </article>
      </section>
    )
  }
}