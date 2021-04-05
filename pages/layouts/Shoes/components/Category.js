import React from 'react';
import Slider from 'react-slick';
import { Product5 } from '../../../../services/script';
import { Container, Row, Col, Media } from 'reactstrap';
import cart from '../../../../public/assets/images/icon/cat1.png';
import cart2 from '../../../../public/assets/images/icon/cat2.png';
import cart3 from '../../../../public/assets/images/icon/cat3.png';
import cart4 from '../../../../public/assets/images/icon/cat4.png';
import cart5 from '../../../../public/assets/images/icon/cat5.png';
import cart6 from '../../../../public/assets/images/icon/cat6.png';


const Category = () => {
    return (
        <Container>
            <section className="section-b-space border-section border-top-0">
                <Row>
                    <Col>
                        <Slider {...Product5} className="slide-6 no-arrow">
                            <div className="category-block">
                                <a href="#">
                                    <div className="category-image"><Media src={cart} alt="" /></div>
                                </a>
                                <div className="category-details">
                                    <a href="#">
                                        <h5>sport shoes</h5>
                                    </a>
                                </div>
                            </div>
                            <div className="category-block">
                                <a href="#">
                                    <div className="category-image"><Media src={cart2} alt="" /></div>
                                </a>
                                <div className="category-details">
                                    <a href="#">
                                        <h5>casual shoes</h5>
                                    </a>
                                </div>
                            </div>
                            <div className="category-block">
                                <a href="#">
                                    <div className="category-image"><Media src={cart3} alt="" /></div>
                                </a>
                                <div className="category-details">
                                    <a href="#">
                                        <h5>formal shoes</h5>
                                    </a>
                                </div>
                            </div>
                            <div className="category-block">
                                <a href="#">
                                    <div className="category-image"><Media src={cart4} alt="" /></div>
                                </a>
                                <div className="category-details">
                                    <a href="#">
                                        <h5>flat</h5>
                                    </a>
                                </div>
                            </div>
                            <div className="category-block">
                                <a href="#">
                                    <div className="category-image"><Media src={cart5} alt="" /></div>
                                </a>
                                <div className="category-details">
                                    <a href="#">
                                        <h5>heels</h5>
                                    </a>
                                </div>
                            </div>
                            <div className="category-block">
                                <a href="#">
                                    <div className="category-image"><Media src={cart6} alt="" /></div>
                                </a>
                                <div className="category-details">
                                    <a href="#">
                                        <h5>boots</h5>
                                    </a>
                                </div>
                            </div>
                            <div className="category-block">
                                <a href="#">
                                    <div className="category-image"><Media src={cart2} alt="" /></div>
                                </a>
                                <div className="category-details">
                                    <a href="#">
                                        <h5>casual shoes</h5>
                                    </a>
                                </div>
                            </div>
                            <div className="category-block">
                                <a href="#">
                                    <div className="category-image"><Media src={cart3} alt="" /></div>
                                </a>
                                <div className="category-details">
                                    <a href="#">
                                        <h5>casual shoes</h5>
                                    </a>
                                </div>
                            </div>
                        </Slider>
                    </Col>
                </Row>
            </section>
        </Container>
    )
}

export default Category;