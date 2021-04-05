import React, { useEffect } from 'react';
import Link from 'next/link'
import { SlideUpDown } from "../../services/script"
import LogoImage from "../headers/common/logo"
import { Container, Row, Col, Form, FormGroup, Input, Button } from 'reactstrap';
import CopyRight from './common/copyright';

const FooterEight = ({ logoName ,layoutClass }) => {

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
        <footer className="footer-light footer-black">
            <div className="light-layout upside">
                <Container>
                    <section className="small-section">
                        <Row>
                            <Col lg="6">
                                <div className="subscribe">
                                    <div>
                                        <h4>KNOW IT ALL FIRST!</h4>
                                        <p>Never Miss Anything From Multikart By Signing Up To Our Newsletter. </p>
                                    </div>
                                </div>
                            </Col>
                            <Col lg="6">
                                <Form className="form-inline subscribe-form">
                                    <FormGroup className="mx-sm-3">
                                        <Input type="text" className="form-control" id="exampleFormControlInput1"
                                            placeholder="Enter your email" />
                                    </FormGroup>
                                    <Button type="submit" className="btn btn-solid">subscribe</Button>
                                </Form>
                            </Col>
                        </Row>
                    </section>
                </Container>
            </div>
            <section className="section-b-space below-section light-layout">
                <Container>
                    <Row className="footer-theme partition-f">
                        <Col lg="4" mf="6">
                            <div className="footer-title footer-mobile-title">
                                <h4>about</h4>
                            </div>
                            <div className="footer-contant">
                                <div className="footer-logo">
                                    <LogoImage logo={logoName} />
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, </p>
                                <div className="footer-social">
                                    <ul>
                                        <li>
                                            <a href="https://www.facebook.com/" target="_blank"><i className="fa fa-facebook" aria-hidden="true"></i></a>
                                        </li>
                                        <li>
                                            <a href="https://plus.google.com" target="_blank"> <i className="fa fa-google-plus" aria-hidden="true"></i></a>
                                        </li>
                                        <li>
                                            <a href="https://twitter.com/" target="_blank"> <i className="fa fa-twitter" aria-hidden="true"></i></a>
                                        </li>
                                        <li>
                                            <a href="https://www.instagram.com/" target="_blank"><i className="fa fa-instagram" aria-hidden="true"></i></a>
                                        </li>
                                        <li>
                                            <a href="https://rss.com" target="_blank"><i className="fa fa-rss" aria-hidden="true"></i></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                        <Col className="offset-xl-1">
                            <div className="sub-title">
                                <div className="footer-title">
                                    <h4>my account</h4>
                                </div>
                                <div className="footer-contant">
                                    <ul>
                                        <li>
                                            <Link href={`/shop/left_sidebar`} >
                                                <a>womens</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href={`/shop/left_sidebar`} ><a> clothing </a></Link>
                                        </li>
                                        <li>
                                            <Link href={`/shop/left_sidebar`} ><a>accessories</a></Link>
                                        </li>
                                        <li>
                                            <Link href={`/shop/left_sidebar`} ><a> featured </a></Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <div className="sub-title">
                                <div className="footer-title">
                                    <h4>why we choose</h4>
                                </div>
                                <div className="footer-contant">
                                    <ul>
                                        <li><a href="#">shipping & return</a></li>
                                        <li><a href="#">secure shopping</a></li>
                                        <li><a href="#">gallary</a></li>
                                        <li><a href="#">affiliates</a></li>
                                        <li><a href="#">contacts</a></li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <div className="sub-title">
                                <div className="footer-title">
                                    <h4>store information</h4>
                                </div>
                                <div className="footer-contant">
                                    <ul className="contact-list">
                                        <li><i className="fa fa-map-marker"></i>Multikart Demo Store, Demo store
                                                India 345-659
                                            </li>
                                        <li><i className="fa fa-phone"></i>Call Us: 123-456-7898</li>
                                        <li><i className="fa fa-envelope-o"></i>Email Us: <a
                                            href="#">Support@Fiot.com</a></li>
                                        <li><i className="fa fa-fax"></i>Fax: 123456</li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <CopyRight layout={layoutClass} />
        </footer>
    )
}


export default FooterEight;