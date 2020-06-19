import React from "react";
import { Container, Image } from "react-bootstrap";
import Banner from "../../images/banner.png";

const DesktopBannerAd = () => {
  return (
    <Container className="koupon-banner d-none d-md-block" expand="lg">
      <Image src={Banner} />
    </Container>
  );
};

export default DesktopBannerAd;
