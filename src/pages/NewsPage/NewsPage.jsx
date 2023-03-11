import React from "react";

import './NewsPage.css';

const NewsPage = () => {
    return (
        <>
            <div className="news-bg">
                <div className="container">
                    <h2 className="news-title">Красивый кыргызский бурдюк — как изготавливали кожаный сосуд. Инфографика</h2>
                    <p className="news-subtitle">За годы работы мы отточили подход к проектам, который помогает управлять рисками, не выходить за сроки и создавать цифровые решения для улучшения бизнеса наших клиентов.</p>
                </div>
            </div>
            <div className="container">      
                <div className="news-block">
                    <div className="first-news-block">
                        <div className="first-news-card">
                            <span className="news-card-text">#2023 Кашка-Суу</span> 
                        </div>
                        <div className="second-news-card">
                            <span className="news-card-text">#2023 Алтын-Арашан</span>
                        </div>
                        <p className="news-text">Размер не имеет значения просто из-за размера. Что изменится, если опыт доктора не 7, а 5 лет? Опыт всего лишь называет количество лет, а мы хотим показать экспертность. Акушер-гинеколог, спасший сотню детей после кесарева, круче акушера-гинеколога с 20-летним стажем.</p>
                    </div>
                    <div className="second-news-block">
                        <div className="third-news-card">
                            <span className="news-card-text">Мощь конкретных фактов</span>
                        </div>
                        <p className="news-text">Ненавижу шаблонные решения, но будем считать это подсказкой. Попробуйте подставить в текст ниже информацию о своей компании.«Мы продаем/производим/ … (что вы умеете делать). Делаем так, чтобы … (описание ваших клиентов) получили … (результат вашей работы). Обращайтесь к нам, если … (ситуация и контекст). Мы знаем, как … (конкретные факты, доказывающие экспертность). За х лет работы мы произвели … (примеры и кейсы).»GG</p>
                    </div>
                </div>
                <div className="some-fact">
                    <p className="some-fact-header">Не прячьте самое интересное</p>
                    <p className="some-fact-text">«Приносим праздник чистоты в ваш дом!» —> «Убираем мусор, моем полы и окна, чистим ковры и диваны».Конкретные примеры и сравнения помогают читателю понять свойство и представить картинку в голове, а не просто угадывать абстракцию.</p>
                </div>
                <div className="news-block-img">
                    <div className="news-block-img-first"></div>
                    <div className="news-block-img-second"></div>
                    <div className="news-block-img-third"></div>

                </div>
            </div>


        </>
        
    )
}

export default NewsPage;