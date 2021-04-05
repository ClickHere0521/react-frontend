import React,{ Fragment } from "react";
import Slider from 'react-slick';
import { Container, Row, Col } from "reactstrap";

const Banner = () => {
    return (
        <Fragment>
            <section className="p-0">
                <Slider className="slide-1 home-slider">
                    <div>
                        <div className="home home12 text-left">
                            <Container>
                                <Row>
                                    <Col>
                                        <div className="slider-contain">
                                            <div>
                                                <h4>furniture sofa</h4>
                                                <h1>harmony sofa</h1><a href="#" className="btn btn-solid">shop
                                                    now</a>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    </div>
                    <div>
                        <div className="home home13 text-left">
                            <Container>
                                <Row>
                                    <Col>
                                        <div className="slider-contain">
                                            <div>
                                                <h4>furniture sofa</h4>
                                                <h1>harmony chair</h1><a href="#" className="btn btn-solid">shop
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