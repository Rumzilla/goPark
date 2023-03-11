import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import i18n from '../../18n';
import Nav_menu_list from '../nav-menu-list/nav-menu';
import './header.css';



const Header = () => {

    // const {i18n} = useTranslation();
    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
    }
    const {t} = useTranslation()
  
    const [menu, setMenu] = useState()

    const DropDownMenu = () => {
        setMenu(!menu)
    }
    return (
        <div className="container">
            <div className="header-title-block">
                
                <div className="logo-block">
                    <a href='/' className="logo-img"></a>
                </div>
                <div className="nav-block">
                    <button onClick={DropDownMenu} className="nav-item">
                        {t("events")}
                        <span className="down-icon"></span>
                    </button>

                    <a href="/" className="shop-icon"></a>
                    <a className="language-icon">
                    <div className="lang-menu">
                            <button onClick={() => changeLanguage('en')} className="lang-menu-item">🇬🇧</button>
                            <button onClick={() => changeLanguage('ru')} className="lang-menu-item">🇷🇺</button>
                            <button onClick={() => changeLanguage('kg')} className="lang-menu-item">🇰🇬</button>
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