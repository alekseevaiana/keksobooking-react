import React, {Component} from 'react';

export default class Card extends Component {
  render() {
    const {item} = this.props;
    return (
      <section id="card">
        <article className="map__card popup">
          <img src={item.author.avatar} className="popup__avatar" width="70" height="70" alt="Аватар пользователя"/>
            <button type="button" className="popup__close" tabIndex="0">Закрыть</button>
            <h3 className="popup__title">{item.offer.title}</h3>
            <p className="popup__text popup__text--address">{item.offer.address}</p>
            <p className="popup__text popup__text--price">{item.offer.price}&#x20bd;<span>/ночь</span></p>
            <h4 className="popup__type">Квартира</h4>
            <p className="popup__text popup__text--capacity">{item.offer.rooms} комнаты для {item.offer.guests} гостей</p>
            <p className="popup__text popup__text--time">Заезд после {item.offer.checkin}, выезд до {item.offer.checkout}</p>
            <ul className="popup__features">
              <li className="popup__feature popup__feature--wifi"></li>
              <li className="popup__feature popup__feature--dishwasher"></li>
              <li className="popup__feature popup__feature--parking"></li>
              <li className="popup__feature popup__feature--washer"></li>
              <li className="popup__feature popup__feature--elevator"></li>
              <li className="popup__feature popup__feature--conditioner"></li>
            </ul>
            <p className="popup__description">{item.offer.description}</p>
            <div className="popup__photos">
              <img src="" className="popup__photo" width="45" height="40" alt="Фотография жилья"/>
            </div>
        </article>
      </section>
    )
  }
}