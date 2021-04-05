import React ,{ Fragment } from 'react';
import { Container, Col ,Row, Media } from 'reactstrap';
import subBanner from '../../../../public/assets/images/goggles/sub-banner.jpg'
import subBanner2 from '../../../../public/assets/images/goggles/sub-banner2.jpg';
import subBanner3 from '../../../../public/assets/images/goggles/sub-banner3.jpg';

const CollectionBanner = () => {
    return (
        <Fragment>
            <section className="section-b-space banner-goggles ratio2_1">
                <Container>
                    <Row className="partition3">
                        <Col md="4">
                            <a href="#">
                                <div className="collection-banner p-left sub-banner">
                                    <Media src={subBanner} className="img-fluid blur-up lazyload bg-img" alt="" />
                                    <div className="contain-banner banner-3">
                                        <div>
                                            <h4>10% off</h4>
                                            <h2>glasses</h2>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </Col>
                        <Col md="4">
                            <a href="#">
                                <div className="collection-banner p-left text-left">
                                    <Media src={subBanner2} className="img-fluid blur-up lazyload bg-img" alt="" />
                                    <div className="contain-banner banner-3">
                                        <div>
                                            <h4>10% off</h4>
                                            <h2>lenses</h2>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </Col>
                        <Col md="4">
                            <a href="#">
                                <div className="collection-banner p-left"><Media src={subBanner3} className="img-fluid blur-up lazyload bg-img" alt="" />
                                    <div className="contain-banner banner-3">
                                        <div>
                                            <h4>50% off</h4>
                                            <h2>vintage</h2>
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

export default CollectionBanner;