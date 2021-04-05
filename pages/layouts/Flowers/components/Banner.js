import React from 'react';
import Slider from 'react-slick';
import { Container, Row, Col } from 'reactstrap';
import Link from 'next/link';

const Banner = () => {
    return (
        <section className="p-0">
            <Slider className="slide-1 home-slider">
                <div>
                    <div className="home home30 text-center">
                        <Container>
                            <Row>
                                <Col>
                                    <div className="slider-contain">
                                        <div>
                                            <h4>save upto 20%</h4>
                                            <h1>creative & decor</h1>
                                            <Link href={`/left-sidebar/collection`}>
                                                <a className="btn btn-solid">shop now </a>
                                            </Link>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </div>
                <div>
                    <div className="home home31 text-center">
                        <Container>
                            <Row>
                                <Col>
                                    <div className="slider-contain">
                                        <div>
                                            <h4>save upto 10%</h4>
                                            <h1>pre-made & custom</h1>
                                            <Link href={`/left-sidebar/collection`}>
                                                <a className="btn btn-solid">shop now </a>
                                            </Link>
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