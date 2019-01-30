import React from 'react';

const PriceInput = ({disabled, type, id}) => {

  let minPrice = 0;
  if (type === 'bungalo') {
    minPrice = 0
  }
  if (type === 'flat') {
    minPrice = 1000
  }
  if (type === 'house') {
    minPrice = 5000
  }
  if (type === 'palace') {
    minPrice = 10000
  }

  return <input id={id} name="price" type="number" placeholder={minPrice} required disabled={disabled}
    min="0"
    max="1000000"/>
};

export default PriceInput;