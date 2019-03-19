import React, {Component} from 'react';
import './map.css';
import MapFilters from '../../components/map-filters/map-filters';

import Pin from "../pin/pin";
import Card from '../card/card';
import MainPin from '../main-pin/main-pin';

// a.b = 1
// a['b'] = 1
//
// const name = 'b'
// a[name]

export default class Map extends Component {
  state = {
    filters: {
      type: 'any',
      price: 'any',
      rooms: 'any',
      guests: 'any',
      wifi: false,
      dishwasher: false,
      parking: false,
      washer: false,
      elevator: false,
      conditioner: false
    }
  };

  onMainPinClick = () => {
    this.props.onActivate()
  };

  onFiltersChange = (name, value) => {

    const newFilters = {
      ...this.state.filters,
    };
    newFilters[name] = value;

    this.setState({
      filters: newFilters,
    });

    this.props.onChange()
  };

  filterHouses(houses) {
    const {type, price, rooms, guests, wifi, dishwasher, parking, washer, elevator, conditioner} = this.state.filters;

    return houses.filter(house => {
      if (wifi && !house.offer.features.includes('wifi')) {
        return false;
      }

      if (type !== 'any' && (house.offer.type !== type)) {
        return false
      }

      if (rooms !== 'any' && (house.offer.rooms !== parseInt(rooms, 10))) {
        return false
      }

      if (guests !== 'any' && (house.offer.guests !== parseInt(guests, 10))) {
        return false
      }

      if (price !== 'any') {
        if (price === 'low' && house.offer.price >= 10000) {
          return false;
        }
        if (price === 'middle' && (house.offer.price < 10000 || house.offer.price >= 50000)) {
          return false;
        }
        if (price === 'high' && house.offer.price < 50000) {
          return false;
        }
      }

      if (wifi && !house.offer.features.includes('wifi')) {
        return false;
      }
      if (dishwasher && !house.offer.features.includes('dishwasher')) {
        return false;
      }
      if (parking && !house.offer.features.includes('parking')) {
        return false;
      }
      if (washer && !house.offer.features.includes('washer')) {
        return false;
      }
      if (elevator && !house.offer.features.includes('elevator')) {
        return false;
      }
      if (conditioner && !house.offer.features.includes('conditioner')) {
        return false;
      }

      return true
    })
  }

  render() {
    const {houses, onHouseSelected, selectedHouse, isActive, userCoordinates, onMainPinCoordinatesChange} = this.props;
    const {filters} = this.state;

    let mapClassNames = 'map map--faded';
    let renderNewPins = '';

    let newMapClass = mapClassNames.replace(' map--faded', '');
    const filtered = this.filterHouses(houses);
    let newPins = filtered.map((item) => {
      return <Pin
        onSelect={onHouseSelected}
        key={item.offer.title}
        item={item}
      />
    });

    if (isActive) {
      mapClassNames = newMapClass;
      renderNewPins = newPins;
    }

    let card = '';

    if (selectedHouse) {
      card = <Card
        key={selectedHouse.offer.address}
        item={selectedHouse}
      />;
    }

    return (
      <section className={mapClassNames}>
        <div className="map__pins">
          <div className="map__overlay">
            <h2 className="map__title">И снова Токио!</h2>
          </div>
         <MainPin userCoordinates={userCoordinates} onCoordinatesChange={onMainPinCoordinatesChange} onClick={this.onMainPinClick}/>
          {renderNewPins}
        </div>
        {card}
        <MapFilters
          filters={filters}
          onChange={this.onFiltersChange}/>
      </section>
    )
  }
}