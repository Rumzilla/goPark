import React, { useState } from 'react';
import Nav_menu_list from '../nav-menu-list/nav-menu';
import './header.css';


const Header = () => {
  
    const [menu, setMenu] = useState()

    const DropDownMenu = () => {
        setMenu(!menu)
    }

    console.log(menu)

    return (
        <div className="container">
            <div className="header-title-block">
                
                <div className="logo-block">
                    <a href='/' className="logo-img"></a>
                </div>
                <div className="nav-block">
                    <button onClick={DropDownMenu} className="nav-item">
                        Мероприятия
                        <span className="down-icon"></span>
                    </button>

                    <a href="/" className="shop-icon"></a>
                    <a href="/" className="language-icon">
                    <div className="lang-menu">
                            <button className="lang-menu-item">🇬🇧</button>
                            <button className="lang-menu-item">🇷🇺</button>
                            <button className="lang-menu-item">🇰🇬</button>
                        </div>
                    </a>
                    <a href="" className="theme-icon"></a>
                    <a href="/" className="login-button">
                        Войти
                        <span className="user-icon"></span>
                    </a>
                </div>
            </div>
            {menu ? <Nav_menu_list /> : ''}
        </div>
    )
}

export default Header;