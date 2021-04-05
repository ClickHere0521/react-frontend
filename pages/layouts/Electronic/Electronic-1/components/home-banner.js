import React from 'react';
import Slider from 'react-slick';
import { Container, Row, Col } from 'reactstrap';
import Link from 'next/link';

const HomeBanner = () => {
    return (
        <section className="p-0">
            <Slider className="slide-1 home-slider">
                <div>
                    <div className="home home15 text-center">
                        <Container>
                            <Row>
                                <Col>
                                    <div className="slider-contain">
                                        <div>
                                            <h4>welcome to fashion</h4>
                                            <h1>men fashion</h1>
                                             <a href="#" className="btn btn-solid">shop now </a>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </div>
                <div>
                    <div className="home home16 text-center">
                        <Container>
                            <Row>
                                <Col>
                                    <div className="slider-contain">
                                        <div>
                                            <h4>welcome to fashion</h4>
                                            <h1>women fashion</h1>
                                                <a href="#" className="btn btn-solid">shop now </a>
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

export default HomeBanner;