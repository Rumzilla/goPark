import React, {useEffect} from 'react';
import styles from './styles.module.css'
import img1 from '../../shared/img/Rectangle1.png'
import {useDispatch, useSelector} from "react-redux";
import {eventList, eventLoader} from "../../redux/selectors/selectors";
import SwiperBlock from "../swiper/Swiper";
import {useTranslation} from 'react-i18next';
import eventOperation from '../../redux/thunk/thunk'

const MainContent = () => {
    const event = useSelector(eventList)
    const eventLoading = useSelector(eventLoader)
    const dispatch = useDispatch()
    const {getEventList} = eventOperation
    const {t} = useTranslation()
    console.log(event, 'event')

    useEffect(() => {
        dispatch(eventOperation.getEventList())
    }, [])

    if (eventLoading) {
        return
    }

    return (
        // {event.map((item) => (
                <div className={styles.content_block}>
                    <h1 className={styles.main_title}>{t("upcoming")}</h1>
                    <div className={styles.main_content}>
                        <img src={img1} alt=""/>
                        <div className={styles.content_about}>
                            <h2 className={styles.content_title}>Выставка</h2>
                            <p className={styles.content_description}>Научитесь видеть прекрасное в двух мазках, или
                                зачем нам
                                современное искусство?</p>
                            <div className={styles.date_location}>
                                <div className={styles.date_block}>
                                    <span className={styles.date_icon}></span>
                                    <span className={styles.date_text}>Март 12, 2023</span>
                                </div>
                                <div className={styles.location_block}>
                                    <span className={styles.location_icon}></span>
                                    <span className={styles.location_text}>Бишкек, Парк - Ынтымак</span>
                                </div>
                            </div>
                            <div className={styles.apply_event}>
                                <div className={styles.creators}>
                                    <div className={styles.creators_icons_parent}>
                                        <span className={styles.creators_icon}></span>
                                        <span className={styles.creators_icon2}></span>
                                        <span className={styles.creators_icon3}></span>
                                    </div>
                                    <span className={styles.creators_text}>{t("orgs")}</span>
                                </div>
                                <button className={styles.apply_button}>
                                    {t("apply")}
                                </button>
                            </div>
                        </div>
                    </div>
                    <SwiperBlock/>
                </div>
        //     ))
        // }
    );
};

export default MainContent;