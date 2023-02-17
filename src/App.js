import './App.css';
import "./styles/_media.scss";
import {useMediaQuery} from 'react-responsive'
import {Component, useState, useEffect } from 'react';
import HeaderMain from './components/headerMain/HeaderMain';
import Portfolio from './components/portfolio/Portfolio';
import About from './components/about/About';
import bg from "./assets/bg.jpg"
import { Parallax } from "react-parallax"
import { Link } from 'react-scroll';
import Form from './components/form/Form';
import Footer from './components/footer/Footer';

function App() {
  const [isRendered, setRender] = useState(false);
  const [isBurgerActive, setBurgerActive] = useState(false);
  // useEffect(() => {
  //   document.addEventListener('resize', () => {
  //     console.log(document.documentElement.clientWidth);
  //     if (document.documentElement.clientWidth < 1300){
  //       setIsParallaxDisabled(true);
  //     }
  //     else setIsParallaxDisabled(false);
  //   });
  // })
  const isNeedToChange = useMediaQuery({query: `(max-width: 1300px)`});

  console.log(isNeedToChange);
  return (
    <div className="App">
      <Parallax
        strength={300} 
        bgImage={isNeedToChange ? false : bg}
        disabled={isNeedToChange ? true : false}
        bgImageStyle={{
          backgroundSize: 'cover',
          backroundPosition: 'center center',
          height: 'unset'
        }}>
        <HeaderMain />
      </Parallax>
          
      <Portfolio/>
      <About/>
      <Form/>
      <Footer/>
    </div>
  );
}

export default App;
