import React, { Fragment,useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import logof2 from '../../public/assets/images/icon/logo/f2.png';
import CopyRight from './common/copyright';
import { SlideUpDown } from "../../services/script"

const FooterSeven = () => {
    useEffect(() => {
        var contentwidth = window.innerWidth;
        if ((contentwidth) < 750) {
            SlideUpDown('footer-title');
        } else {
            var elems = document.querySelectorAll(".footer-title");
            [].forEach.call(elems, function (elemt) {
                let el = elemt.nextElementSibling;
                el.style = "display: block";
            });
        }
    }, [])
    return (
        <Fragment>
            <footer className="footer-5">
                <div className="dark-layout">
                    <Container>
                        <section className="section-b-space">
                            <Row className="footer-theme2">
                                <Col lg="3">
                                    <div className="footer-title footer-mobile-title">
                                        <h4>about</h4>
                                    </div>
                                    <div className="footer-contant">
                                        <div className="footer-logo">
                                            <img src={logof2} alt="" />
                                        </div>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.Lorem ipsum dolor sit amet, consectetur adipiscing</p>
                                    </div>
                                </Col>
                                <Col lg="6" className="subscribe-wrapper">
                                    <div className="subscribe-block">
                                        <h2>newsletter</h2>
                                        <form>
                                            <div className="form-group">
                                                <input type="text" className="form-control" id="exampleFormControlInput3" placeholder="Enter your email" />
                                                <button type="submit" className="btn btn-solid btn-green">subscribe</button>
                                            </div>
                                        </form>
                                    </div>
                                </Col>
                                <Col lg="3">
                                    <div className="footer-title">
                                        <h4>store information</h4>
                                    </div>
                                    <div className="footer-contant">
                                        <ul className="contact-details">
                                            <li>Multikart Demo Store, Demo store India 345-659</li>
                                            <li>Call Us: 123-456-7898</li>
                                            <li>Email Us: <a href="#">Support@Fiot.com</a></li>
                                            <li>Fax: 123456</li>
                                        </ul>
                                    </div>
                                </Col>
                            </Row>
                        </section>
                    </Container>
                </div>
               <CopyRight />
            </footer>
        </Fragment>
    )
}

export default FooterSeven;