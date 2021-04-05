import React, { Fragment } from "react";
import Slider from "react-slick";
import { Container, Row, Col } from "reactstrap";

const Banner = () => {
    return (
        <Fragment>
            <section className="p-0 height-100">
                <div className="home-slider">
                    <Slider>
                        <div>
                            <div className="home text-center bg-size blur-up lazyloaded home47">
                                <Container>
                                    <Row>
                                        <Col>
                                            <div className="slider-contain">
                                                <div>
                                                    <h4>an exemplart gateway to happiness</h4>
                                                    <h1>all jewellery</h1>
                                                    <a href="#" className="btn btn-solid">shop now</a>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </Container>
                            </div>
                        </div>
                        <div>
                            <div className="home text-center bg-position p-right home48">
                                <Container>
                                    <Row>
                                        <Col>
                                            <div className="slider-contain">
                                                <div>
                                                    <h4>75th birthday sale</h4>
                                                    <h1>flat 20% off</h1>
                                                    <a href="#" className="btn btn-solid">shop now</a>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </Container>
                            </div>
                        </div>
                    </Slider>
                </div>
            </section>
        </Fragment>
    );
}

export default Banner;