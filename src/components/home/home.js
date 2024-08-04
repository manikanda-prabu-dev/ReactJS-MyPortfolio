import React, { useEffect } from 'react';
import '../home/home.scss'
import Myself from '../../assets/images/myself.png';

const Home = () => {
    useEffect(() => {
        const alphbets = document.getElementsByClassName('hero__alphabet');
        for (let i = 0; i <= alphbets.length; i++) {
          alphbets[i]?.addEventListener('animationend', function () {
            alphbets[i].classList.remove('alphabet-animated');
          });
    
          alphbets[i]?.addEventListener('mouseover', function () {
            alphbets[i].classList.add('alphabet-animated');
          });
        }
      }, []);
    return (
        <>
          <div className="hero">
        <div className="hero__container">
          <div className="hero__intro-box">
          <p className="hero__intro-title">
              <span className="hero__intro-line" data-aos="fade-down"></span>
              Hello, I am  <strong>&nbsp;&nbsp;MANIKANDA PRABU ARUMUGAM</strong>
            </p>
            <p className="hero__animated-alphabet-box">
              <span
                className="hero__alphabet"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                F
              </span>
              <span
                className="hero__alphabet"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                u
              </span>
              <span
                className="hero__alphabet"
                data-aos="fade-up"
                data-aos-delay="600"
              >
                L
              </span>
              <span
                className="hero__alphabet"
                data-aos="fade-up"
                data-aos-delay="800"
              >
                L
              </span>
              <span
                className="hero__alphabet"
                data-aos="fade-up"
                data-aos-delay="1000"
              >
                S
              </span>
              <span
                className="hero__alphabet"
                data-aos="fade-up"
                data-aos-delay="1200"
              >
                T
              </span>
              <span
                className="hero__alphabet"
                data-aos="fade-up"
                data-aos-delay="1400"
              >
                A
              </span>
              <span
                className="hero__alphabet"
                data-aos="fade-up"
                data-aos-delay="1600"
              >
                C
              </span>
              <span
                className="hero__alphabet hero__alphabet--last"
                data-aos="fade-up"
                data-aos-delay="1800"
              >
                K
              </span>
              <span
                className="hero__developer-text"
                data-aos="zoom-out-down"
                data-aos-delay="1800"
              >
                <span className="hero__dev-text">Developer</span>
              </span>
            </p>
            <div
              className="hero__description"
              data-aos="fade"
              data-aos-delay="1800"
            >
              <p>
                I'm a passionate and responsible{' '}
                <span>Full Stack Developer</span>, with more than 6 years of
                experience. Skilled in developing highly responsive websites and
                mobile apps with elegant and efficient code.
              </p>
            </div>

            </div>
            <div className="hero__image" data-aos="zoom-in" data-aos-delay="200">
            <img src={Myself} alt="me" />
          </div>
            </div>
            </div>
        </>
        )
};
export default Home;