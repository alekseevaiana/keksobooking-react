import React from 'react';
import './promo.css';

import keksobookingImg from '../../img/keksobooking.svg'

const Promo = () => {
  return (
    <div className="promo">
      <h1 className="promo__title visually-hidden">Keksobooking. Кексы по соседству</h1>
      <img src={keksobookingImg} alt="Keksobooking. Кексы по соседству" width="215" height="45"/>
    </div>
  )
};
export default Promo;