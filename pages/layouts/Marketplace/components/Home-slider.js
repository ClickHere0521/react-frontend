import React, { Fragment } from 'react';
import Slider from 'react-slick';
import { Container, Row, Col } from 'reactstrap';

const HomeSlider = () => {
    return (
        <Fragment>
            <section className="p-0 layout-7">
                <Slider className="slide-1 home-slider">
                    <div>
                        <div className="home text-center p-center home8">
                            <Container>
                                <Row>
                                    <Col>
                                        <div className="slider-contain">
                                            <div>
                                                <h4>Headsets For all Styles</h4>
                                                <h1>Starting $19</h1>
                                                <a href="#" className="btn btn-solid">shop now</a>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    </div>
                    <div>
                        <div className="home  text-center home12">
                            <Container>
                                <Row>
                                    <Col>
                                        <div className="slider-contain">
                                            <div>
                                                <h4>Furnishing Deals</h4>
                                                <h1>Up to 70% off</h1>
                                                <a href="#" className="btn btn-solid">shop now</a>
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