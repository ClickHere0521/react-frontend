import React from 'react';
import { Container, Row, Media ,Col} from 'reactstrap';
import lookbook from '../../public/assets/images/lookbook.jpg';
import two from '../../public/assets/images/pro3/2.jpg';
import one from '../../public/assets/images/pro3/1.jpg';
import lookbook2 from '../../public/assets/images/lookbook2.jpg';
import twentyseven from '../../public/assets/images/pro3/27.jpg';
import twentyeight from '../../public/assets/images/pro3/28.jpg';
import CommonLayout from '../../components/shop/common-layout';

const Lookbook = () => {
    return (
        <CommonLayout parent="home" title="lookbook" >
            <section className="lookbook section-b-space ratio_square">
                <Container>
                    <Row>
                        <Col md="6">
                            <div className="lookbook-block">
                                <div>
                                    <Media src={lookbook} className="img-fluid blur-up lazyload bg-img" alt="" />
                                </div>
                                <div className="lookbook-dot"><span>1</span>
                                    <a href="#">
                                        <div className="dot-showbox">
                                            <Media src={two}
                                            className="img-fluid blur-up lazyload" alt="" />
                                            <div className="dot-info">
                                                <h5 className="title">tee</h5>
                                                <h5>200$</h5>
                                                <h6>details</h6>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="lookbook-dot dot2"><span>2</span>
                                    <a href="#">
                                        <div className="dot-showbox">
                                            <Media src={one}
                                            className="img-fluid blur-up lazyload " alt="" />
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
                        <Col md="6">
                            <div className="lookbook-block">
                                <div>
                                    <Media src={lookbook2} className="img-fluid blur-up lazyload bg-img" alt="" />
                                </div>
                                <div className="lookbook-dot dot3"><span>1</span>
                                    <a href="#">
                                        <div className="dot-showbox"><Media src={twentyseven}
                                            className="img-fluid blur-up lazyload" alt="" />
                                            <div className="dot-info">
                                                <h5 className="title">tee</h5>
                                                <h5>200$</h5>
                                                <h6>details</h6>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="lookbook-dot dot4"><span>2</span>
                                    <a href="#">
                                        <div className="dot-showbox"><img src={twentyeight}
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
                </Container>
            </section>
        </CommonLayout>
    )
}

export default Lookbook;