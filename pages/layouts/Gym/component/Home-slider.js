import React, { Fragment } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Slider from 'react-slick';

const HomeSlider = () => {
    return (
        <Fragment>
            <section className="p-0 gym-slider">
                <Slider className="slide-1 home-slider">
                    <div>
                        <div className="home text-right p-right home43">
                            <Container>
                                <Row>
                                    <Col>
                                        <div className="slider-contain">
                                            <div>
                                                <h4>summer sale</h4>
                                                <h1>Protien Powder</h1>
                                                <a href="#" className="btn btn-solid btn-gradient">save up to 50% off</a>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    </div>
                    <div>
                        <div className="home p-right text-right home44">
                            <Container>
                                <Row>
                                    <Col>
                                        <div className="slider-contain">
                                            <div>
                                                <h4>summer sale</h4>
                                                <h1>Protien Shake</h1>
                                                <a href="#" className="btn btn-solid btn-gradient">save up to 50% off</a>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    </div>
                </Slider>
            </section>
        </Fragment>
    )
}

export default HomeSlider;