import React from "react";
import { Container, Carousel, Row, Col } from "react-bootstrap";
import Fashion from "../../images/iconfinder_fashion_clothes_dress_3103890.svg";
import Food from "../../images/iconfinder_024_394431.svg";
import Travel from "../../images/iconfinder_airplane_plane_airport_2849668.svg";
import Electronics from "../../images/iconfinder_Gadget_iPhone_6_394122.svg";
import Beauty from "../../images/iconfinder_013_020_cosmetics_makeup_eyebrows_reminded_4954174.svg";

const MobileCategoriesCarousel = () => {
  return (
    <Container
      className="container-body-koupon  d-lg-none d-sm-block d-md-none"
      expand="lg"
    >
      <Carousel indicators={false} id="myCategories">
        <Carousel.Item>
          <Row className="text-center m-0">
            <Col className="d-inline-block p-0">
              <div className="img fashion">
                <img src={Fashion} alt="First slide" />
              </div>
              <span>Fashion</span>
            </Col>
            <Col className="d-inline-block p-0">
              <div className="img food">
                <img src={Food} alt="First slide" />
              </div>
              <span>Food</span>
            </Col>
            <Col className="d-inline-block p-0">
              <div className="img travel">
                <img src={Travel} alt="First slide" />
              </div>
              <span>Travel</span>
            </Col>
            <Col className="d-inline-block p-0">
              <div className="img electronics">
                <img src={Electronics} alt="First slide" />
              </div>
              <span>Electronics</span>
            </Col>
            <Col className="d-inline-block p-0">
              <div className="img beauty">
                <img src={Beauty} alt="First slide" />
              </div>
              <span>Beauty</span>
            </Col>
          </Row>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
};

export default MobileCategoriesCarousel;
