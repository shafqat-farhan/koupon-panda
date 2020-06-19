import React from "react";
import Slider from "react-slick";
import { Card } from "react-bootstrap";
import JunoonLogo from "../../images/noon_logo_black_english.svg";
import MothercareLogo from "../../images/Page-2.svg";
import RedseaLogo from "../../images/Layer 2.svg";
import SephoraLogo from "../../images/sephora-logo.svg";
import RehlatLogo from "../../images/rehlat_logo_ltr.svg";

const MobileOffersSlider = () => {
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
    <div className="koupon-mobile-offers-slider-parent d-lg-none d-sm-block d-md-none">
      <div id="myMobileOffersSliderContainer" className="container">
        <h3 className="text-center">
          Last chance - These deals are ending soon
        </h3>
      </div>
      <Slider {...settings}>
        <Card className="offers-koupon-mobile-slider-card">
          <div className="row offers-koupon-mobile-slider-img-dark-red mx-auto">
            <img className="text-center mx-auto" src={JunoonLogo} alt="" />
          </div>
          <div className="koupon-card-mobile-offers-body">
            <div className="offers-koupon-mobile-slider-timer">
              <span className="offers-koupon-mobile-slider-timer-span">
                Deal expires in 24h 40m
              </span>
              <p className="offers-koupon-mobile-slider-timer-p">
                25% off TVs and Smartphones
              </p>
            </div>
          </div>
        </Card>
        <Card className="offers-koupon-mobile-slider-card">
          <div className="row offers-koupon-mobile-slider-img-dark-blue mx-auto">
            <img className="text-center mx-auto" src={MothercareLogo} alt="" />
          </div>
          <div className="koupon-card-mobile-offers-body">
            <div className="offers-koupon-mobile-slider-timer">
              <span className="offers-koupon-mobile-slider-timer-span">
                Deal expires in 24h 40m
              </span>
              <p className="offers-koupon-mobile-slider-timer-p">
                25% off TVs and Smartphones
              </p>
            </div>
          </div>
        </Card>
        <Card className="offers-koupon-mobile-slider-card">
          <div className="row offers-koupon-mobile-slider-img-orange mx-auto">
            <img className="text-center mx-auto" src={RedseaLogo} alt="" />
          </div>
          <div className="koupon-card-mobile-offers-body">
            <div className="offers-koupon-mobile-slider-timer">
              <span className="offers-koupon-mobile-slider-timer-span">
                Deal expires in 24h 40m
              </span>
              <p className="offers-koupon-mobile-slider-timer-p">
                25% off TVs and Smartphones
              </p>
            </div>
          </div>
        </Card>
        <Card className="offers-koupon-mobile-slider-card">
          <div className="row offers-koupon-mobile-slider-img-black mx-auto">
            <img className="text-center mx-auto" src={SephoraLogo} alt="" />
          </div>
          <div className="koupon-card-mobile-offers-body">
            <div className="offers-koupon-mobile-slider-timer">
              <span className="offers-koupon-mobile-slider-timer-span">
                Deal expires in 24h 40m
              </span>
              <p className="offers-koupon-mobile-slider-timer-p">
                25% off TVs and Smartphones
              </p>
            </div>
          </div>
        </Card>
        <Card className="offers-koupon-mobile-slider-card">
          <div className="row offers-koupon-mobile-slider-img-pink mx-auto">
            <img className="text-center mx-auto" src={RehlatLogo} alt="" />
          </div>
          <div className="koupon-card-mobile-offers-body">
            <div className="offers-koupon-mobile-slider-timer">
              <span className="offers-koupon-mobile-slider-timer-span">
                Deal expires in 24h 40m
              </span>
              <p className="offers-koupon-mobile-slider-timer-p">
                25% off TVs and Smartphones
              </p>
            </div>
          </div>
        </Card>
      </Slider>
    </div>
  );
};

export default MobileOffersSlider;
