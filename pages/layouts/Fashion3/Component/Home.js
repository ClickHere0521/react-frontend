import React from 'react';
import Slider from 'react-slick';
import { Col, Container, Row } from 'reactstrap';

const HomeSlider = () => {
    return (
        <section className="p-0">
        <Slider className="slide-1 home-slider">
            <div>
                <div className="home text-center home36">
                    <Container>
                        <Row>
                            <Col>
                                <div className="slider-contain">
                                    <div>
                                        <h4>20% off</h4>
                                        <h1>men collection</h1><a href="#" className="btn btn-solid">shop now</a>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
            <div>
                <div className="home text-center p-right home37">
                    <Container>
                        <Row>
                            <Col>
                                <div className="slider-contain">
                                    <div>
                                        <h4>welcome to fashion</h4>
                                        <h1>women collection</h1><a href="#" className="btn btn-solid">shop now</a>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </Slider>
    </section>
    )
}

export default HomeSlider;