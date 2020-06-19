import React from "react";
import { Image } from "react-bootstrap";
import FacebookLogo from "../../images/Group 65.svg";
import TwitterLogo from "../../images/Group 62.svg";
import InstaLogo from "../../images/Group 63.svg";
import FooterLogo from "../../images/KouponPanda-EN-Footer-Desktop.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";

const DesktopFooter = () => {
  return (
    <footer className="koupon-footer d-none d-md-block">
      <div className="koupon-footer-left">
        <div className="koupon-footer-inner-heading-email-icons">
          <h1 className="koupon-footer-heading">
            Don't be shy - start a conversation
          </h1>
          <span className="koupon-footer-contact-email">
            hello@kouponpanda.com
          </span>
          <span className="koupon-footer-social-icons">
            <Image src={FacebookLogo} />
            <Image src={TwitterLogo} />
            <Image src={InstaLogo} />
          </span>
        </div>
        <div className="koupon-panda-footer-logo-inner">
          <span className="koupon-panda-footer-logo-img">
            <Image src={FooterLogo} />
          </span>
          <span className="koupon-panda-footer-logo-inner-text">
            Koupon Panda helps you save time and money so you get the best deals
            and don’t end up spending more than you should.
          </span>
        </div>
        <div className="koupon-copy-rights-text">
          ©2020 Kouponpanda. all rights reserved
        </div>
      </div>
      <div className="koupon-footer-right">
        <form className="form-inline ml-auto d-none d-lg-block">
          <div className="input-group">
            <input
              type="text"
              className="form-control mr-sm-2 subscribe-footer-koupon"
              placeholder="Subscribe for latest deals and offers"
            />
            <span className="input-group-addon subscribe-footer-icon-span-koupon">
              <FontAwesomeIcon
                icon={faLongArrowAltRight}
                className="subscribe-footer-icon-koupon"
              />
            </span>
          </div>
        </form>
        <div className="koupon-footer-right-inner-menu">
          <div className="row text-center text-xs-center text-sm-left text-md-left">
            <div className="col-xs-12 col-sm-4 col-md-4 koupon-footer-right-inner-menu-column">
              <ul className="list-unstyled quick-links">
                <li>
                  <a
                    className="koupon-footer-right-inner-menu-a"
                    href="https://www.fiverr.com/share/qb8D02"
                  >
                    Top Stores
                  </a>
                </li>
                <li>
                  <a
                    className="koupon-footer-right-inner-menu-a"
                    href="https://www.fiverr.com/share/qb8D02"
                  >
                    About
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 koupon-footer-right-inner-menu-column">
              <ul className="list-unstyled quick-links">
                <li>
                  <a
                    className="koupon-footer-right-inner-menu-a"
                    href="https://www.fiverr.com/share/qb8D02"
                  >
                    Advertise
                  </a>
                </li>
                <li>
                  <a
                    className="koupon-footer-right-inner-menu-a"
                    href="https://www.fiverr.com/share/qb8D02"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 koupon-footer-right-inner-menu-column">
              <ul className="list-unstyled quick-links">
                <li>
                  <a
                    className="koupon-footer-right-inner-menu-a"
                    href="https://www.fiverr.com/share/qb8D02"
                  >
                    Panda Guide
                  </a>
                </li>
                <li>
                  <a
                    className="koupon-footer-right-inner-menu-a"
                    href="https://www.fiverr.com/share/qb8D02"
                  >
                    Submit Coupon
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="koupon-footer-small-menu">
          <span className="koupon-footer-small-menu-terms">Terms of use</span>
          <span className="koupon-footer-small-menu-privacy">
            privacy policy
          </span>
        </div>
      </div>
    </footer>
  );
};

export default DesktopFooter;
