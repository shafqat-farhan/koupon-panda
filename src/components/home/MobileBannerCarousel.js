import React from "react";
import { Container, Carousel } from "react-bootstrap";
import Banner from "../../images/mobile-banner.png";

const MobileBannerCarousel = () => {
  return (
    <Container
      className="container-body-koupon koupon-banner-carousel d-lg-none d-sm-block d-md-none"
      expand="lg"
    >
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={Banner} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Banner} alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Banner} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
    </Container>
  );
};

export default MobileBannerCarousel;
