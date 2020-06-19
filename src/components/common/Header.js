import React, { useState } from "react";
import Logo from "../../images/KouponPanda-EN-Header-Desktop.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";
import MobileLogo from "../../images/log-rgb.svg";
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Image,
  NavDropdown,
} from "react-bootstrap/";

const Header = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <Navbar
        collapseOnSelect
        expand="md"
        expanded={expanded}
        className="bg-header-koupon mb-3"
        variant="dark"
      >
        <Navbar.Brand href="#home" className="d-none d-md-block">
          <Image src={Logo} className="koupon-logo-text" />
        </Navbar.Brand>
        <Nav className="mx-auto w-100 justify-content-center align-items-center d-lg-none d-sm-block d-md-none position-absolute koupon-mobile-logo">
          <Image src={MobileLogo} className="d-lg-none d-sm-block d-md-none" />
          <FontAwesomeIcon
            icon={faSearch}
            className="position-absolute koupon-mobile-search-icon"
          />
        </Nav>
        <Nav className="mx-auto w-100 justify-content-center align-items-center">
          <Form inline className="position-relative d-none d-md-flex">
            <FormControl
              type="text"
              placeholder="Search for an offer or brand"
              className="mr-sm-2 search-header-koupon"
            />
            <FontAwesomeIcon
              className="position-absolute search-header-icon-span-koupon search-header-icon-koupon"
              icon={faSearch}
            />
          </Form>
        </Nav>
        <Navbar.Toggle
          onClick={() => setExpanded(expanded ? false : "expanded")}
          aria-controls="responsive-navbar-nav"
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto"></Nav>
          <Nav
            onClick={() => setExpanded(false)}
            className="koupon-nav-item d-sm-block d-xs-block d-md-none d-lg-none"
          >
            <FontAwesomeIcon
              onClick={() => setExpanded(false)}
              className="position-absolute koupon-mobile-cross-icon"
              icon={faTimes}
            />
            <Nav.Link
              className="koupon-nav-item-a koupon-mobile-menu-logo"
              href="#home"
            >
              <Image className="d-block" src={MobileLogo} />
              <span className="koupon-mobile-menu-logo-text">Koupon Panda</span>
              <span className="koupon-mobile-menu-logo-slogan">
                {" "}
                - Save More, Buy Smarter
              </span>
            </Nav.Link>
            <div className="koupon-mobile-menu-vertically-align">
              <Nav.Link className="koupon-nav-item-a" href="#about">
                About Us
              </Nav.Link>
              <Nav.Link className="koupon-nav-item-a" href="#contact">
                Contact
              </Nav.Link>
              <Nav.Link className="koupon-nav-item-a" href="#advertise">
                Advertise
              </Nav.Link>
              <Nav.Link className="koupon-nav-item-a" href="#submitcoupon">
                Submit Coupon
              </Nav.Link>
              <Nav.Link className="koupon-nav-item-a" href="#guide">
                Panda Guide
              </Nav.Link>
              <Nav.Link className="koupon-nav-item-a" href="#stores">
                Top Stores
              </Nav.Link>
            </div>

            <div className="koupon-mobile-menu-bottom position-absolute">
              <div className="koupon-mobile-menu-bottom-inner">
                <Nav.Link
                  className="koupon-nav-item-a-bottom-fixed"
                  href="#deets"
                >
                  Language
                </Nav.Link>
                <Nav.Link
                  className="koupon-nav-item-span-bottom-fixed-arabic"
                  href="#deets"
                >
                  العربية
                </Nav.Link>
              </div>
              <div className="koupon-mobile-menu-bottom-inner">
                <Nav.Link
                  className="koupon-nav-item-a-bottom-fixed"
                  href="#deets"
                >
                  Country
                </Nav.Link>
                <Nav.Link
                  className="koupon-nav-item-span-bottom-fixed-english"
                  href="#deets"
                >
                  Saudi Arabia
                </Nav.Link>
              </div>
            </div>

            {/* <NavDropdown title="Saudi Arabias" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
        <Nav className="koupon-nav-item d-none d-md-flex">
          <Nav.Link className="koupon-nav-item-a" href="#deets">
            العربية
          </Nav.Link>
          <NavDropdown
            className="koupon-nav-item-a"
            title="Saudi Arabia"
            id="collasible-nav-dropdown"
          >
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar>
    </>
  );
};

export default Header;
