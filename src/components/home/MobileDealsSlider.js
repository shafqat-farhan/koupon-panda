import React from "react";
import Slider from "react-slick";
import { Card } from "react-bootstrap";
import JunoonLogo from "../../images/noon_logo_black_english.svg";
import SouqLogo from "../../images/souq-logo-primary-en.svg";
import JarirLogo from "../../images/jarir.svg";
import NikeLogo from "../../images/nike-3.svg";
import NamshiLogo from "../../images/Page-1.svg";

const MobileDealsSlider = () => {
  const settings = {
    //className: "center",
    className: "slider variable-width",
    centerMode: true,
    infinite: true,
    //centerPadding: "10px",
    //slidesToShow: 2.2,
    //speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
  };
  return (
    <div className="koupon-mobile-deals-slider-parent d-lg-none d-sm-block d-md-none">
      <div id="myMobileDealsSliderContainer" className="container">
        <h3 className="text-center">Explore popular deals and coupons</h3>
      </div>
      <Slider {...settings}>
        <Card className="deals-koupon-mobile-slider-card">
          <div className="row deals-koupon-mobile-slider-img-yellow mx-auto">
            <img className="text-center mx-auto" src={JunoonLogo} alt="" />
          </div>
          <div className="koupon-card-mobile-deals-body">
            <div className="deals-koupon-mobile-slider-timer">
              <span className="deals-koupon-mobile-slider-timer-span">
                Deal expires in 24h 40m
              </span>
              <p className="deals-koupon-mobile-slider-timer-p">
                25% off TVs and Smartphones
              </p>
            </div>
          </div>
        </Card>
        <Card className="deals-koupon-mobile-slider-card">
          <div className="row deals-koupon-mobile-slider-img-blue mx-auto">
            <img className="text-center mx-auto" src={SouqLogo} alt="" />
          </div>
          <div className="koupon-card-mobile-deals-body">
            <div className="deals-koupon-mobile-slider-timer">
              <span className="deals-koupon-mobile-slider-timer-span">
                Deal expires in 24h 40m
              </span>
              <p className="deals-koupon-mobile-slider-timer-p">
                25% off TVs and Smartphones
              </p>
            </div>
          </div>
        </Card>
        <Card className="deals-koupon-mobile-slider-card">
          <div className="row deals-koupon-mobile-slider-img-red mx-auto">
            <img className="text-center mx-auto" src={JarirLogo} alt="" />
          </div>
          <div className="koupon-card-mobile-deals-body">
            <div className="deals-koupon-mobile-slider-timer">
              <span className="deals-koupon-mobile-slider-timer-span">
                Deal expires in 24h 40m
              </span>
              <p className="deals-koupon-mobile-slider-timer-p">
                25% off TVs and Smartphones
              </p>
            </div>
          </div>
        </Card>
        <Card className="deals-koupon-mobile-slider-card">
          <div className="row deals-koupon-mobile-slider-img-black mx-auto">
            <img className="text-center mx-auto" src={NikeLogo} alt="" />
          </div>
          <div className="koupon-card-mobile-deals-body">
            <div className="deals-koupon-mobile-slider-timer">
              <span className="deals-koupon-mobile-slider-timer-span">
                Deal expires in 24h 40m
              </span>
              <p className="deals-koupon-mobile-slider-timer-p">
                25% off TVs and Smartphones
              </p>
            </div>
          </div>
        </Card>
        <Card className="deals-koupon-mobile-slider-card">
          <div className="row deals-koupon-mobile-slider-img-black-one mx-auto">
            <img className="text-center mx-auto" src={NamshiLogo} alt="" />
          </div>
          <div className="koupon-card-mobile-deals-body">
            <div className="deals-koupon-mobile-slider-timer">
              <span className="deals-koupon-mobile-slider-timer-span">
                Deal expires in 24h 40m
              </span>
              <p className="deals-koupon-mobile-slider-timer-p">
                25% off TVs and Smartphones
              </p>
            </div>
          </div>
        </Card>
      </Slider>
    </div>
  );
};

export default MobileDealsSlider;
