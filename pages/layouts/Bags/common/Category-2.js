import React from 'react';
import { Container, Row ,Col ,Media} from 'reactstrap';
import catOne from '../../../../public/assets/images/cat1.jpg';
import catTwo from '../../../../public/assets/images/cat2.jpg';
import catThree from '../../../../public/assets/images/cat3.jpg';

const CategoryTwo = () => {
    return (
        <div className="category-bg ratio_square">
            <Container fluid={true} className="p-0">
                <Row className="order-section">
                    <Col sm="4" className="p-0">
                        <a href="#" className="image-block">
                            <Media alt="" src={catOne} className="img-fluid blur-up lazyload bg-img" />
                        </a>
                    </Col>
                    <Col sm="4" className="p-0">
                        <div className="contain-block even">
                            <div>
                                <h6>new products</h6>
                                <a href="#">
                                    <h2>zipper storage bag</h2>
                                </a><a href="#" className="btn btn-solid category-btn">-80% off</a>
                                <a href="#">
                                    <h6><span>shop now</span></h6>
                                </a>
                            </div>
                        </div>
                    </Col>
                    <Col sm="4" className="p-0">
                        <a href="#" className="image-block"><img alt="" src={catTwo} className="img-fluid blur-up lazyload bg-img" /></a>
                    </Col>
                    <Col sm="4" className="p-0">
                        <div className="contain-block">
                            <div>
                                <h6>on sale</h6>
                                <a href="#">
                                    <h2>tucker bag</h2>
                                </a> <a href="#" className="btn btn-solid category-btn">save 30% off</a>
                                <a href="#">
                                    <h6><span>shop now</span></h6>
                                </a>
                            </div>
                        </div>
                    </Col>
                    <Col sm="4" className="p-0">
                        <a href="#" className="image-block even"><img alt="" src={catThree} className="img-fluid blur-up lazyload bg-img" /></a>
                    </Col>
                    <Col sm="4" className="p-0">
                        <div className="contain-block">
                            <div>
                                <h6>summer sale</h6>
                                <a href="#">
                                    <h2>gate check bag</h2>
                                </a> <a href="#" className="btn btn-solid category-btn">minimum 50% off</a>
                                <a href="#">
                                    <h6><span>shop now</span></h6>
                                </a>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default CategoryTwo;