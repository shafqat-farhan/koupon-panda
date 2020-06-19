import React from "react";
import { Container, Carousel } from "react-bootstrap";
import Banner from "../../images/select_echte fans_duizend-artikelen_cp-header@2x.png";

const DesktopBannerCarousel = () => {
  return (
    <Container
      className="container-body-koupon koupon-banner-carousel d-none d-md-block"
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

export default DesktopBannerCarousel;
