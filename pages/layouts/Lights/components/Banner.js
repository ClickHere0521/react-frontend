import React, { Fragment } from 'react';
import Slider from 'react-slick';
import { Container, Row, Col } from 'reactstrap';

const Banner = () => {
    return (
        <Fragment>
            <section className="p-0 layout-7">
                <div className="slide-1 home-slider">
                    <div>
                        <div className="home text-left p-left home14">
                            <Container>
                                <Row>
                                    <Col>
                                        <div className="slider-contain">
                                            <div>
                                                <h4>10% discount</h4>
                                                <h1>light up your home</h1><a href="#" className="btn btn-solid">shop now</a>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    );
}

export default Banner;