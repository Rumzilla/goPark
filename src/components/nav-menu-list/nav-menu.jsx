import React, {useEffect, useState} from "react";
import './nav-menu-list.css'

const Nav_menu_list = () => {

    const [openGallery, setOpenGallery] = useState(false)
    const [openTournament, setOpenTournament] = useState(false)
    const [openLessons, setOpenLessons] = useState(false)
    const [openCleaning, setOpenCleaning] = useState(false)
    const [openSports, setOpenSports] = useState(false)
    const [openForKids, setOpenForKids] = useState(false)
    const [openExcursion, setOpenExcursion] = useState(false)

    const openGal = () => {
        setOpenGallery(true)
    }
    const closeGal = () => {
        setOpenGallery(false)
    }

    const openTour = () => {
        setOpenTournament(true)
    }
    const closeTour = () => {
        setOpenTournament(false)
    }

    const openLess = () => {
        setOpenLessons(true)
    }
    const closLess = () => {
        setOpenLessons(false)
    }

    const openClean = () => {
        setOpenCleaning(true)
    }
    const closeClean = () => {
        setOpenCleaning(false)
    }

    const openSport = () => {
        setOpenSports(true)
    }
    const closeSport = () => {
        setOpenSports(false)
    }

    const openKids = () => {
        setOpenForKids(true)
    }
    const closeKids = () => {
        setOpenForKids(false)
    }

    const openExc = () => {
        setOpenExcursion(true)
    }
    const closeExc = () => {
        setOpenExcursion(false)
    }

    return (
        <div className="header-content-block">
            <div className="content-menu">
                <span onMouseOver={openGal} onMouseOut={closeGal} className="content-item" >Выставки</span>
                <span onMouseOver={openTour} onMouseOut={closeTour} className="tournament-text">турниры</span>
                <span className="dot"></span>
                <span onMouseOver={openLess} onMouseOut={closLess} className="content-item">лекции</span>
                <span onMouseOver={openClean} onMouseOut={closeClean} className="content-item">субботники</span>
                <span onMouseOver={openSport} onMouseOut={closeSport} className='content-item'>Спорт</span>
                <span className="dot"></span>
                <span onMouseOver={openKids} onMouseOut={closeKids} className="content-item">для детей</span>
                <span onMouseOver={openExc} onMouseOut={closeExc} className="content-item">экскурсии</span>
            </div>
            <div className="content-img">
                {openGallery ?  <div className="gallery" /> : ""}
                {openTournament ?  <div className="tournament" /> : ""}
                {openLessons ?  <div className="lessons" /> : ""}
                {openCleaning ?  <div className="cleaning" /> : ""}
                {openSports ?  <div className="sport" /> : ""}
                {openForKids ?  <div className="for-kids" /> : ""}
                {openExcursion ?  <div className="excursion" /> : ""}
            </div>
        </div>
    )
}

export default Nav_menu_list;