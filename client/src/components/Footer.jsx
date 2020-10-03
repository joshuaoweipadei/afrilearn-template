import React from 'react'
import { Fragment } from 'react';
import { Col, Container, Row } from 'reactstrap';

import logo from '../assets/img/brand/afrilearn_logo.png'

const Footer = () => {
    return(
        <Fragment>
            <div className="footer-distributed">
                <Container className="container">
                    <Row className="row">
                        <Col md="4">
                            <div className="footer-left">
                                <div className="footer-logo">
                                    <img src={logo} alt=""/>
                                </div>
                                <p className="footer-company-name">34/5 Greenvilla road, Human Resources</p>
                                <p className="footer-company-name">Afrilearn International Limited</p>
                                <p className="footer-company-name">Company Name © 2020</p>
                                <div className="footer-icons">
                                    <a href="#" className="facebook"><i className="fa fa-facebook"></i></a>
                                    <a href="#" className="twitter"><i className="fa fa-twitter"></i></a>
                                    <a href="#" className="linkedin"><i className="fa fa-linkedin"></i></a>
                                    <a href="#" className="github"><i className="fa fa-github"></i></a>
                                </div>
                            </div>
                        </Col>
                        <Col md="4">
                            <div className="footer-middle">
                                <div className="footer-item">
                                    <h3>Quick Link</h3>
                                    <ul>
                                    <li><a href="#">FAQ</a></li>
                                    <li><a href="#">About Us</a></li>
                                    <li><a href="#">Blog</a></li>
                                    <li><a href="#">Careers</a></li>
                                    <li><a href="#">Forum</a></li>
                                    </ul>
                                </div>
                                <div className="footer-item" style={{marginTop: "40px"}}>
                                    <h3>New Business</h3>
                                    <p>Email us: info@example.com</p>
                                    <p>Phone: 281.444.3901</p>
                                    <p>Fax: 949.333.3106</p>
                                </div>
                            </div>
                        </Col>
                        <Col md="4">
                            <div className="footer-right">
                                <h3>Contact Us</h3>
                                <form>
                                    <input type="text" name="email" placeholder="Email" />
                                    <textarea name="message" placeholder="Message"></textarea>
                                    <button>Send <i className="fa fa-send"></i></button>
                                </form>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="footer-bottom shadow">
                <div>
                    <span>
                        © Afrilearn. All Rights Reserved.
                    </span>
                </div>
            </div>
        </Fragment>
    )
}

export default Footer;