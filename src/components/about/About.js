import React, {useState} from "react";
import team from "../../assets/team.jpg"
import "./about.scss";
import Modal from "../modal/Modal";

const About = () => {

  const [modalActive, setModalActive] = useState(false);

  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="about__title">О компании</h2>
        <ul className="about__staff-list staff-list">
          <li className="staff-list__item">
            <span>5</span>
            отделов
          </li>
          <li className="staff-list__item">
            <span>5</span>
            маркетологов
          </li>
          <li className="staff-list__item">
            <span>3</span>
            дизайнера
          </li>
          <li className="staff-list__item">
            <span>3</span>
            копирайтера
          </li>
          <li className="staff-list__item">
            <span>7</span>
            разработчиков
          </li>
        </ul>
        <div className="about__inner">
          <div className="about__inner-left left">
            <p className="about__inner-text">
              Мы — команда специалистов с опытом, энтузиазмом и лёгким
              недосыпом. Маркетинговое агентство «Дрожжи» было основано в 2015
              году, как компания, где можно получить комплексное интернет- и
              oффлайн-продвижение. На сегодняшний день мы не зависим ни от ниши,
              ни от географии, ни от специфики продукта. В портфолио компании
              сотни успешных кейсов, способных помочь вам в реализации своей
              идеи.
            </p>
            <ul className="about__inner-achievements achievements">
                <li className="achievements__item">
                    <span className="achievements__item-num">1000+</span>
                    реализованных проектов
                </li>
                <li className="achievements__item">
                    <span className="achievements__item-num">92</span>
                    клиента доверили нам свои проекты
                </li>
                <li className="achievements__item">
                    <span className="achievements__item-num">5+</span>
                    лет успешной работы
                </li>
            </ul>
            <a href="more" className="about__inner-btn">Подробнее</a>
          </div>
          <div className="about__inner-right right">
            <img onClick={() => setModalActive(true)} className="about__img" src={team} alt="team-img"></img>
            <p className="right-subtext">Команда агентства «Дрожжи»</p>
            <Modal active={modalActive} setActive={setModalActive}/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
