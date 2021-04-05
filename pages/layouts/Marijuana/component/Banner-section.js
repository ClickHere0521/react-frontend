import React, { Fragment } from 'react';
import { Container, Row, Col, Media } from 'reactstrap';
import banner4 from '../../../../public/assets/images/marijuana/banner/4.jpg';
import banner2 from '../../../../public/assets/images/marijuana/banner/2.jpg';

const BannerSection = () => (
    <Fragment>
        <section className="p-t-0 section-b-space ratio_45">
            <Container>
                <Row className="partition2">
                    <Col md="6" >
                        <a href="#">
                            <div className="collection-banner p-left text-center">
                                <div className="img-part">
                                    <Media src={banner4} className="img-fluid blur-up lazyload bg-img" alt="" />
                                </div>
                                <div className="contain-banner">
                                    <div>
                                        <h4>50% off</h4>
                                        <h2>oils</h2>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </Col>
                    <Col md="6">
                        <a href="#">
                            <div className="collection-banner p-right text-center">
                                <div className="img-part">
                                    <Media src={banner2} className="img-fluid blur-up lazyload bg-img" alt="" />
                                </div>
                                <div className="contain-banner">
                                    <div>
                                        <h4>20% save</h4>
                                        <h2>liquid</h2>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </Col>
                </Row>
            </Container>
        </section>
    </Fragment>
)
export default BannerSection;