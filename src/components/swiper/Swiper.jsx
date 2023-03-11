import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation, Pagination, Scrollbar, A11y} from "swiper";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css';
import './style.css'

const SwiperBlock = () => {
    return (
        <div className='partners-block-wrap'>
            <div className='partners-block'>
                <span className='partner-line'/>
                <h2 className="partners-header-text">Партнеры</h2>
            </div>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={4}
                navigation
                pagination={{clickable: true}}
                scrollbar={{draggable: true}}
                // onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide>
                    <div className="swiper-block">
                        <div className="swiper-image-block"></div>
                        <div className="border-line"></div>
                        <p className='swiper-text'>Codify Academy</p>
                        <p className="swiper-description">CEO основатель Динара Руслан</p>
                        <div className="swiper-contacts">
                            <span className="swiper-contact">0500 431 430</span>
                            <span className="swiper-contact">0500 431 430</span>
                            <span className="swiper-contact">info@codifylab.com</span>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-block">
                        <div className="swiper-image-block second-block"></div>
                        <div className="border-line"></div>
                        <p className='swiper-text'>MEGA - оператор связи</p>
                        <p className="swiper-description">Генеральный директор Нурлан Мамытов</p>
                        <div className="swiper-contacts">
                            <span className="swiper-contact">(312) 905 221</span>
                            <span className="swiper-contact">(312) 905 220</span>
                            <span className="swiper-contact">pr@megacom.kg</span>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-block">
                        <div className="swiper-image-block third-block">
                        </div>
                        <div className="border-line"></div>
                        <p className='swiper-text'>ГП «Инфоком»</p>
                        <p className="swiper-description">Директор Асель Кененбаева </p>
                        <div className="swiper-contacts">
                            <span className="swiper-contact">(312) 986 190</span>
                            <span className="swiper-contact">(312) 986 191</span>
                            <span className="swiper-contact">support@infocom.kg</span>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-block">
                        <div className="swiper-image-block fourth-block"></div>
                        <div className="border-line"></div>
                        <p className='swiper-text'>Министерство цифрового развития КР</p>
                        <p className="swiper-description">Министр Талантбек Иманов</p>
                        <div className="swiper-contacts">
                            <span className="swiper-contact">(312) 605 000</span>
                            <span className="swiper-contact">119</span>
                            <span className="swiper-contact">info@digital.gov.kg</span>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-block">
                        <div className="swiper-image-block fifth-block"></div>
                        <div className="border-line"></div>
                        <p className='swiper-text'>Государственный портал электронных услуг КР</p>
                        <p className="swiper-description">Директор Чынгыз Аманатов</p>
                        <div className="swiper-contacts">
                            <span className="swiper-contact">(312) 988 123</span>
                            <span className="swiper-contact"></span>
                            <span className="swiper-contact">portal@tunduk.gov.kg</span>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-block">
                        <div className="swiper-image-block sixth-box"></div>
                        <div className="border-line"></div>
                        <p className='swiper-text'>Six Box</p>
                        <p className="swiper-description">CEO основатель Калмурат Джангазиев</p>
                        <div className="swiper-contacts">
                            <span className="swiper-contact">0(778) 333 888</span>
                            <span className="swiper-contact">0(501) 313 888</span>
                            <span className="swiper-contact">sixbox.kg</span>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default SwiperBlock;