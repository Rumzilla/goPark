import React from "react";
import { useTranslation } from "react-i18next";
import './nav-menu-list.css'

const Nav_menu_list = () => {
    const {t} = useTranslation()
    return (
        <div className="header-content-block">
            <div className="content-menu">
                <a href="/" className="content-item">{t("exhibitions")}</a>
                <a href="/" className="tournament-text">{t("tournaments")}</a>
                <span className="dot"></span>
                <a href="/" className="content-item">{t("lectures")}</a>

                <a href="/" className="content-item">{t("cleanup")}</a>

                <a href="/" className="content-item"><span>{t("sport")}</span></a>
                <span className="dot"></span>
                <a href="/" className="content-item">{t("forkids")}</a>
                <a href="/" className="content-item">{t("excursions")}</a>


            </div>
        </div>
    )
}

export default Nav_menu_list;