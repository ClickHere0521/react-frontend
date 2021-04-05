import React from 'react';
import CommonLayout from '../../components/shop/common-layout';
import { Container, Media, Row, Col, Card, CardBody } from 'reactstrap';
import Slider from 'react-slick';

const HomeSlider = () => {
    return (
        <CommonLayout parent="home" title="elements" subTitle="slider">

            <Container>
                <section className="section-b-space">
                    <Slider className="slide-1 home-slider">
                        <div>
                            <div className="home p-center text-center home7">
                                <Container>
                                    <Row>
                                        <Col>
                                            <div className="slider-contain">
                                                <div>
                                                    <h4>welcome to fashion</h4>
                                                    <h1>women fashion</h1>
                                                    <a href="#" className="btn btn-solid">shop now</a>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </Container>
                            </div>
                        </div>
                        <div>
                            <div className="home p-center  text-center home8">
                                <Container>
                                    <Row>
                                        <Col>
                                            <div className="slider-contain">
                                                <div>
                                                    <h4>welcome to fashion</h4>
                                                    <h1>men fashion</h1>
                                                    <a href="#" className="btn btn-solid">shop now</a>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </Container>
                            </div>
                        </div>
                    </Slider>
                </section>
            </Container>

            <Container className="section-b-space element-detail">
                <Row>
                    <Col>
                        <Card>
                            <h5 className="card-header">Classes</h5>
                            <CardBody>
                                <h5 className="card-title">For Parallax Image - .parallax</h5>
                                <h5>contain-align - .text-left, .text-center, .text-right</h5>
                                <h5>contain-position - .p-left, .p-center, .p-right</h5>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>

        </CommonLayout>
    )
}

export default HomeSlider;