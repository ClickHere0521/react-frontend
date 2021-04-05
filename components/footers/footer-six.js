import { Fragment ,useEffect } from "react";
import CopyRight from "./common/copyright";
import LogoImage from "../headers/common/logo";
import { Container, Col, Row } from "reactstrap";
import { SlideUpDown } from "../../services/script"

const FooterSix = ({layoutClass ,logoName ,footerClass}) => {
    
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
            <footer className={footerClass}>
                <div className="dark-layout">
                    <Container>
                        <section className="section-b-space border-b">
                            <Row className="footer-theme2">
                                <Col lg="3">
                                    <div className="footer-title footer-mobile-title">
                                        <h4>about</h4></div>
                                    <div className="footer-contant">
                                        <div className="footer-logo text-center">
                                            <LogoImage logo={logoName} />
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
                                                <button type="submit" className="btn btn-solid">subscribe</button>
                                            </div>
                                        </form>
                                    </div>
                                </Col>
                                <Col lg="3">
                                    <div className="footer-title">
                                        <h4>store information</h4></div>
                                    <div className="footer-contant">
                                        <ul className="contact-details">
                                            <li>Multikart Demo Store, Demo store India 345-659</li>
                                            <li>Call Us: 123-456-7898</li>
                                            <li>Email Us: <a href={null}>Support@Fiot.com</a></li>
                                            <li>Fax: 123456</li>
                                        </ul>
                                    </div>
                                </Col>
                            </Row>
                        </section>
                    </Container>
                </div>
                <div className="dark-layout">
                    <Container>
                        <section className="small-section">
                            <Row className="footer-theme2">
                                <Col className="p-set">
                                    <div className="footer-link">
                                        <div className="footer-title">
                                            <h4>my account</h4></div>
                                        <div className="footer-contant">
                                            <ul>
                                                <li><a href={null}>mens</a></li>
                                                <li><a href={null}>womens</a></li>
                                                <li><a href={null}>clothing</a></li>
                                                <li><a href={null}>accessories</a></li>
                                                <li><a href={null}>featured</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="footer-link-b">
                                        <div className="footer-title">
                                            <h4>why we choose</h4></div>
                                        <div className="footer-contant">
                                            <ul>
                                                <li><a href={"#"}>shipping & return</a></li>
                                                <li><a href={"#"}>secure shopping</a></li>
                                                <li><a href={"#"}>gallary</a></li>
                                                <li><a href={"#"}>affiliates</a></li>
                                                <li><a href={"#"}>contacts</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </section>
                    </Container>
                </div>
                <CopyRight layout={layoutClass} />
            </footer>
        </Fragment>
    );
}

export default FooterSix;