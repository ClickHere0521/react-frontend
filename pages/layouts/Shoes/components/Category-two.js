import React, { Fragment } from 'react';
import { Container, Media ,Row ,Col } from 'reactstrap';
import cart1 from '../../../../public/assets/images/cat1.jpg';
import cart2 from '../../../../public/assets/images/cat2.jpg';
import cart3 from '../../../../public/assets/images/cat3.jpg';

const CategoryTwo = () => (
    <Fragment>
        <section className="p-0 ratio2_1">
            <Container fluid={true}>
                <Row className="category-border">
                    <Col sm="4" className="border-padding">
                        <div className="category-banner">
                            <div>
                                <Media src={cart1} className="img-fluid blur-up lazyload bg-img" alt="" />
                            </div>
                            <div className="category-box">
                                <a href="#">
                                    <h2>men</h2>
                                </a>
                            </div>
                        </div>
                    </Col>
                    <Col sm="4" className="border-padding">
                        <div className="category-banner">
                            <div>
                                <Media src={cart2} className="img-fluid blur-up lazyload bg-img" alt="" />
                            </div>
                            <div className="category-box">
                                <a href="#">
                                    <h2>women</h2>
                                </a>
                            </div>
                        </div>
                    </Col>
                    <Col sm="4" className="border-padding">
                        <div className="category-banner">
                            <div>
                                <img src={cart3} className="img-fluid blur-up lazyload bg-img" alt="" />
                            </div>
                            <div className="category-box">
                                <a href="#">
                                    <h2>kids</h2>
                                </a>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    </Fragment>
)

export default CategoryTwo;