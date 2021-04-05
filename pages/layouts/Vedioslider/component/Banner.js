import React, { Fragment } from 'react';
import { Container, Row, Col, Media } from 'reactstrap';
import Banner5 from '../../../../public/assets/images/fashion/banner/5.jpg'
import Banner6 from '../../../../public/assets/images/fashion/banner/6.jpg'
import Banner8 from '../../../../public/assets/images/fashion/banner/8.jpg'

const Banner = () => {
    return (
        <Fragment>
            <section className="banner-padding banner-furniture absolute_banner ratio3_2">
                <Container>
                    <Row className="partition3">
                        <Col md="4">
                            <a href="#">
                                <div className="collection-banner p-left text-left">
                                    <Media src={Banner5} alt=""
                                        className="img-fluid blur-up lazyload bg-img" />
                                    <div className="absolute-contain">
                                        <h3>casual collection</h3>
                                        <h4>festive sale</h4>
                                    </div>
                                </div>
                            </a>
                        </Col>
                        <Col md="4">
                            <a href="#">
                                <div className="collection-banner p-left text-left">
                                    <Media src={Banner6} alt=""
                                        className="img-fluid blur-up lazyload bg-img" />
                                    <div className="absolute-contain">
                                        <h3>going out collection</h3>
                                        <h4>upto 80% off</h4>
                                    </div>
                                </div>
                            </a>
                        </Col>
                        <Col md="4">
                            <a href="#">
                                <div className="collection-banner p-left text-left">
                                    <Media src={Banner8} alt=""
                                        className="img-fluid blur-up lazyload bg-img" />
                                    <div className="absolute-contain">
                                        <h3>shoes & sandle</h3>
                                        <h4>new collection</h4>
                                    </div>
                                </div>
                            </a>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Fragment>
    )
}

export default Banner;