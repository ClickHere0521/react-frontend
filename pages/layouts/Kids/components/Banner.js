import React, { Fragment } from "react";
import Slider from 'react-slick'
import { Container, Row, Col } from "reactstrap";

const Banner = () => {
    return (
        <Fragment>
            <section className="p-0">
                <Slider className="slide-1 home-slider">
                    <div>
                        <div className="home home21 text-center p-right">
                            <Container>
                                <Row>
                                    <Col>
                                        <div className="slider-contain">
                                            <div>
                                                <h4>for kids</h4>
                                                <h1>spring collection</h1><a href="#" className="btn btn-solid">shop now</a></div>
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    </div>
                    <div>
                        <div className="home home22 text-center">
                            <Container>
                                <Row>
                                    <Col>
                                        <div className="slider-contain">
                                            <div>
                                                <h4>30% off</h4>
                                                <h1>lowest price</h1><a href="#" className="btn btn-solid">shop now</a></div>
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    </div>
                </Slider>
            </section>
        </Fragment>
    );
}

export default Banner;