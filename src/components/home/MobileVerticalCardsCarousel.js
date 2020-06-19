import React from "react";
import Slider from "react-slick";
import { Card } from "react-bootstrap";
import Fashion from "../../images/fashion.png";
import Dubai from "../../images/dubai.png";
import Food from "../../images/food.png";
import Makeup from "../../images/makeup.png";

const MobileVerticalCardsCarousel = () => {
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
    <div className="koupon-mobile-vertical-slider-parent d-lg-none d-sm-block d-md-none">
      <Slider {...settings}>
        <Card className="koupon-mobile-vertical-slider">
          <Card.Img variant="top" src={Fashion} />
          <Card.Body className="koupon-mobile-vertical-slider-koupon-body text-center">
            <Card.Text className="koupon-mobile-vertical-slider-koupon-text">
              25% off dresses on <strong>Namshi</strong>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="koupon-mobile-vertical-slider">
          <Card.Img variant="top" src={Dubai} />
          <Card.Body className="koupon-mobile-vertical-slider-koupon-body text-center">
            <Card.Text className="koupon-mobile-vertical-slider-koupon-text">
              10% saving on flights to <strong>Dubai</strong>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="koupon-mobile-vertical-slider">
          <Card.Img variant="top" src={Food} />
          <Card.Body className="koupon-mobile-vertical-slider-koupon-body text-center">
            <Card.Text className="koupon-mobile-vertical-slider-koupon-text">
              SR20 discount at <strong>HungerStation</strong>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="koupon-mobile-vertical-slider">
          <Card.Img variant="top" src={Makeup} />
          <Card.Body className="koupon-mobile-vertical-slider-koupon-body text-center">
            <Card.Text className="koupon-mobile-vertical-slider-koupon-text">
              2 free samples with SR100 purchase on
              <strong>Sephora</strong>
            </Card.Text>
          </Card.Body>
        </Card>
      </Slider>
    </div>
  );
};

export default MobileVerticalCardsCarousel;
