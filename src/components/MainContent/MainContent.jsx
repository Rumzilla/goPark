import React from 'react';
import styles from './styles.module.css'
import img1 from '../../shared/img/Rectangle1.png'

const MainContent = () => {
    return (
        <div className={styles.content_block}>
            <h1 className={styles.main_title}>Ближайшие мероприятия</h1>
            <div className={styles.main_content}>
                <img src={img1} alt=""/>
                <div className={styles.content_about}>
                    <h2 className={styles.content_title}>Выставка современного искусства </h2>
                    <p className={styles.content_description}>Научитесь видеть прекрасное в двух мазках, или зачем нам
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
                            <span className={styles.creators_text}>Организаторы</span>
                        </div>
                        <button className={styles.apply_button}>
                            Подать заявку
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainContent;