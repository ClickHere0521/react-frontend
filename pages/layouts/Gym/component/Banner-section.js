import React, { Fragment } from 'react';
import { Container, Row, Media ,Col} from 'reactstrap';
import Banner1 from '../../../../public/assets/images/gym/banner/1.jpg'
import Banner2 from '../../../../public/assets/images/gym/banner/2.jpg'

const BannerSection = () => {
    return (
        <Fragment>
            <section className="banner-padding banner-furniture gym-banner">
                <Container fluid={true}>
                    <Row className="partition2">
                        <Col md="4">
                            <a href="#">
                                <div className="collection-banner p-left text-left">
                                    <div className="img-part">
                                        <Media src={Banner1} className="img-fluid blur-up lazyload" alt="" />
                                    </div>
                                    <div className="contain-banner">
                                        <div>
                                            <h4>save 30%</h4>
                                            <h2>Gym</h2>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </Col>
                        <Col md="8">
                            <a href="#">
                                <div className="collection-banner p-left text-left">
                                    <div className="img-part">
                                        <Media src={Banner2} className="img-fluid blur-up lazyload" alt="" />
                                    </div>
                                    <div className="contain-banner">
                                        <div>
                                            <h4>save 30%</h4>
                                            <h2>Protien Powder</h2>
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

export default BannerSection;