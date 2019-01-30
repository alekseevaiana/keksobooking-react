import React from 'react';
import './ad-form.css';

import avatarImg from '../../img/muffin-grey.svg';
import TypeSelect from '../../components/type-select/type-select';
import PriceInput from '../../components/price-input/price-input';

const TimeInSelect = ({disabled, onChange, checkout, id}) => {
  const onCheckinChange = (evt) => {
    onChange(evt.target.value)
  };

  let time = "12:00";

  if (checkout === "13:00") {
    time = "13:00"
  }

  if (checkout === "14:00") {
    time = "14:00"
  }

  return (
    <select id={id} name="timein" disabled={disabled} onChange={onCheckinChange} value={time}>
      <option value="12:00">После 12</option>
      <option value="13:00">После 13</option>
      <option value="14:00">После 14</option>
    </select>
  )
};

const TimeOutSelect = ({disabled, onChange, checkin, id}) => {
  const onCheckOutChange = (evt) => {
    onChange(evt.target.value)
  };

  return (
    <select id={id} name="timeout" disabled={disabled} onChange={onCheckOutChange}>
      <option value="12:00">После 12</option>
      <option value="13:00">После 13</option>
      <option value="14:00">После 14</option>
    </select>
  )
};

export default class AdForm extends React.Component {
  state = {
    type: 'flat',
    checkin: '12:00',
    checkout: '12:00'
  };

  onTypeChange = (type) => {
    this.setState({type})
  };

  onCheckInChange = (checkin) => {
    this.setState({checkin})
  };

  onCheckOutChange = (checkout) => {
    this.setState({checkout})
  };

