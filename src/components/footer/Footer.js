import React from 'react';
import logoim from "../../assets/logo-black.svg"
import "./footer.scss"
const Footer = () => {
    return (
        <section className='footer'>
                <ul className='footer__top-list'>
                    <li className='footer__top-list__item'>2015-2021 © Дрожжи™</li>
                    <li className='footer__top-list__item'>ООО «РВБ-Маркетинг»</li>
                    <li className='footer__top-list__item'>
                        <a href='policy' className='footer__top-policy'>Политика конфиденциальности</a>
                    </li>
                </ul>
                <a href='#'>
                    <img src={logoim} alt='logo-img' className='header__logo logo'/>
                </a>
        </section>
    );
};

export default Footer;