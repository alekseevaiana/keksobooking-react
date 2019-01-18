import React, {Component} from 'react';
import './map.css';
import MapFilters from '../map-filters/map-filters';

import mapPinImg from '../../img/muffin-red.svg';
import Pin from "../pin/pin";
import Card from '../card/card';


export default class Map extends Component {
  state = {
    onMainPinClicked: false,
    onPinClicked: false
  };

  onMainPinClick = () => {
    this.setState({
      onMainPinClicked: true,
    })
  };

  onPinClick = () => {
    this.setState({onPinClicked: true
    })
  };

  render() {
    const {houses} = this.props;
    const {onMainPinClicked, onPinClicked} = this.state;

    let mapClassNames = 'map map--faded';
    let renderNewPins = '';

    let newMapClass = mapClassNames.replace(' map--faded', '');
    let newPins = houses.map((item) => {
      return <Pin
        key={item.id}
        item={item}
        onPinClicked={() => (console.log('hi', item.id))}/>
    });

    if (onMainPinClicked) {
      mapClassNames = newMapClass;
      renderNewPins = newPins;
    }

    let card = '';

    // const createNewCard = (houses) => {
    //   return <Card
    //     key={houses[0].id}
    //   />
    // };

    // if (onPinClicked) {
    //   card = createNewCard;
    // }


    return (
      <section className={mapClassNames}>
        <div className="map__pins">
          <div className="map__overlay">
            <h2 className="map__title">И снова Токио!</h2>
          </div>
          <button
            className="map__pin map__pin--main" style={{left: 570 + 'px', top: 375 + 'px'}}
            onClick={this.onMainPinClick}>
            <img src={mapPinImg} width="40" height="44" draggable="false" alt="Метка объявления"/>
            <svg viewBox="0 0 70 70" width="156" height="156" aria-label="Метка для поиска жилья">
              <defs>
                <path d="M35,35m-23,0a23,23 0 1,1 46,0a23,23 0 1,1 -46,0" id="tophalf"/>
              </defs>
              <ellipse cx="35" cy="35" rx="35" ry="35" fill="rgba(255, 86, 53, 0.7)"/>
              <text>
                {/*<textPath xlink:href="#tophalf" startOffset="0">Поставь меня куда-нибудь</textPath>*/}
              </text>
            </svg>
          </button>
          {renderNewPins}
        </div>
        {card}
        <MapFilters/>
      </section>
    )
  }
}