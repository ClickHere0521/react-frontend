import React, { Fragment } from "react";
import Slider from 'react-slick';
import { Container, Row, Col } from "reactstrap";

const Banner = () => {
    return (
        <Fragment>
            <section className="p-0">
                <Slider className="slide-1 home-slider">
                    <div>
                        <div className="home home9 text-left p-left">
                            <Container>
                                <Row>
                                    <Col>
                                        <div className="slider-contain">
                                            <div>
                                                <h4>every time</h4>
                                                <h1>mittnalier</h1>
                                                <a href="#" className="btn btn-outline btn-classic">shop now</a></div>
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    </div>
                    <div>
                        <div className="home home10 text-left p-left">
                            <Container>
                                <Row>
                                    <Col>
                                        <div className="slider-contain">
                                            <div>
                                                <h4>welcome to fashion</h4>
                                                <h1>men's shoes</h1>
                                                <a href="#" className="btn btn-outline btn-classic">shop now</a></div>
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    </div>
                    <div>
                        <div className="home home11 text-left p-left">
                            <Container>
                                <Row>
                                    <Col>
                                        <div className="slider-contain">
                                            <div>
                                                <h4>welcome to fashion</h4>
                                                <h1>men's shoes</h1>
                                                <a href="#" className="btn btn-outline btn-classic">shop now</a></div>
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