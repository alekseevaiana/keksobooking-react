import React from 'react';
import './footer.css';

import htmlLogoImg from '../../img/htmla-logo.svg';

const Footer = () => {
  return (
    <footer className="footer container">
      <div className="footer__copyright copyright">
        <a className="copyright__link copyright__link--image" href="https://htmlacademy.ru/intensive/javascript">
          <img src={htmlLogoImg} width="130" height="45" alt="HTML Academy" className="copyright__logo"/>
        </a>
        <p>Сделано в <a className="copyright__link copyright__link--text"
          href="https://htmlacademy.ru/intensive/javascript">HTMLAcademy</a> &copy; 2018</p>
      </div>
      <ul className="footer__contacts contacts">
        <li><a href="https://twitter.com/htmlacademy_ru"
          className="contacts__link contacts__link--twitter">Twitter</a></li>
        <li><a href="https://www.instagram.com/htmlacademy/"
          className="contacts__link contacts__link--instagram">Instagtam</a></li>
        <li><a href="https://www.facebook.com/htmlacademy"
          className="contacts__link contacts__link--facebook">Facebook</a></li>
        <li><a href="https://vk.com/htmlacademy" className="contacts__link contacts__link--vk">VK</a></li>
      </ul>
    </footer>
  )
};

export default Footer;