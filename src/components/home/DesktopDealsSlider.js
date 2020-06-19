import React from "react";
import { Container, Carousel, Row, Col, Card } from "react-bootstrap";
import JunoonLogo from "../../images/noon_logo_black_english.svg";
import SouqLogo from "../../images/souq-logo-primary-en.svg";
import JarirLogo from "../../images/jarir.svg";
import NikeLogo from "../../images/nike-3.svg";
import NamshiLogo from "../../images/Page-1.svg";

const DesktopDealsSlider = () => {
  return (
    <Container className="container-body-koupon d-none d-md-block" expand="lg">
      <div id="myDealsSliderContainer" className="container">
        <h3 className="text-center">Explore popular deals and coupons</h3>
      </div>
      <Carousel indicators={false} id="myDealsSlider">
        <Carousel.Item>
          <Row className="text-center">
            <Col>
              <Card className="deals-koupon-slider-card">
                <div className="row deals-koupon-slider-img-yellow mx-auto">
                  <img
                    className="text-center mx-auto"
                    src={JunoonLogo}
                    alt=""
                  />
                </div>
                <div className="koupon-card-body">
                  <div className="deals-koupon-slider-timer">
                    <span className="deals-koupon-slider-timer-span">
                      Deal expires in 24h 40m
                    </span>
                    <p className="deals-koupon-slider-timer-p">
                      25% off TVs and Smartphones
                    </p>
                  </div>
                </div>
              </Card>
            </Col>
            <Col>
              <Card className="deals-koupon-slider-card">
                <div className="row deals-koupon-slider-img-blue mx-auto">
                  <img className="text-center mx-auto" src={SouqLogo} alt="" />
                </div>
                <div className="koupon-card-body">
                  <div className="deals-koupon-slider-timer">
                    <span className="deals-koupon-slider-timer-span">
                      Deal expires in 24h 40m
                    </span>
                    <p className="deals-koupon-slider-timer-p">
                      45% off electronics and gaming
                    </p>
                  </div>
                </div>
              </Card>
            </Col>
            <Col>
              <Card className="deals-koupon-slider-card">
                <div className="row deals-koupon-slider-img-red mx-auto">
                  <img className="text-center mx-auto" src={JarirLogo} alt="" />
                </div>
                <div className="koupon-card-body">
                  <div className="deals-koupon-slider-timer">
                    <span className="deals-koupon-slider-timer-span">
                      Deal expires in 24h 40m
                    </span>
                    <p className="deals-koupon-slider-timer-p">
                      15% off books and Printers
                    </p>
                  </div>
                </div>
              </Card>
            </Col>
            <Col>
              <Card className="deals-koupon-slider-card">
                <div className="row deals-koupon-slider-img-black mx-auto">
                  <img className="text-center mx-auto" src={NikeLogo} alt="" />
                </div>
                <div className="koupon-card-body">
                  <div className="deals-koupon-slider-timer">
                    <span className="deals-koupon-slider-timer-span">
                      Deal expires in 24h 40m
                    </span>
                    <p className="deals-koupon-slider-timer-p">
                      SR50 off shirts and Sneakers
                    </p>
                  </div>
                </div>
              </Card>
            </Col>
            <Col>
              <Card className="deals-koupon-slider-card">
                <div className="row deals-koupon-slider-img-black mx-auto">
                  <img
                    className="text-center mx-auto"
                    src={NamshiLogo}
                    alt=""
                  />
                </div>
                <div className="koupon-card-body">
                  <div className="deals-koupon-slider-timer">
                    <span className="deals-koupon-slider-timer-span">
                      Deal expires in 24h 40m
                    </span>
                    <p className="deals-koupon-slider-timer-p">
                      40% of dresses and bags
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

export default DesktopDealsSlider;
