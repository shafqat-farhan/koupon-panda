import React from "react";
import { Image } from "react-bootstrap";
import FacebookLogo from "../../images/Group 65.svg";
import TwitterLogo from "../../images/Group 62.svg";
import InstaLogo from "../../images/Group 63.svg";
import FooterLogo from "../../images/KouponPanda-EN-Footer-Mobile.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";

const MobileFooter = () => {
  return (
    <footer className="koupon-mobile-footer d-lg-none d-sm-block d-md-none">
      <div className="koupon-panda-mobile-footer-logo-inner">
        <span className="koupon-panda-mobile-footer-logo-img">
          <Image src={FooterLogo} />
        </span>
        <span className="koupon-panda-mobile-footer-logo-inner-text">
          Koupon Panda helps you save time and money so you get the best deals
          and don’t end up spending more than you should.
        </span>
      </div>
      <div className="koupon-panda-mobile-footer-menu">
        <ul className="list-unstyled quick-links text-center m-0">
          <li>
            <a className="koupon-panda-mobile-footer-menu-text" href="#home">
              About {" | "}
            </a>
          </li>
          <li>
            <a className="koupon-panda-mobile-footer-menu-text" href="#home">
              Contact {" | "}
            </a>
          </li>
          <li>
            <a className="koupon-panda-mobile-footer-menu-text" href="#home">
              Advertise {" | "}
            </a>
          </li>
          <li>
            <a className="koupon-panda-mobile-footer-menu-text" href="#home">
              Submit Coupon
            </a>
          </li>
        </ul>
        <ul className="list-unstyled quick-links text-center m-0">
          <li>
            <a className="koupon-panda-mobile-footer-menu-text" href="#home">
              Panda Guide {" | "}
            </a>
          </li>
          <li>
            <a className="koupon-panda-mobile-footer-menu-text" href="#home">
              Top Stores
            </a>
          </li>
        </ul>
      </div>
      <div className="koupon-mobile-footer-search">
        <form className="form-inline ml-auto">
          <div className="input-group">
            <input
              type="text"
              className="form-control mr-sm-2 subscribe-mobile-footer-koupon"
              placeholder="Subscribe for latest deals and offers"
            />
            <span className="input-group-addon subscribe-mobile-footer-icon-span-koupon">
              <FontAwesomeIcon
                icon={faLongArrowAltRight}
                className="subscribe-footer-icon-koupon"
              />
            </span>
          </div>
        </form>
      </div>
      <div className="koupon-mobile-footer-title">
        <h1 className="koupon-mobile-footer-title-heading text-center m-0">
          Don't be shy - start a conversation
        </h1>
      </div>
      <div className="koupon-mobile-footer-social-icons text-center">
        <Image
          className="koupon-mobile-footer-social-icons-facebook"
          src={FacebookLogo}
        />
        <Image
          className="koupon-mobile-footer-social-icons-twitter"
          src={TwitterLogo}
        />
        <Image
          className="koupon-mobile-footer-social-icons-insta"
          src={InstaLogo}
        />
      </div>
      <div className="koupon-mobile-footer-contact-email text-center">
        <span className="koupon-mobile-footer-email">
          hello@kouponpanda.com
        </span>
      </div>
      <div className="koupon-mobile-footer-terms-policy text-center">
        <span className="koupon-mobile-footer-terms">Terms of use</span>
        <span className="koupon-mobile-footer-policy">privacy policy</span>
      </div>
      <div className="koupon-mobile-footer-copy-rights text-center">
        ©2020 Kouponpanda. all rights reserved
      </div>
    </footer>
  );
};

export default MobileFooter;
