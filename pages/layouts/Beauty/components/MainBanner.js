import React, { Fragment } from 'react';
import HeaderOne from '../../../../components/headers/header-one'
import Slider from 'react-slick';
import { Container, Row, Col } from 'reactstrap';

const MainBanner = () => {
    return (
        <Fragment>
            <title>MultiKart | Beauty Store</title>
            <HeaderOne logoName={'layout3/logo.png'} topClass="top-header" />
            <section className="p-0">
                <Slider className="slide-1 home-slider">
                    <div>
                        <div className="home home34">
                            <Container>
                                <Row>
                                    <Col>
                                        <div className="slider-contain">
                                            <div>
                                                <h4>welcome to beauty</h4>
                                                <h1>beauty products</h1><a href={null} className="btn btn-solid">shop
                                                    now</a></div>
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    </div>
                    <div>
                             <div className="home home35">
                            <Container>
                                <Row>
                                    <Col> 
                                        <div className="slider-contain">
                                            <div>
                                                <h4>save 30% off</h4>
                                                <h1>beauty products</h1><a href={null} className="btn btn-solid">shop
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

export default MainBanner;