import React from 'react';
import { Col, Container, Media, Row } from 'reactstrap';
import one from '../../../../public/assets/images/fashion/1.jpg';
import two from '../../../../public/assets/images/fashion/2.jpg';

const Collection = () => {
    return (
        <section className="banner-padding banner-furniture ratio2_1">
            <Container fluid={true}>
                <Row className="partition3">
                    <Col md="6">
                        <a href={null}>
                            <div className="collection-banner p-left text-left">
                                <div className="img-part">
                                    <Media src={one} alt=""
                                        className="img-fluid blur-up lazyload bg-img" />
                                </div>
                                <div className="contain-banner">
                                    <div>
                                        <h4>save 30%</h4>
                                        <h2>women</h2>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </Col>
                    <Col md="6">
                        <a href={null}>
                            <div className="collection-banner p-left text-left">
                                <div className="img-part">
                                    <Media src={two} alt=""
                                        className="img-fluid blur-up lazyload bg-img" />
                                </div>
                                <div className="contain-banner">
                                    <div>
                                        <h4>save 60%</h4>
                                        <h2>watch</h2>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Collection;