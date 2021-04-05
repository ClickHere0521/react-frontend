import React, { Fragment } from 'react';
import { Media, Container, Row, Col } from 'reactstrap';
import banner1 from '../../../../public/assets/images/furniture/2banner1.jpg';
import banner2 from '../../../../public/assets/images/furniture/2banner2.jpg'
import banner3 from '../../../../public/assets/images/furniture/2banner3.jpg';

const Collections = () => {
    return (
        <Fragment>
            <section className="banner-furniture ratio_45">
                <Container fluid={true}>
                    <Row className="partition3">
                        <Col md="4">
                            <a href="#">
                                <div className="collection-banner p-right text-right">
                                    <div className="img-part">
                                        <Media src={banner1} alt=""
                                            className="img-fluid blur-up lazyload bg-img" />
                                    </div>
                                    <div className="contain-banner banner-3">
                                        <div>
                                            <h4>save 30%</h4>
                                            <h2>sofa</h2>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </Col>
                        <Col md="4">
                            <a href="#">
                                <div className="collection-banner p-right text-right">
                                    <div className="img-part">
                                        <Media src={banner2} alt=""
                                            className="img-fluid blur-up lazyload bg-img" />
                                    </div>
                                    <div className="contain-banner banner-3">
                                        <div>
                                            <h4>save 60%</h4>
                                            <h2>new arrival</h2>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </Col>
                        <Col md="4">
                            <a href="#">
                                <div className="collection-banner p-right text-right">
                                    <div className="img-part">
                                        <Media src={banner3} alt=""
                                            className="img-fluid blur-up lazyload bg-img" />
                                    </div>
                                    <div className="contain-banner banner-3">
                                        <div>
                                            <h4>save 60%</h4>
                                            <h2>chair</h2>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Fragment>
    );

}

export default Collections;