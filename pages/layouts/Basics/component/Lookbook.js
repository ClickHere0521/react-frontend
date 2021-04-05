import React, { Fragment, useEffect } from 'react';
import { Media, Container, Row, Col } from 'reactstrap';

const LookbookSection = () => {
    useEffect(() => {
        document.documentElement.style.setProperty('--theme-deafult', '#ff4c3b');
    })
    return (
        <Fragment>
            <Container fluid={true} className="lookbook-section pt-0 lookbook">
                <Row>
                    <Col md="3">
                        <Row className="lookbook-img">
                            <Col sm="12">
                                <div className="lookbook-block"> <Media src="/assets/images/fashion/lookbook/7.jpg" alt=""
                                    className="img-fluid blur-up lazyload" />
                                    <div className="lookbook-dot dot11"> <span>1</span>
                                        <a href="#">
                                            <div className="dot-showbox"> <Media src="/assets/images/pro3/35.jpg"
                                                className="img-fluid blur-up lazyload" alt="" />
                                                <div className="dot-info">
                                                    <h5 className="title">tee</h5>
                                                    <h5>200$</h5>
                                                    <h6>details</h6>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="lookbook-dot dot12"> <span>2</span>
                                        <a href="#">
                                            <div className="dot-showbox"> <Media src="/assets/images/pro3/36.jpg"
                                                className="img-fluid blur-up lazyload" alt="" />
                                                <div className="dot-info">
                                                    <h5 className="title">tee</h5>
                                                    <h5>200$</h5>
                                                    <h6>details</h6>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </Col>
                            <Col sm="12">
                                <div className="lookbook-block"> <Media src="/assets/images/fashion/lookbook/6.jpg" alt=""
                                    className="img-fluid blur-up lazyload" />
                                    <div className="lookbook-dot dot7"> <span>1</span>
                                        <a href="#">
                                            <div className="dot-showbox"> <Media src="/assets/images/pro3/27.jpg"
                                                className="img-fluid blur-up lazyload" alt="" />
                                                <div className="dot-info">
                                                    <h5 className="title">tee</h5>
                                                    <h5>200$</h5>
                                                    <h6>details</h6>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="lookbook-dot dot8"> <span>2</span>
                                        <a href="#">
                                            <div className="dot-showbox"> <Media src="/assets/images/pro3/28.jpg"
                                                className="img-fluid blur-up lazyload" alt="" />
                                                <div className="dot-info">
                                                    <h5 className="title">tee</h5>
                                                    <h5>200$</h5>
                                                    <h6>details</h6>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </Col>
                            <Col sm="12">
                                <div className="lookbook-block"> <Media src="/assets/images/fashion/lookbook/12.jpg" alt=""
                                    className="img-fluid blur-up lazyload" />
                                    <div className="lookbook-dot dot5"> <span>1</span>
                                        <a href="#">
                                            <div className="dot-showbox"> <Media src="/assets/images/pro3/2.jpg"
                                                className="img-fluid blur-up lazyload" alt="" />
                                                <div className="dot-info">
                                                    <h5 className="title">tee</h5>
                                                    <h5>200$</h5>
                                                    <h6>details</h6>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="lookbook-dot dot6"> <span>2</span>
                                        <a href="#">
                                            <div className="dot-showbox"> <Media src="/assets/images/pro3/1.jpg"
                                                className="img-fluid blur-up lazyload" alt="" />
                                                <div className="dot-info">
                                                    <h5 className="title">tee</h5>
                                                    <h5>200$</h5>
                                                    <h6>details</h6>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col md="3">
                        <Row className="lookbook-img">
                            <Col sm="12">
                                <div className="lookbook-block"> <Media src="/assets/images/fashion/lookbook/3.jpg" alt=""
                                    className="img-fluid blur-up lazyload" />
                                    <div className="lookbook-dot dot9"> <span>1</span>
                                        <a href="#">
                                            <div className="dot-showbox"> <Media src="/assets/images/pro3/33.jpg"
                                                className="img-fluid blur-up lazyload" alt="" />
                                                <div className="dot-info">
                                                    <h5 className="title">tee</h5>
                                                    <h5>200$</h5>
                                                    <h6>details</h6>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="lookbook-dot dot10"> <span>2</span>
                                        <a href="#">
                                            <div className="dot-showbox"> <Media src="/assets/images/pro3/34.jpg"
                                                className="img-fluid blur-up lazyload" alt="" />
                                                <div className="dot-info">
                                                    <h5 className="title">tee</h5>
                                                    <h5>200$</h5>
                                                    <h6>details</h6>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </Col>
                            <Col sm="12">
                                <div className="lookbook-block"> <Media src="/assets/images/fashion/lookbook/8.jpg" alt=""
                                    className="img-fluid blur-up lazyload" />
                                    <div className="lookbook-dot dot11"> <span>1</span>
                                        <a href="#">
                                            <div className="dot-showbox"> <Media src="/assets/images/pro3/35.jpg"
                                                className="img-fluid blur-up lazyload" alt="" />
                                                <div className="dot-info">
                                                    <h5 className="title">tee</h5>
                                                    <h5>200$</h5>
                                                    <h6>details</h6>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="lookbook-dot dot12"> <span>2</span>
                                        <a href="#">
                                            <div className="dot-showbox"> <Media src="/assets/images/pro3/36.jpg"
                                                className="img-fluid blur-up lazyload" alt="" />
                                                <div className="dot-info">
                                                    <h5 className="title">tee</h5>
                                                    <h5>200$</h5>
                                                    <h6>details</h6>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </Col>
                            <Col sm="12">
                                <div className="lookbook-block"> <Media src="/assets/images/fashion/lookbook/9.jpg" alt=""
                                    className="img-fluid blur-up lazyload" />
                                    <div className="lookbook-dot dot11"> <span>1</span>
                                        <a href="#">
                                            <div className="dot-showbox"> <Media src="/assets/images/pro3/35.jpg"
                                                className="img-fluid blur-up lazyload" alt="" />
                                                <div className="dot-info">
                                                    <h5 className="title">tee</h5>
                                                    <h5>200$</h5>
                                                    <h6>details</h6>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="lookbook-dot dot12"> <span>2</span>
                                        <a href="#">
                                            <div className="dot-showbox"> <Media src="/assets/images/pro3/36.jpg"
                                                className="img-fluid blur-up lazyload" alt="" />
                                                <div className="dot-info">
                                                    <h5 className="title">tee</h5>
                                                    <h5>200$</h5>
                                                    <h6>details</h6>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col md="3">
                        <Row className="lookbook-img">
                            <Col sm="12">
                                <div className="lookbook-block"> <Media src="/assets/images/fashion/lookbook/2.jpg" alt=""
                                    className="img-fluid blur-up lazyload" />
                                    <div className="lookbook-dot dot15"> <span>1</span>
                                        <a href="#">
                                            <div className="dot-showbox"> <Media src="/assets/images/pro3/2.jpg"
                                                className="img-fluid blur-up lazyload" alt="" />
                                                <div className="dot-info">
                                                    <h5 className="title">tee</h5>
                                                    <h5>200$</h5>
                                                    <h6>details</h6>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </Col>
                            <Col sm="12">
                                <div className="lookbook-block"> <Media src="/assets/images/fashion/lookbook/10.jpg" alt=""
                                    className="img-fluid blur-up lazyload" />
                                    <div className="lookbook-dot dot11"> <span>1</span>
                                        <a href="#">
                                            <div className="dot-showbox"> <Media src="/assets/images/pro3/35.jpg"
                                                className="img-fluid blur-up lazyload" alt="" />
                                                <div className="dot-info">
                                                    <h5 className="title">tee</h5>
                                                    <h5>200$</h5>
                                                    <h6>details</h6>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="lookbook-dot dot12"> <span>2</span>
                                        <a href="#">
                                            <div className="dot-showbox"> <Media src="/assets/images/pro3/36.jpg"
                                                className="img-fluid blur-up lazyload" alt="" />
                                                <div className="dot-info">
                                                    <h5 className="title">tee</h5>
                                                    <h5>200$</h5>
                                                    <h6>details</h6>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </Col>
                            <Col sm="12">
                                <div className="lookbook-block"> <Media src="/assets/images/fashion/lookbook/4.jpg" alt=""
                                    className="img-fluid blur-up lazyload" />
                                    <div className="lookbook-dot dot13"> <span>1</span>
                                        <a href="#">
                                            <div className="dot-showbox"> <Media src="/assets/images/pro3/2.jpg"
                                                className="img-fluid blur-up lazyload" alt="" />
                                                <div className="dot-info">
                                                    <h5 className="title">tee</h5>
                                                    <h5>200$</h5>
                                                    <h6>details</h6>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="lookbook-dot dot14"> <span>2</span>
                                        <a href="#">
                                            <div className="dot-showbox"> <Media src="/assets/images/pro3/2.jpg"
                                                className="img-fluid blur-up lazyload" alt="" />
                                                <div className="dot-info">
                                                    <h5 className="title">tee</h5>
                                                    <h5>200$</h5>
                                                    <h6>details</h6>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col md="3">
                        <Row className="lookbook-img">
                            <Col sm="12">
                                <div className="lookbook-block"> <Media src="/assets/images/fashion/lookbook/11.jpg" alt=""
                                    className="img-fluid blur-up lazyload" />
                                    <div className="lookbook-dot dot15"> <span>1</span>
                                        <a href="#">
                                            <div className="dot-showbox"> <Media src="/assets/images/pro3/2.jpg"
                                                className="img-fluid blur-up lazyload" alt="" />
                                                <div className="dot-info">
                                                    <h5 className="title">tee</h5>
                                                    <h5>200$</h5>
                                                    <h6>details</h6>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </Col>
                            <Col sm="12">
                                <div className="lookbook-block"> <Media src="/assets/images/fashion/lookbook/1.jpg" alt=""
                                    className="img-fluid blur-up lazyload" />
                                    <div className="lookbook-dot dot13"> <span>1</span>
                                        <a href="#">
                                            <div className="dot-showbox"> <Media src="/assets/images/pro3/2.jpg"
                                                className="img-fluid blur-up lazyload" alt="" />
                                                <div className="dot-info">
                                                    <h5 className="title">tee</h5>
                                                    <h5>200$</h5>
                                                    <h6>details</h6>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="lookbook-dot dot14"> <span>2</span>
                                        <a href="#">
                                            <div className="dot-showbox"> <Media src="/assets/images/pro3/2.jpg"
                                                className="img-fluid blur-up lazyload" alt="" />
                                                <div className="dot-info">
                                                    <h5 className="title">tee</h5>
                                                    <h5>200$</h5>
                                                    <h6>details</h6>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </Col>
                            <Col sm="12">
                                <div className="lookbook-block"> <Media src="/assets/images/fashion/lookbook/5.jpg" alt=""
                                    className="img-fluid blur-up lazyload" />
                                    <div className="lookbook-dot dot11"> <span>1</span>
                                        <a href="#">
                                            <div className="dot-showbox"> <Media src="/assets/images/pro3/35.jpg"
                                                className="img-fluid blur-up lazyload" alt="" />
                                                <div className="dot-info">
                                                    <h5 className="title">tee</h5>
                                                    <h5>200$</h5>
                                                    <h6>details</h6>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="lookbook-dot dot12"> <span>2</span>
                                        <a href="#">
                                            <div className="dot-showbox"> <Media src="/assets/images/pro3/36.jpg"
                                                className="img-fluid blur-up lazyload" alt="" />
                                                <div className="dot-info">
                                                    <h5 className="title">tee</h5>
                                                    <h5>200$</h5>
                                                    <h6>details</h6>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    )
}

export default LookbookSection;