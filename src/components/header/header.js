import React, { useRef, useEffect } from 'react';
import '../../components/header/header.scss'

const Header =()=>{
    const navLinkAbout = useRef();
    const navLinkWork = useRef();
    const navLinkContact = useRef();

    useEffect(() => {
      const route = document.getElementsByClassName('header__route');
      for (let i = 0; i <= route.length; i++) {
        route[i]?.addEventListener('mouseover', function () {
          this.nextSibling.classList.add('header__route-bg-animation');
        });
        route[i]?.addEventListener('mouseout', function () {
          this.nextSibling.classList.remove('header__route-bg-animation');
        });
      }
    });

    function showHideNavbar() {
        const navLinksDisplay = document.getElementById('header__nav-links');
        const iconMiddleLine = document.getElementById(
          'header__hamburger-middle-line'
        );
        const iconTopLine = document.getElementById('header__hamburger-top-line');
        const iconBottomLine = document.getElementById(
          'header__hamburger-bottom-line'
        );
    }

return (
    <>
    <div className="header">
    <div className="header__container">
          <div className="header__logo">
            <span data-aos="fade-down" data-aos-delay="0">
              P
            </span>
            <span data-aos="fade-down" data-aos-delay="700">
              o
            </span>
            <span data-aos="fade-down" data-aos-delay="800">
              r
            </span>
            <span data-aos="fade-down" data-aos-delay="900">
              t
            </span>
            <span data-aos="fade-down" data-aos-delay="1000">
              f
            </span>
            <span data-aos="fade-down" data-aos-delay="1100">
              o
            </span>
            <span data-aos="fade-down" data-aos-delay="1200">
              l
            </span>
            <span data-aos="fade-down" data-aos-delay="1300">
              i
            </span>
            <span data-aos="fade-down" data-aos-delay="1400">
              o
            </span>
          </div>
          <div className="header__hamburger-icon" onClick={showHideNavbar}>
            <span id="header__hamburger-top-line"></span>
            <span id="header__hamburger-middle-line"></span>
            <span id="header__hamburger-bottom-line"></span>
          </div>
          <div className="header__nav-links" id="header__nav-links">
          <ul>
          <div className="header__nav-links-container">
                <li
                  className="header__route"
                  ref={navLinkAbout}
                  data-aos="fade-down"
                  data-aos-delay="0"
                >
                  <a href="#about">About</a>
                </li>
                <div className="header__route-bg"></div>
              </div>
              <div className="header__nav-links-container">
                <li
                  className="header__route"
                  ref={navLinkWork}
                  data-aos="fade-down"
                  data-aos-delay="200"
                >
                  <a href="#work">Works</a>
                </li>
                <div className="header__route-bg"></div>
              </div>
              <div className="header__nav-links-container">
                <li
                  className="header__route"
                  ref={navLinkContact}
                  data-aos="fade-down"
                  data-aos-delay="300"
                >
                  <a href="#contact">Contact me</a>
                </li>
                <div className="header__route-bg"></div>
              </div>
          </ul>
          </div>

        </div>
    </div>
    </>
)
};

export default Header;