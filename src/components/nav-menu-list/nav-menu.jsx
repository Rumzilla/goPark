import React from "react";
import './nav-menu-list.css'

const Nav_menu_list = () => {

    return (
        <div className="header-content-block">
            <div className="content-menu">
                <a href="/" className="content-item">выставки</a>
                <a href="/" className="tournament-text">турниры</a>
                <span className="dot"></span>
                <a href="/" className="content-item">лекции</a>

                <a href="/" className="content-item">субботники</a>

                <a href="/" className="content-item"><span>спорт</span></a>
                <span className="dot"></span>
                <a href="/" className="content-item">для детей</a>
                <a href="/" className="content-item">экскурсии</a>


            </div>
        </div>
    )
}

export default Nav_menu_list;