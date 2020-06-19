import React from "react";
import { Container, Carousel, Row, Col } from "react-bootstrap";
import Fashion from "../../images/iconfinder_fashion_clothes_dress_3103890.svg";
import Food from "../../images/iconfinder_024_394431.svg";
import Travel from "../../images/iconfinder_airplane_plane_airport_2849668.svg";
import Electronics from "../../images/iconfinder_Gadget_iPhone_6_394122.svg";
import Beauty from "../../images/iconfinder_013_020_cosmetics_makeup_eyebrows_reminded_4954174.svg";
import Jewelry from "../../images/iconfinder_253_278750.svg";
import Auto from "../../images/g3123.svg";

const DesktopCategoriesCarousel = () => {
  return (
    <Container className="container-body-koupon d-none d-md-block" expand="lg">
      <Carousel indicators={false} id="myCategories">
        <Carousel.Item>
          <Row className="text-center">
            <Col className="d-inline-block">
              <div className="img fashion">
                <img src={Fashion} alt="First slide" />
              </div>
              <span>Fashion</span>
            </Col>
            <Col className="d-inline-block">
              <div className="img food">
                <img src={Food} alt="First slide" />
              </div>
              <span>Food</span>
            </Col>
            <Col className="d-inline-block">
              <div className="img travel">
                <img src={Travel} alt="First slide" />
              </div>
              <span>Travel</span>
            </Col>
            <Col className="d-inline-block">
              <div className="img electronics">
                <img src={Electronics} alt="First slide" />
              </div>
              <span>Electronics</span>
            </Col>
            <Col className="d-inline-block">
              <div className="img beauty">
                <img src={Beauty} alt="First slide" />
              </div>
              <span>Beauty</span>
            </Col>
            <Col className="d-inline-block">
              <div className="img jewelry">
                <img src={Jewelry} alt="First slide" />
              </div>
              <span>Jewelry</span>
            </Col>
            <Col className="d-inline-block">
              <div className="img auto">
                <img src={Auto} alt="First slide" />
              </div>
              <span>Auto</span>
            </Col>
          </Row>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
};

export default DesktopCategoriesCarousel;
