import React, { useState } from "react";
import "./header.scss";
import  ReactDOM from "react-dom";
import logoim from "../../assets/logo.svg";
import { Link } from "react-scroll";
import { useMediaQuery } from "react-responsive";

const node = document.createElement('div');
document.body.append(node);
node.className = "toAppend";


const Header = (props) => {
  const [fixed, setFixed] = useState(false);
  const [isBurgerActive, setBurgerActive] = useState(false);
  const checkIfFix = () => {
    if (window.scrollY >= 40) {
      setFixed(true);
    } else {
      setFixed(false);
    }
  };
  window.addEventListener("scroll", checkIfFix);
  const isNeedToChange = useMediaQuery({ query: `(max-width: 768px)` });

  return (
    <>
      <header className={`${fixed ? "header header--sticky" : "header"}`}>
        <div className="container">
          <div className="header__inner">
            <a className="header-logo" href="#">
              <img src={logoim} alt="logo-img" className="header__logo logo" />
            </a>
            {!isNeedToChange ? (
              <nav
                className={`${
                  isBurgerActive
                    ? "header__nav header__nav--active"
                    : "header__nav"
                }`}
              >
                <ul className="header__nav-list nav-list">
                  <li className="nav-list__item">
                    <Link
                      to="portfolio"
                      spy={true}
                      offset={-88}
                      smooth={true}
                      duration={300}
                      className="header__nav-link"
                    >
                      Портфолио
                    </Link>
                  </li>
                  <li className="nav-list__item">
                    <Link
                      to="about"
                      spy={true}
                      offset={-88}
                      smooth={true}
                      duration={300}
                      className="header__nav-link"
                    >
                      О компании
                    </Link>
                  </li>
                  <li className="nav-list__item">
                    <a href="contact" className="header__nav-link">
                      Контакты
                    </a>
                  </li>
                </ul>
                <Link
                  to="application"
                  spy={true}
                  offset={-88}
                  smooth={true}
                  duration={300}
                  className="header__nav-btn"
                >
                  Оставить заявку
                </Link>
              </nav>
            ) : (
              false
            )}
            
            <button
              className={`${
                isBurgerActive ? "burger-btn burger-btn--active" : "burger-btn"
              }`}
              onClick={() =>
                isBurgerActive ? setBurgerActive(false) : setBurgerActive(true)
              }
            >
              <span></span>
            </button>
          </div>
        </div>
      </header>
      {isNeedToChange ? 
      <Portal>
        <Nav isBurgerActive={isBurgerActive}/>
      </Portal>: false
      }
    </>
  );
};

const Portal = (props) => {
    const node = document.querySelector('.toAppend');
    return ReactDOM.createPortal(props.children, node);
}

const Nav = (props) => {
    return (
        <nav
        className={`${
          props.isBurgerActive
            ? "header__nav header__nav--active"
            : "header__nav"
        }`}
      >
        <ul className="header__nav-list nav-list">
          <li className="nav-list__item">
            <Link
              to="portfolio"
              spy={true}
              offset={-88}
              smooth={true}
              duration={300}
              className="header__nav-link"
            >
              Портфолио
            </Link>
          </li>
          <li className="nav-list__item">
            <Link
              to="about"
              spy={true}
              offset={-88}
              smooth={true}
              duration={300}
              className="header__nav-link"
            >
              О компании
            </Link>
          </li>
          <li className="nav-list__item">
            <a href="contact" className="header__nav-link">
              Контакты
            </a>
          </li>
        </ul>
        <Link
          to="application"
          spy={true}
          offset={-88}
          smooth={true}
          duration={300}
          className="header__nav-btn"
        >
          Оставить заявку
        </Link>
      </nav>
    )
}

export default Header;
