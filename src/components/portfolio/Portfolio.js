import React from 'react';
import "./portfolio.scss"

const Portfolio = () => {
    const items = [
        {
            id: 1,
            text: "«Натали» — Ивановский трикотаж оптом",
            subtext: "Редизайн сайта, поддержка сайта",
            style: "linear-gradient(90deg, #A18CD1 0%, #FBC2EB 100%), #EEEEEE",
            type: "Маркетинг"
        },
        {
            id: 2,
            text: "Podium — эротический массаж",
            subtext: "Разработка, редизайн",
            style: " linear-gradient(90deg, #FF9A9E 0%, #FAD0C4 99%, #FAD0C4 100%), #EEEEEE",
            type: "ВЕБ РАЗРАБОТКА"
        },
        {
            id: 3,
            text: "Аудит отдела маркетинга и продаж для Название бренда длинное название...",
            subtext: "Аудит, маркетинг сюда кратко теги",
            style: "linear-gradient(90deg, #FFECD2 0%, #FCB69F 100%), #EEEEEE",
            type: "ВЕДЕНИЕ РЕКЛАМНОЙ КОМПАНИИ"
        },
        {
            id: 4,
            text: "Аудит отдела маркетинга и продаж для Название бренда",
            subtext: "Аудит, маркетинг сюда кратко теги",
            style: "linear-gradient(90deg, #A18CD1 0%, #FBC2EB 100%), #EEEEEE",
            type: "ВЕДЕНИЕ ГРУПП В СОЦ СЕТЯХ"
        },
        {
            id: 5,
            text: "Аудит отдела маркетинга и продаж для Название бренда",
            subtext: "Аудит, маркетинг сюда кратко теги",
            style: " linear-gradient(90deg, #FDFBFB 0%, #EBEDEE 100%), #EEEEEE",
            type: "ОПТИМИЗАЦИЯ SEO САЙТА"
        },
        {
            id: 6,
            text: "Аудит отдела маркетинга и продаж для Название бренда",
            subtext: "Аудит, маркетинг сюда кратко теги",
            style: "linear-gradient(90deg, #FFF1EB 0%, #ACE0F9 100%), #EEEEEE",
            type: "СОЗДАНИЕ РЕКЛАМНОЙ КОМПАНИИ"
        },
        {
            id: 7,
            text: "Дополнительный блок №1 при прогрузке",
            subtext: "Добавил фичу",
            style: "linear-gradient(90deg, #A18CD1 0%, #FBC2EB 100%), #EEEEEE",
            type: "ВЕБ РАЗРАБОТКА"
        },
        {
            id: 8,
            text: "Дополнительный блок №2 при прогрузке",
            subtext: "Добавил фичу",
            style: "linear-gradient(90deg, #A18CD1 0%, #FBC2EB 100%), #EEEEEE",
            type: "ВЕБ РАЗРАБОТКА"
        }
    ]
    //воткнуть CSSTransitionGroup
    return (
        <section id="porfolio" className="portfolio">
            <div className='container'>
                <div className='portfolio__top'>
                    <h2 className='portfolio__title'>Портфолио</h2>
                    <a className='portfolio__all' href='portfolio'>Cмотреть все</a>
                </div>
                
                <div className='portfolio__list'>
                    {items.map((item, index) => {
                        if (index < 6)
                            return (
                                <div key={item.id} className='portfolio__list-item portfolio-item'>
                                    <div className='portfolio-item__img-box' style={{background : `${item.style}`}}>
                                        <span className='portfolio-item__type'>{item.type}</span>    
                                    </div>   
                                    <p className='portfolio-item__title'>{item.text}</p>
                                    <p className='portfolio-item__subtext'>{item.subtext}</p>
                                </div>
                            )
                    })}
                </div>

                <button className='portfolio__cases-btn'>Все кейсы</button>
            </div>
           
        </section>
    );
};

export default Portfolio;