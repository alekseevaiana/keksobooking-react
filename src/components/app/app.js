import React from 'react';
import Promo from '../promo/promo';
import Map from '../map/map';
import Notice from '../notice/notice';
import Footer from '../footer/footer';
import avatar1 from '../../img/avatars/user01.png';
import avatar2 from '../../img/avatars/user02.png';
import avatar3 from '../../img/avatars/user03.png';

import '../../css/style.css';

const App = () => {

  const housesData = [
    {
      author: {
        avatar: avatar1
      },
      offer: {
        title: "Уютное гнездышко для молодоженов",
        address: "102-0082 Tōkyō-to, Chiyoda-ku, Ichibanchō, 14−3",
        price: 42000,
        type: "house",
        rooms: 3,
        guests: 6,
        checkin: "14:00",
        checkout: "10:00",
        features: [
          "wifi",
          "dishwasher",
          "parking",
          "washer",
          "elevator",
          "conditioner"
        ],
        description: "Великолепный таун-хауз в центре Токио. Подходит как туристам, так и бизнесменам. Дом полностью укомплектован и имеет свежий ремонт.",
      },
      location: {
        x: 428,
        y: 493
      },
      id: 0
    },

    {
      author: {
        avatar: avatar2
      },
      offer: {
        title: "Маленькая квартирка рядом с парком",
        address: "102-0075 Tōkyō-to, Chiyoda-ku, Sanbanchō",
        price: 30000,
        type: "flat",
        rooms: 1,
        guests: 1,
        checkin: "9:00",
        checkout: "7:00",
        features: [
          "elevator",
          "conditioner"
        ],
        description: "Маленькая чистая квратира на краю парка. Без интернета, регистрации и СМС.",
      },
      location: {
        x: 471,
        y: 545
      },
      id: 1
    },
    {
      author: {
        avatar: avatar3
      },
      offer: {
        title: "Небольшая лавочка в парке",
        address: "Chiyoda-ku, Tōkyō-to 102-0091",
        price: 100,
        type: "bungalo",
        rooms: 0,
        guests: 0,
        checkin: "0:00",
        checkout: "0:00",
        features: [],
        description: "Великолепная лавочка прямо в центре парка. Подходит для всех кто любит спать на свежем воздухе.",
        photos: []
      },
      location: {
        x: 744,
        y: 534
      },
      id: 2
    }
  ];

  return <div>
    <main>
      <Promo/>
      <Map
        houses={housesData}
        /> {/*получает свойство с массивом*/}
      <Notice/>
    </main>
    <Footer/>
  </div>
};

export default App;