import React, { Fragment } from "react";
import Slider from "react-slick";
import { Container, Row, Col } from "reactstrap";

const Banner = () => {

    return (
        <Fragment>
            <section className="p-0">
                <Slider className="slide-1 home-slider">
                    <div>
                        <div className="home text-left p-left bg-img home33">
                           <Container>
                                <Row>
                                    <Col>
                                        <div className="slider-contain">
                                            <div>
                                                <h4>save upto 10%</h4>
                                                <h1>plant collection</h1><a href="#" className="btn btn-outline btn-classic">shop now</a></div>
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    </div>
                    <div>
                        <div className="home text-left p-right home32">
                            <div className="container">
                                <div className="row">
                                    <div className="col">
                                        <div className="slider-contain">
                                            <div>
                                                <h4>save upto 20%</h4>
                                                <h1>new collection</h1><a href="#" className="btn btn-outline btn-classic">shop now</a></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Slider>
            </section>
        </Fragment>
    );

}

export default Banner;