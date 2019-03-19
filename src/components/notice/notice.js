import React from 'react';
import './notice.css';
import AdForm from '../../components/ad-form/ad-form';


const Notice = ({isActive, onClear, formValues, userCoordinates}) => {
  return (
    <section className="notice">
      <h2 className="notice__title">Ваше объявление</h2>
    <AdForm
      isActive={isActive}
      values={formValues}
      onClear={onClear}
      userCoordinates={userCoordinates}/>
    </section>
  )
};

export default Notice;