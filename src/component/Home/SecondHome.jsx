import React, { useEffect } from "react";
import "../Home/SecondHome.css";

export default function SecondHome() {
  useEffect(() => {
    const next = document.getElementById('next');
    const prev = document.getElementById('prev');
    const trak = document.getElementById('progress');
    const step = document.getElementById('step');

    const handleNextClick = () => {
      let cls = trak.className.split('-').pop();
      cls > 6 ? (cls = 0) : cls++;

      step.innerHTML = cls;
      trak.className = 'progress-' + cls;
    };

    const handlePrevClick = () => {
      let cls = trak.className.split('-').pop();
      cls < 1 ? (cls = 7) : cls--;

      step.innerHTML = cls;
      trak.className = 'progress-' + cls;
    };

    next.addEventListener('click', handleNextClick);
    prev.addEventListener('click', handlePrevClick);

    return () => {
      next.removeEventListener('click', handleNextClick);
      prev.removeEventListener('click', handlePrevClick);
    };
  }, []); // Empty dependency array means this effect will run once after the initial render.

  // Commented out initMap since it's not being used.
  // function initMap() {
  //   // var map = new google.maps.Map(document.getElementById('map'), {
  //   //   center: {lat: 40.7128, lng: -74.0060},
  //   //   zoom: 12
  //   // });
  // }

  return (
    <div>
      {/* <!--=============== HEADER ===============-->*/}
      <header className="header" id="header">
        <nav className="nav container">
          <a href="#" className="nav__logo">
            {/* Replace with your logo or image */}
            <img src="../assets.Screenshot(262).png" alt="" width="160px" />
          </a>

          <div className="nav__menu" id="nav-menu">
            <ul className="nav__list">
              <li className="nav__item">
                <a href="#home" className="nav__link active-link">
                  Home
                </a>
              </li>
              <li className="nav__item">
                <a href="#about" className="nav__link">
                  Booking
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      {/* <!--=============== HOME ===============--> */}
      <section className="home section" id="home">
        <div className="home__container container grid">
          <div className="home__data">
            <div className="home__actionRow__2zr8E">
              <div className="cha-destination">
                <div className="city-selct__citySelect__7GeJ0">
                  <h4 role="button" tabindex="-123">
                    Delivery in Phnom Penh
                  </h4>
                </div>
                <i
                  aria-label="icon: down"
                  title=""
                  tabindex="-1"
                  class="anticon anticon-down grab-ui ant-dropdown-trigger"
                >
                  <svg
                    viewBox="64 64 896 896"
                    focusable="false"
                    class=""
                    data-icon="down"
                    width="1em"
                    height="1em"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"></path>
                  </svg>
                </i>
              </div>
            </div>
            <div className="ant-row-flex styles__bookOrderWidget___1orvu">
              <div className="deli-destination">
                <div className="ant-col styles__poiField___1MV95 styles__pickUp___3yfVZ ant-col-xs-22 ant-col-md-6">
                  <div className="styles__location___3el4p">
                    <h6>Delivery from...</h6>
                  </div>
                </div>
                <div class="ant-col styles__swapField___S3fmc ant-col-xs-2 ant-col-md-1">
                  <span class="styles__swapIcon___2sM6A">
                    <i
                      aria-label="icon: swap"
                      title=""
                      tabindex="-1"
                      class="anticon anticon-swap"
                    >
                      <svg
                        viewBox="64 64 896 896"
                        focusable="false"
                        class=""
                        data-icon="swap"
                        width="1em"
                        height="1em"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M847.9 592H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h605.2L612.9 851c-4.1 5.2-.4 13 6.3 13h72.5c4.9 0 9.5-2.2 12.6-6.1l168.8-214.1c16.5-21 1.6-51.8-25.2-51.8zM872 356H266.8l144.3-183c4.1-5.2.4-13-6.3-13h-72.5c-4.9 0-9.5 2.2-12.6 6.1L150.9 380.2c-16.5 21-1.6 51.8 25.1 51.8h696c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"></path>
                      </svg>
                    </i>
                  </span>
                </div>
                <div className="ant-col styles__poiField___1MV95 styles__dropOff___2jYMB ant-col-xs-24 ant-col-md-6">
                  <div className="styles__location___3el4p">
                    <h6> Delivery to... </h6>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </div>
        <div className="ant-col ant-col-xs-24 ant-col-md-7">
        <div className="styles__serviceConfigField___12kzv styles__serviceConfigField___E4mtl">
          <div className="styles__content___1bzVR styles__disabled___2V8Wn">
            <div className="styles__selectedOption___1TAHx">
              <div className="styles__firstRow___3rK11">
               
                <div className="flex flex-col justify-center w-full items-center">
                <h6>Delivery Status</h6>
            <div class="tracking-wrapper">
              <div class="tracking">
                <div id="progress" class="progress-0">
                  <div class="empty-bar"></div>
                  <div class="color-bar"></div>
                  <ul>
                    <li class="bullet-1">
                      <div class="el">
                        <i class="bx bx-check"></i>
                      </div>
                      <div class="txt">Order Accepted</div>
                    </li>
                    <li class="bullet-2">
                      <div class="el">
                        <i class="bx bx-check"></i>
                      </div>
                      <div class="txt">Order Shipped</div>
                    </li>
                    <li class="bullet-3">
                      <div class="el">
                        <i class="bx bx-check"></i>
                      </div>
                      <div class="txt">Order En Route</div>
                    </li>
                    <li class="bullet-4">
                      <div class="el">
                        <i class="bx bx-check"></i>
                      </div>
                      <div class="txt">Order Arrived</div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="controls">
              <div>
                <button id="prev">
                  <i class="bx bx-chevron-left"></i> Prev
                </button>
                <button id="next">
                  Next <i class="bx bx-chevron-right"></i>
                </button>
              </div>
              <div>
                <p>
                  Step: <span id="step">0</span>
                </p>
              </div>
            </div>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </section>
    </div>
  );
}
