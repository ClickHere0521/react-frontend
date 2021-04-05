import React, { Fragment } from 'react';
import { Container, Row, Col, Media } from 'reactstrap';
import subBanner from '../../../../public/assets/images/sub-banner.png'
import subBanner1 from '../../../../public/assets/images/sub-banner1.png'


const Collections = () => {
    return (
        <Fragment>
            <section className="section-b-space p-t-0 ratio_40">
                <Container>
                    <Row className="partition2">
                        <Col md="6">
                            <a href="#">
                                <div className="collection-banner p-right text-center">
                                    <div className="img-part">
                                        <Media src={subBanner} className="img-fluid blur-up lazyload bg-img" alt="" />
                                    </div>
                                    <div className="contain-banner">
                                        <div>
                                            <h4 className="text-white">50% off</h4>
                                            <h2>men</h2>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </Col>
                        <Col md="6">
                            <a href="#">
                                <div className="collection-banner p-right text-center">
                                    <div className="img-part">
                                        <Media src={subBanner1} className="img-fluid blur-up lazyload bg-img" alt="" />
                                    </div>
                                    <div className="contain-banner">
                                        <div>
                                            <h4 className="text-white">20% save</h4>
                                            <h2>women</h2>
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
}

export default Collections;