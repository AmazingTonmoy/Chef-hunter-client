import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-dark text-light  py-5">
      <Container>
        <Row>
          <Col md={4}>
            <h5>About Us</h5>
            <p>We Have World Best Chef & Their Recipe.</p>
          </Col>
          <Col md={4}>
            <h5>Connect with Us</h5>
            <ul className="list-unstyled">
              <li><FaFacebook /> <a href="#">Facebook</a></li>
              <li><FaTwitter /> <a href="#">Twitter</a></li>
              <li><FaInstagram /> <a href="#">Instagram</a></li>
            </ul>
          </Col>
          <Col md={4}>
            <h5>Contact Us</h5>
            <address>
              <strong>Chef Bazar, Inc.</strong><br />
              1234 Main Street<br />
              Anytown, USA 12345<br />
              <p title="Phone">Phone : (123) 456-7890</p> 
            </address>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col md={12}>
            <p className="text-center">&copy; {new Date().getFullYear()} Chef Bazar Inc. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
