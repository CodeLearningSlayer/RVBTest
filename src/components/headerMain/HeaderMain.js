import React, {useEffect, useState} from "react";
import Header from "../header/Header";
import "./headerMain.scss";
import { useMediaQuery } from 'react-responsive';

import {Link} from "react-scroll";

const HeaderMain = (props) => {
  const isSocialHide = useMediaQuery({query: `(max-width: 768px)`});
  return (
    <section className="start">
      <Header renderComponent={props.renderComponent} burger={props.burger} render={props.render}/>
        <div className="container">
          <p className="header__slogan">
            Маркетинговое агентство. С нами вы растете как на дрожжах
          </p>
          <Link to="portfolio" className="arrow-down" spy={true} smooth={true} duration={500} offset={-88}> </Link>
          <div className="header__social">
              <a href="https://wa.me/79200000000" rel="noreferrer" target="_blank" className="header__social-item header__social-item--whatsapp">{isSocialHide ? "" : "whatsapp" }</a>
              <a href="https://t.me/+79274238608" rel="noreferrer" target="_blank" className="header__social-item header__social-item--telegram">{isSocialHide ? "" : "telegram" }</a>
          </div>
        </div>
    </section>
  );
};

export default HeaderMain;
