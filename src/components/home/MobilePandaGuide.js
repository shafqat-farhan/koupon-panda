import React from "react";
import { Container, Image } from "react-bootstrap";
import PandaGuide from "../../images/Mask Group 1.png";

const MobilePandaGuide = () => {
  return (
    <Container
      className="container-body-koupon d-lg-none d-sm-block d-md-none"
      expand="lg"
    >
      <div className="koupon-mobile-panda-guide-book text-center">
        <Image src={PandaGuide} />
      </div>
      <div className="koupon-mobile-panda-guide">
        <h1 className="koupon-mobile-panda-guide-heading text-center m-0">
          Panda Guide
        </h1>
        <span className="koupon-mobile-panda-guide-text text-center">
          The ultimate blog with shopping tips and money saving hacks
        </span>
        <div className="koupon-mobile-panda-guide-button text-center">
          <a href="#guide" className="koupon-mobile-panda-guide-anchor">
            Explore Now
          </a>
        </div>
      </div>
    </Container>
  );
};

export default MobilePandaGuide;
