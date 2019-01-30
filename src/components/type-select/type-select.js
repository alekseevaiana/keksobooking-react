import React from 'react';

const TypeSelect = ({type, onChange, disabled, id}) => {
  const onSelectChange = (evt) => {
    onChange(evt.target.value)
  };

  return <select value={type} id={id} name="type" disabled={disabled} onChange={onSelectChange}>
    <option value="bungalo">Бунгало</option>
    <option value="flat" selected>Квартира</option>
    <option value="house">Дом</option>
    <option value="palace">Дворец</option>
  </select>
};

export default TypeSelect