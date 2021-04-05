import React from 'react';
import Slider from 'react-slick';
import { Col, Container, Row } from 'reactstrap';

const HomeSlider = () => {
    return (
        <section className="p-0">
            <Slider className="slide-1 home-slider">
                <div>
                    <div className="home text-center home19">
                        <Container>
                            <Row>
                                <Col>
                                    <div className="slider-contain">
                                        <div>
                                            <h4>welcome to fashion</h4>
                                            <h1>woman fashion</h1><a href="#" className="btn btn-solid">shop now</a>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </div>
                <div>
                    <div className="home text-center home20">
                        <Container>
                            <Row>
                                <Col>
                                    <div className="slider-contain">
                                        <div>
                                            <h4>welcome to fashion</h4>
                                            <h1>top collection</h1><a href="#" className="btn btn-solid">shop now</a>
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