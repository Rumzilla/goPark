import React from 'react';
import './header.css';


const Header = () => {
    return (
        <div className="container">
            <div className="header-title-block">
                <div className="logo-block">
                    <a href='/' className="logo-img"></a>
                </div>
                <div className="nav-block">
                    <button className="nav-item">
                        Мероприятия
                        <span className="down-icon"></span>
                    </button>

                    <a href="/" className="shop-icon"></a>
                    <a href="/" className="language-icon"></a>
                    <a href="" className="theme-icon"></a>
                    <a href="/" className="login-button">
                        Войти
                        <span className="user-icon"></span>
                    </a>
                </div>
            </div>

        </div>
    )
}

export default Header;