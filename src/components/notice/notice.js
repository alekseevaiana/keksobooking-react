import React from 'react';
import './notice.css';
import AdForm from '../../components/ad-form/ad-form';


const Notice = () => {
  return (
    <section className="notice">
      <h2 className="notice__title">Ваше объявление</h2>
    <AdForm/>
    </section>
  )
};

export default Notice;