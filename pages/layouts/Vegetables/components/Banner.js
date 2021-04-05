import React, { Fragment } from 'react';
import Slider from 'react-slick';
import { Container, Row, Col } from 'reactstrap';

const Banner = () => {
    return (
        <Fragment>
            <section className="p-0">
                <Slider className="slide-1 home-slider">
                    <div>
                        <div className="home home39 text-center">
                            <Container>
                                <Row>
                                    <Col>
                                        <div className="slider-contain">
                                            <div>
                                                <h4>save 10%</h4>
                                                <h1>fresh vegetables</h1><a href={null} className="btn btn-solid">shop
                                                        now</a></div>
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    </div>
                    <div>
                        <div className="home home38 text-center">
                            <Container>
                                <Row>
                                    <Col>
                                        <div className="slider-contain">
                                            <div>
                                                <h4>save upto 10%</h4>
                                                <h1>fresh vegetables</h1><a href={null} className="btn btn-solid">shop
                                                        now</a></div>
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