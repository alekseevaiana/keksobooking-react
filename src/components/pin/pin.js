import React, {Component} from 'react';

export default class Pin extends Component {

  render() {
    const {item, onPinClicked} = this.props;
    const pinLocation = {left: item.location.x + 'px', top: item.location.y + 'px'};
    return (
      <div id="pin">
        <button
          onClick={onPinClicked}
          type="button"
          className="map__pin"
          style={pinLocation}>
          <img src={item.author.avatar} width="40" height="40" draggable="false" alt="Метка объявления"/></button>
      </div>
    )
  };
};