import React, {Component} from 'react';
import Promo from '../promo/promo';
import Map from '../map/map';
import Notice from '../notice/notice';
import Footer from '../footer/footer';


import '../../css/style.css';
import {getData} from "../../lib/backend";

export default class App extends Component {

  state = {
    isPageActive: false,
    selectedHouse: null,
    housesData: [],
    form: {
      type: 'flat'
    },
    userCoordinates: {
      x: 570,
      y: 375
    }
  };

  componentDidMount() {
    getData(this.onDataLoad)
  }

  onDataLoad = (houses) => {
    this.setState({housesData: houses})
  };

  onHouseSelected = (item) => {
    this.setState({selectedHouse: item})
  };

  handlePageActivation = () => {
    this.setState({isPageActive: true})
  };

  handleClear = () => {
    this.setState({isPageActive: false})
  };

  closeCard = () => {
    this.setState({selectedHouse: null})
  };

  onMainPinHandler = (coordinates) => {
    this.setState({
      userCoordinates: coordinates
    })
  };

  render() {
    return (
      <div>
        <main>
          <Promo/>
          <Map
            houses={this.state.housesData}
            onHouseSelected={this.onHouseSelected}
            selectedHouse={this.state.selectedHouse}
            isActive={this.state.isPageActive}
            onActivate={this.handlePageActivation}
            onChange={this.closeCard}
            userCoordinates={this.state.userCoordinates}
            onMainPinCoordinatesChange={this.onMainPinHandler}
          />
          <Notice
          isActive={this.state.isPageActive}
            onClear={this.handleClear}
            formValues={this.state.form}
            userCoordinates={this.state.userCoordinates}
          />
        </main>
        <Footer/>
      </div>
    )
  };
};