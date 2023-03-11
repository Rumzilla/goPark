import React from 'react';
import './style.css'

const Footer = () => {
    return (
        <div className="footer-item">
          <div className="social-icons-links">
              <a className='social-links instagram-icon' href="/"></a>
              <a className='social-links facebook-icon' href="/"></a>
              <a className='social-links whatsapp-icon' href="/"></a>
              <a className='social-links telegram-icon' href="/"></a>
              <a className='social-links youtube-icon' href="/"></a>
              <a className='social-links email-icon' href="/"></a>
            </div>
          <div className="page-navigation">
              <a className='page-link' href="/">О нас</a>
              <a className='page-link' href="/">Новости</a>
              <a className='page-link' href="/">Связаться</a>
            </div>
          <a href="/" className="head-icon-for-footer"></a>
          <span className="footer-description">
            Организация мероприятий в парках города Бишкек
          </span>
          <div className="certificate-up-to">C 2023</div>
        </div>
    );
};

export default Footer;