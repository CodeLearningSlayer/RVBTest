import React from 'react';
import "./header.scss"
import logoim from "../../assets/logo.svg"

const Header = () => {
    return (
        <header className='header'>
            <div className='container'>
                <div className='header__inner'>
                    <img src={logoim} alt='logo-img' className='header__logo logo'/>
                    <nav className='header__nav'>
                        <a href="#portfolio" className='header__nav-link'>Портфолио</a>
                        <a href="#about" className='header__nav-link'>О компании</a>
                        <a href="#" className='header__nav-link'>Контакты</a>
                        <button className='header__nav-btn'>Оставить заявку</button>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;