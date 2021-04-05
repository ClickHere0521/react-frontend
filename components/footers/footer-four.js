import React, { useEffect } from 'react';
import Link from 'next/link';
import { SlideUpDown } from "../../services/script";
import LogoImage from "../headers/common/logo";
import { Container, Row, Form, Input, FormGroup, Button, Col} from 'reactstrap';
import CopyRight from './common/copyright';

const FooterFour = ({ logoName , layoutClass ,footerClass ,newLatter}) => {

    useEffect(() => {
        const contentwidth = window.innerWidth;
        if ((contentwidth) < 750) {
            SlideUpDown('footer-title');
        } else {
            const elems = document.querySelectorAll(".footer-title");
            [].forEach.call(elems, function (elemt) {
                let el = elemt.nextElementSibling;
                el.style = "display: block";
            });
        }
    }, []);

    return (
        <footer className={footerClass}>
            {
                newLatter ? 
                <div className="white-layout">
                <Container>
                    <section className="small-section">
                        <Row>
                            <Col xl="6" className="m-auto">
                                <div className="subscribe">
                                    <h4>newsletter</h4>
                                    <Form className="form-inline subscribe-form classic-form">
                                        <FormGroup>
                                            <Input type="text" className="form-control" id="exampleFormControlInput"
                                                placeholder="Enter your email" />
                                        </FormGroup>
                                        <Button type="submit" className="btn btn-solid">subscribe</Button>
                                    </Form>
                                </div>
                            </Col>
                        </Row>
                    </section>
                </Container>
            </div>
            :''

            }
            
            <section className="section-b-space darken-layout">
                <Container>
                    <Row className="footer-theme partition-f">
                        <Col lg="4" md="6" >
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
                                            <a href="https://www.facebook.com" target="_blank"><i className="fa fa-facebook" aria-hidden="true"></i></a>
                                        </li>
                                        <li>
                                            <a href="https://plus.google.com" target="_blank"><i className="fa fa-google-plus" aria-hidden="true"></i></a>
                                        </li>
                                        <li>
                                            <a href="https://twitter.com" target="_blank"><i className="fa fa-twitter" aria-hidden="true"></i></a>
                                        </li>
                                        <li>
                                            <a href="https://www.instagram.com" target="_blank"><i className="fa fa-instagram" aria-hidden="true"></i></a>
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
                                        <li><Link href={`/shop/left_sidebar`} ><a>womens</a></Link></li>
                                        <li><Link href={`/shop/left_sidebar`} ><a>clothing</a></Link></li>
                                        <li><Link href={`/shop/left_sidebar`} ><a>accessories</a></Link></li>
                                        <li><Link href={`/shop/left_sidebar`} ><a>featured</a></Link></li>
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


export default FooterFour;