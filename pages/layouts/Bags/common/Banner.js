import React from 'react';
import Slider from 'react-slick';
import { Container, Row ,Col } from 'reactstrap';

const Banner = () => {
    return (
        <section className="p-0">
            <Slider className="slide-1 home-slider">
                <div>
                    <div className="home text-center p-center home6">
                        <Container>
                            <Row>
                                <Col>
                                    <div className="slider-contain">
                                        <div>
                                            <h4>summer sale</h4>
                                            <h1>the bag</h1> <a href="#" className="btn btn-solid">save up to 50% off</a>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </div>
                <div>
                    <div className="home text-center p-center home7">
                        <Container>
                            <Row>
                                <Col>
                                    <div className="slider-contain">
                                        <div>
                                            <h4>summer sale</h4>
                                            <h1>the bag</h1> <a href="#" className="btn btn-solid">save up to 50% off</a>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </div>
                <div>
                    <div className="home text-center p-center home8">
                        <Container>
                            <Row>
                                <Col>
                                    <div className="slider-contain">
                                        <div>
                                            <h4>summer sale</h4>
                                            <h1>the bag</h1> <a href="#" className="btn btn-solid">save up to 50% off</a>
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

export default Banner;

