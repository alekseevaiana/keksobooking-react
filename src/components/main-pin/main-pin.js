import React, {Component} from 'react';
import mapPinImg from '../../img/muffin-red.svg';

export default class MainPin extends Component {
  constructor(props) {
    super(props)

    this.btn = React.createRef();
  }

  handleMouseDown = (evt) => {
    this.props.onClick()

    evt.preventDefault();

    var startCoordinats = {
      x: evt.clientX,
      y: evt.clientY
    };

    var onMouseMove =  (moveEvt) => {
      moveEvt.preventDefault();

      var shift = {
        x: startCoordinats.x - moveEvt.clientX,
        y: startCoordinats.y - moveEvt.clientY
      };

      startCoordinats = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };


      var top = this.btn.current.offsetTop - shift.y;
      var left = this.btn.current.offsetLeft - shift.x;

      // var pinCenterOffset = window.data.MainPinSize.CIRCLE_DIAMETER / 2;
      // var totalPinHeight = (window.data.MainPinSize.CIRCLE_DIAMETER + window.data.MainPinSize.POINT_HEIGHT);
      //
      // if (left < (window.data.PinLocation.LEFT_MIN - pinCenterOffset)) {
      //   left = window.data.PinLocation.LEFT_MIN - pinCenterOffset;
      // }
      //
      // if (left > (window.data.PinLocation.LEFT_MAX - pinCenterOffset)) {
      //   left = window.data.PinLocation.LEFT_MAX - pinCenterOffset;
      // }
      //
      // if (top < window.data.PinLocation.TOP_MIN - totalPinHeight) {
      //   top = window.data.PinLocation.TOP_MIN - totalPinHeight;
      // }
      //
      // if (top > window.data.PinLocation.TOP_MAX - totalPinHeight) {
      //   top = window.data.PinLocation.TOP_MAX - totalPinHeight;
      // }

      this.props.onCoordinatesChange({y: top, x: left})
    };

    var onMouseUp = function (upEvt) {
      upEvt.preventDefault();

      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  }

  render() {

    const {userCoordinates, onClick} = this.props;

    return (
      <button
        ref={this.btn}
        className="map__pin map__pin--main" style={{left: userCoordinates.x + 'px', top: userCoordinates.y + 'px'}}
        onMouseDown={this.handleMouseDown}
      >
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
    )
  }
}