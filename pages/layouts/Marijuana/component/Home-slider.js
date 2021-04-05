import React, { Fragment } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Slider from 'react-slick';
import Service from '../../../../components/common/Service/service4';

const HomeSlider = () => (
    <Fragment>
        <section className="p-0 service_slide">
            <Slider className="slide-1 home-slider text-white">
                <div>
                    <div className="home text-center p-center home51">
                        <Container>
                            <Row>
                                <Col>
                                    <div className="slider-contain">
                                        <div>
                                            <h4>special offer</h4>
                                            <h1>Buy Marijuana</h1>
                                            <a href="#" className="btn btn-solid btn-gradient">shop now</a>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </div>
                <div>
                    <div className="home text-center p-center home52">
                        <Container>
                            <Row>
                                <Col>
                                    <div className="slider-contain">
                                        <div>
                                            <h4>special offer</h4>
                                            <h1>cannabis weed</h1>
                                            <a href="#" className="btn btn-solid btn-gradient">shop now</a>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </div>
            </Slider>
            <div className="service-home">
                <Service />
            </div>
        </section>
    </Fragment>
)

export default HomeSlider;