import React from "react";
import Header from "../header/Header";
import "./headerMain.scss";

const HeaderMain = () => {
  return (
    <section className="start">
      <Header />
      <div className="container">
        <p className="header__slogan">
          Маркетинговое агентство. С нами вы растете как на дрожжах
        </p>
        <a href="#portfolio" className="arrow-down"> </a>
        <div className="header__social">
            <a href="https://wa.me/79200000000" rel="noreferrer" target="_blank" className="header__social-item header__social-item--whatsapp">whatsapp</a>
            <a href="https://t.me/+79274238608" rel="noreferrer" target="_blank" className="header__social-item header__social-item--telegram">telegram</a>
        </div>
      </div>
    </section>
  );
};

export default HeaderMain;
