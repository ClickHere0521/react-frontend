import React, { Fragment } from 'react';
import { Container, Col ,Row, Media} from 'reactstrap';
import banner1 from '../../../../public/assets/images/banner1.jpg'
import banner2 from '../../../../public/assets/images/banner2.jpg'
import banner from '../../../../public/assets/images/banner.jpg'

const Collection = () => {
    return (
        <Fragment>
            <section className="ratio_45">
                <Container>
                    <Row className="partition3">
                        <Col mf="4">
                            <a href="#">
                                <div className="collection-banner p-left">
                                    <div className="img-part">
                                        <Media src={banner1} className="img-fluid blur-up lazyload bg-img" alt="" />
                                    </div>
                                    <div className="contain-banner banner-3">
                                        <div>
                                            <h4>minimum 10% off</h4>
                                            <h2>new watch</h2>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </Col>
                        <Col md="4">
                            <a href="#">
                                <div className="collection-banner p-left text-left">
                                    <div className="img-part">
                                        <Media src={banner2} className="img-fluid blur-up lazyload bg-img" alt="" />
                                    </div>
                                </div>
                            </a>
                        </Col>
                        <Col md="4">
                            <a href="#">
                                <div className="collection-banner p-left">
                                    <div className="img-part">
                                        <Media src={banner} className="img-fluid blur-up lazyload bg-img" alt="" />
                                    </div>
                                    <div className="contain-banner banner-3">
                                        <div>
                                            <h4>minimum 50% off</h4>
                                            <h2>gold watch</h2>
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

export default Collection;