  render() {
    const {isActive, onClear} = this.props;

    return (
      <form className="ad-form "
        method="post"
        encType="multipart/form-data"
        action="https://js.dump.academy/keksobooking"
        autoComplete="off"
      >
        <fieldset className="ad-form-header">
          <legend className="ad-form-header__title">Ваша фотография (для карты)</legend>
          <div className="ad-form-header__upload">
            <div className="ad-form-header__preview">
              <img src={avatarImg} alt="Аватар пользователя" width="40" height="44"/>
            </div>
            <div className="ad-form__field">
              <input type="file" id="avatar" name="avatar" className="ad-form-header__input visually-hidden"
                disabled={!isActive}/>
              <label className="ad-form-header__drop-zone" htmlFor="avatar">Загрузите или&nbsp;перетащите сюда
                фото</label>
            </div>
            <p className="ad-form-header__info">Заполните все обязательные поля, назначьте цену, загрузите
              фотографии. Придумайте интересное описание. Оно сделает объявление более живым и привлекательным.
              Получившееся объявление должно давать гостям полное представление о вашем жилье.</p>
          </div>
        </fieldset>
        <fieldset className="ad-form__element ad-form__element--wide">
          <label className="ad-form__label" htmlFor="title">Заголовок объявления</label>
          <input id="title" name="title" type="text" placeholder="Милая, уютная квартирка в центре Токио" required
            disabled={!isActive}
            minLength="30"
            maxLength="100"
          />
        </fieldset>
        <fieldset className="ad-form__element ad-form__element--wide">
          <label className="ad-form__label" htmlFor="address">Адрес</label>
          <input id="address" name="address" type="text" readOnly disabled={!isActive}/>
        </fieldset>
        <fieldset className="ad-form__element">
          <label className="ad-form__label" htmlFor="type">Тип жилья</label>




          <TypeSelect
            disabled={!isActive}
            value={this.state.type} id="type"
            onChange={this.onTypeChange}/>


        </fieldset>
        <fieldset className="ad-form__element">
          <label className="ad-form__label" htmlFor="price">Цена за ночь, руб.</label>


          <PriceInput
            disabled={!isActive}
            type={this.state.type}
            id="price"/>


        </fieldset>

        <fieldset className="ad-form__element ad-form__element--time">
          <label className="ad-form__label" htmlFor="timein">Время заезда и выезда</label>












          <TimeInSelect
            disabled={!isActive}
            checkin={this.state.checkin}
            checkout={this.state.checkout}
            onChange={this.onCheckInChange}
            id="timein"
          />
          <TimeOutSelect
            disabled={!isActive}
            checkout={this.state.checkout}
            checkin={this.state.checkin}
            onChange={this.onCheckOutChange}
            id="timeout"
          />













        </fieldset>

        <fieldset className="ad-form__element">
          <label className="ad-form__label" htmlFor="room_number">Кол-во комнат</label>
          <select id="room_number" name="rooms" required disabled={!isActive}>
            <option value="1" selected>1 комната</option>
            <option value="2">2 комнаты</option>
            <option value="3">3 комнаты</option>
            <option value="100">100 комнат</option>
          </select>
        </fieldset>
        <fieldset className="ad-form__element">
          <label className="ad-form__label" htmlFor="capacity">Количество мест</label>
          <select id="capacity" name="capacity" required disabled={!isActive}>
            <option value="3" selected>для 3 гостей</option>
            <option value="2">для 2 гостей</option>
            <option value="1">для 1 гостя</option>
            <option value="0">не для гостей</option>
          </select>
        </fieldset>

        <fieldset className="ad-form__element ad-form__element--wide features">
          <legend>Удобства: Wi-Fi, кухня, парковка, стиралка, лифт, кондиционер</legend>
          <input type="checkbox" name="features" value="wifi" id="feature-wifi"
            className="feature__checkbox visually-hidden" disabled={!isActive}/>
          <label className="feature feature--wifi" htmlFor="feature-wifi">Wi-Fi</label>
          <input type="checkbox" name="features" value="dishwasher" id="feature-dishwasher"
            className="feature__checkbox visually-hidden" disabled={!isActive}/>
          <label className="feature feature--dishwasher" htmlFor="feature-dishwasher">Посудомоечная
            машина</label>
          <input type="checkbox" name="features" value="parking" id="feature-parking"
            className="feature__checkbox visually-hidden" disabled={!isActive}/>
          <label className="feature feature--parking" htmlFor="feature-parking">Парковка</label>
          <input type="checkbox" name="features" value="washer" id="feature-washer"
            className="feature__checkbox visually-hidden" disabled={!isActive}/>
          <label className="feature feature--washer" htmlFor="feature-washer">Стиральная машина</label>
          <input type="checkbox" name="features" value="elevator" id="feature-elevator"
            className="feature__checkbox visually-hidden" disabled={!isActive}/>
          <label className="feature feature--elevator" htmlFor="feature-elevator">Лифт</label>
          <input type="checkbox" name="features" value="conditioner" id="feature-conditioner"
            className="feature__checkbox visually-hidden" disabled={!isActive}/>
          <label className="feature feature--conditioner"
            htmlFor="feature-conditioner">Кондиционер</label>
        </fieldset>

        <fieldset className="ad-form__element ad-form__element--wide">
          <label className="ad-form__label" htmlFor="description">Описание (не обязательно)</label>
          <textarea id="description" name="description"
            placeholder="Здесь расскажите о том, какое ваше жилье замечательное и вообще" disabled={!isActive}/>
        </fieldset>

        <fieldset className="ad-form__element ad-form__element--wide">
          <label className="ad-form__label">Фотографии жилья</label>
          <div className="ad-form__photo-container">
            <div className="ad-form__upload">
              <input type="file" id="images" name="images" className="ad-form__input visually-hidden"
                disabled={!isActive}/>
              <label htmlFor="images" className="ad-form__drop-zone">Загрузите или&nbsp;перетащите сюда
                фото</label>
            </div>
            <div className="ad-form__photo"/>
          </div>
        </fieldset>
        <fieldset className="ad-form__element ad-form__element--submit">
          <button className="ad-form__submit" type="submit">Опубликовать</button>
          или <button className="ad-form__reset" type="reset" onClick={onClear}>очистить</button>
        </fieldset>
      </form>
    )
  }
}


