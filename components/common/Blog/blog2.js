import React, { Fragment } from 'react';
import { Container, Row, Col, Media } from 'reactstrap';
import Slider from 'react-slick';
import { Slider3 } from '../../../services/script';
import blog1 from '../../../public/assets/images/marijuana/blog/1.jpg';
import blog2 from '../../../public/assets/images/marijuana/blog/2.jpg';
import blog3 from '../../../public/assets/images/marijuana/blog/3.jpg';

const BlogBanner = () => {
    return (
        <Fragment>
        <Container className="section-t-space">
            <Row>
                <Col>
                    <div className="title3">
                        <h4>Recent Story</h4>
                        <h2 className="title-inner3">from the blog</h2>
                        <div className="line"></div>
                    </div>
                </Col>
            </Row>
        </Container>
        
        <section className="blog pt-0 section-b-space ratio3_2">
            <Container>
                <Row>
                    <Col md="12">
                        <Slider {...Slider3} className="slide-3 no-arrow">
                            <Col md="12">
                                <a href="#">
                                    <div className="basic-effect">
                                        <div>
                                            <Media src={blog1} className="img-fluid blur-up lazyload bg-img" alt="" />
                                        </div>
                                        <span></span>
                                    </div>
                                </a>
                                <div className="blog-details">
                                    <h4>25 January 2018</h4>
                                    <a href="#">
                                        <p>Lorem ipsum dolor sit consectetur adipiscing elit, </p>
                                    </a>
                                    <hr className="style1" />
                                    <h6>by: John Dio , 2 Comment</h6>
                                </div>
                            </Col>
                            <Col md="12">
                                <a href="#">
                                    <div className="basic-effect">
                                        <div>
                                            <Media src={blog2} className="img-fluid blur-up lazyload bg-img" alt="" />
                                        </div>
                                        <span></span>
                                    </div>
                                </a>
                                <div className="blog-details">
                                    <h4>25 January 2018</h4>
                                    <a href="#">
                                        <p>Lorem ipsum dolor sit consectetur adipiscing elit, </p>
                                    </a>
                                    <hr className="style1" />
                                    <h6>by: John Dio , 2 Comment</h6>
                                </div>
                            </Col>
                            <Col md="12">
                                <a href="#">
                                    <div className="basic-effect">
                                        <div>
                                            <img src={blog3} className="img-fluid blur-up lazyload bg-img" alt="" />
                                        </div>
                                        <span></span>
                                    </div>
                                </a>
                                <div className="blog-details">
                                    <h4>25 January 2018</h4>
                                    <a href="#">
                                        <p>Lorem ipsum dolor sit consectetur adipiscing elit, </p>
                                    </a>
                                    <hr className="style1" />
                                    <h6>by: John Dio , 2 Comment</h6>
                                </div>
                            </Col>
                            <Col md="12">
                                <a href="#">
                                    <div className="basic-effect">
                                        <div>
                                            <img src={blog2} className="img-fluid blur-up lazyload bg-img" alt="" />
                                        </div>
                                        <span></span>
                                    </div>
                                </a>
                                <div className="blog-details">
                                    <h4>25 January 2018</h4>
                                    <a href="#">
                                        <p>Lorem ipsum dolor sit consectetur adipiscing elit, </p>
                                    </a>
                                    <hr className="style1" />
                                    <h6>by: John Dio , 2 Comment</h6>
                                </div>
                            </Col>
                        </Slider>
                    </Col>
                </Row>
            </Container>
        </section>
        </Fragment>
    )
}

export default BlogBanner;