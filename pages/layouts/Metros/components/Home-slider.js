import React, { Fragment } from 'react';
import Slider from 'react-slick';
import { Container, Row, Col } from 'reactstrap';

const HomeSlider = () => {
    return (
        <Fragment>
            <section className="p-0 gym-slider metro-slider">
                <Slider className="slide-1 home-slider">
                    <div>
                        <div className="home text-center home54">
                            <Container>
                                <Row>
                                    <Col>
                                        <div className="slider-contain">
                                            <div>
                                                <h4>welcome to multikart</h4>
                                                <h1>flat 10% off</h1>
                                                <a href="#" className="btn btn-solid">shop now</a>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    </div>
                    <div>
                        <div className="home  text-center home53">
                            <Container>
                                <Row>
                                    <Col>
                                        <div className="slider-contain">
                                            <div>
                                                <h4>welcome to fashion</h4>
                                                <h1>women fashion</h1>
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