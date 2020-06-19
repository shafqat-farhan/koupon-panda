import React from "react";
import { Container, Image } from "react-bootstrap";
import Banner from "../../images/Mobile-Ad.png";

const DesktopBannerAd = () => {
  return (
    <Container
      className="koupon-mobile-banner-ad d-lg-none d-sm-block d-md-none text-center"
      expand="lg"
    >
      <Image src={Banner} />
    </Container>
  );
};

export default DesktopBannerAd;
