import React from "react";
import { Container, Carousel, Row, Col, Card } from "react-bootstrap";
import JunoonLogo from "../../images/noon_logo_black_english.svg";
import MothercareLogo from "../../images/Page-2.svg";
import RedseaLogo from "../../images/Layer 2.svg";
import SephoraLogo from "../../images/sephora-logo.svg";
import RehlatLogo from "../../images/rehlat_logo_ltr.svg";

const DesktopOffersSlider = () => {
  return (
    <Container className="container-body-koupon d-none d-md-block" expand="lg">
      <div id="myOffersSliderContainer" className="container">
        <h3 className="text-center">
          Last chance - These deals are ending soon
        </h3>
      </div>
      <Carousel indicators={false} id="myOffersSlider">
        <Carousel.Item>
          <Row className="text-center">
            <Col>
              <Card className="offers-koupon-slider-card">
                <div className="row offers-koupon-slider-img-dark-red mx-auto">
                  <img
                    className="text-center mx-auto"
                    src={JunoonLogo}
                    alt=""
                  />
                </div>
                <div className="koupon-card-body">
                  <div className="offers-koupon-slider-timer">
                    <span className="offers-koupon-slider-timer-span">
                      Deal expires in 24h 40m
                    </span>
                    <p className="offers-koupon-slider-timer-p">
                      45% off sale on women’s shoes
                    </p>
                  </div>
                </div>
              </Card>
            </Col>
            <Col>
              <Card className="offers-koupon-slider-card">
                <div className="row offers-koupon-slider-img-dark-blue mx-auto">
                  <img
                    className="text-center mx-auto"
                    src={MothercareLogo}
                    alt=""
                  />
                </div>
                <div className="koupon-card-body">
                  <div className="offers-koupon-slider-timer">
                    <span className="offers-koupon-slider-timer-span">
                      Deal expires in 24h 40m
                    </span>
                    <p className="offers-koupon-slider-timer-p">
                      15% off strollers and carseats
                    </p>
                  </div>
                </div>
              </Card>
            </Col>
            <Col>
              <Card className="offers-koupon-slider-card">
                <div className="row offers-koupon-slider-img-orange mx-auto">
                  <img
                    className="text-center mx-auto"
                    src={RedseaLogo}
                    alt=""
                  />
                </div>
                <div className="koupon-card-body">
                  <div className="offers-koupon-slider-timer">
                    <span className="offers-koupon-slider-timer-span">
                      Deal expires in 24h 40m
                    </span>
                    <p className="offers-koupon-slider-timer-p">
                      SR50 Off TVs and home appliances
                    </p>
                  </div>
                </div>
              </Card>
            </Col>
            <Col>
              <Card className="offers-koupon-slider-card">
                <div className="row offers-koupon-slider-img-black mx-auto">
                  <img
                    className="text-center mx-auto"
                    src={SephoraLogo}
                    alt=""
                  />
                </div>
                <div className="koupon-card-body">
                  <div className="offers-koupon-slider-timer">
                    <span className="offers-koupon-slider-timer-span">
                      Deal expires in 24h 40m
                    </span>
                    <p className="offers-koupon-slider-timer-p">
                      SR25 cash back on SR100 purchase
                    </p>
                  </div>
                </div>
              </Card>
            </Col>
            <Col>
              <Card className="offers-koupon-slider-card">
                <div className="row offers-koupon-slider-img-pink mx-auto">
                  <img
                    className="text-center mx-auto"
                    src={RehlatLogo}
                    alt=""
                  />
                </div>
                <div className="koupon-card-body">
                  <div className="offers-koupon-slider-timer">
                    <span className="offers-koupon-slider-timer-span">
                      Deal expires in 24h 40m
                    </span>
                    <p className="offers-koupon-slider-timer-p">
                      SR120 off flight booking
                    </p>
                  </div>
                </div>
              </Card>
            </Col>
          </Row>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
};

export default DesktopOffersSlider;
