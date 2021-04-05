import React, { Fragment } from 'react';
import Slider from 'react-slick';
import { Container, Row, Col } from 'reactstrap';

const Banner = () => {
    return (
        <Fragment>
            <section className="p-0">
                <Slider className="slide-1 home-slider">
                    <div>
                        <div className="home text-center home3">
                            <Container>
                                <Row>
                                    <Col>
                                        <div className="slider-contain">
                                            <div>
                                                <h4>special offer</h4>
                                                <h1>men's shoes</h1><a href="#" className="btn btn-solid black-btn">shop now</a></div>
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    </div>
                    <div>
                        <div className="home text-center home4">
                            <Container>
                                <Row>
                                    <Col>
                                        <div className="slider-contain">
                                            <div>
                                                <h4>special offer</h4>
                                                <h1>men's shoes</h1><a href="#" className="btn btn-solid black-btn">shop now</a></div>
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    </div>
                    <div>
                        <div className="home text-center home5">
                            <Container>
                                <Row>
                                    <Col>
                                        <div className="slider-contain">
                                            <div>
                                                <h4>special offer</h4>
                                                <h1>men's shoes</h1><a href="#" className="btn btn-solid black-btn">shop now</a></div>
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

export default Banner;