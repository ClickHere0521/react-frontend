import { Fragment } from "react";
import Slider from "react-slick";
import { Container, Row, Col } from "reactstrap";

const Banner = () => {
    return (
        <Fragment>
                <section className="p-0">
                    <Slider className="slide-1 home-slider">
                        <div>
                            <div className="home text-left home17">
                                <Container>
                                    <Row>
                                        <Col>
                                            <div className="slider-contain">
                                                <div>
                                                    <h4>from $19.00</h4>
                                                    <h1>eyeglasses</h1><a href="#" className="btn btn-solid">shop now</a></div>
                                            </div>
                                        </Col>
                                    </Row>
                                </Container>
                            </div>
                        </div>
                        <div>
                            <div className="home text-left home18">
                                <Container>
                                    <Row>
                                        <Col>
                                            <div className="slider-contain">
                                                <div>
                                                    <h4>sale 10% off</h4>
                                                    <h1>sunglasses</h1><a href="#" className="btn btn-solid">shop now</a></div>
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