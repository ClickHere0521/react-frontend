import React from 'react';
import CommonLayout from '../../components/shop/common-layout';
import { Container, Media, Row, Col } from 'reactstrap';
import one from '../../public/assets/images/collection/1.jpg';
import three from '../../public/assets/images/collection/3.jpg';
import five from '../../public/assets/images/collection/5.jpg';
import six from '../../public/assets/images/collection/6.jpg';
import seven from '../../public/assets/images/collection/7.jpg';
import eight from '../../public/assets/images/collection/8.jpg';
import nine from '../../public/assets/images/collection/9.jpg';
import eleven from '../../public/assets/images/collection/11.jpg';

const Collection = () => {
    return (
        <CommonLayout parent="home" title="collection">
            <section className="collection section-b-space ratio_square ">
                <Container>
                    <Row className="partition-collection">
                        <Col lg="3" md="6">
                            <div className="collection-block">
                                <div><Media src={one} className="img-fluid blur-up lazyload bg-img"
                                    alt="" /></div>
                                <div className="collection-content">
                                    <h4>(20 products)</h4>
                                    <h3>fashion</h3>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry....</p><a
                                        href="#" className="btn btn-outline">shop now !</a>
                                </div>
                            </div>
                        </Col>
                        <Col lg="3" md="6">
                            <div className="collection-block">
                                <div><Media src={three} className="img-fluid blur-up lazyload bg-img"
                                    alt="" /></div>
                                <div className="collection-content">
                                    <h4>(20 products)</h4>
                                    <h3>fashion</h3>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry....</p><a
                                        href="#" className="btn btn-outline">shop now !</a>
                                </div>
                            </div>
                        </Col>
                        <Col lg="3" md="6">
                            <div className="collection-block">
                                <div><Media src={five} className="img-fluid blur-up lazyload bg-img"
                                    alt="" /></div>
                                <div className="collection-content">
                                    <h4>(20 products)</h4>
                                    <h3>fashion</h3>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry....</p><a
                                        href="#" className="btn btn-outline">shop now !</a>
                                </div>
                            </div>
                        </Col>
                        <Col lg="3" md="6">
                            <div className="collection-block">
                                <div><Media src={six} className="img-fluid blur-up lazyload bg-img"
                                    alt="" /></div>
                                <div className="collection-content">
                                    <h4>(20 products)</h4>
                                    <h3>fashion</h3>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry....</p><a
                                        href="#" className="btn btn-outline">shop now !</a>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row className="partition-collection section-t-space">
                        <Col lg="3" md="6">
                            <div className="collection-block">
                                <div><Media src={seven} className="img-fluid blur-up lazyload bg-img"
                                    alt="" /></div>
                                <div className="collection-content">
                                    <h4>(20 products)</h4>
                                    <h3>fashion</h3>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry....</p><a
                                        href="#" className="btn btn-outline">shop now !</a>
                                </div>
                            </div>
                        </Col>
                        <Col lg="3" md="6">
                            <div className="collection-block">
                                <div><Media src={eight} className="img-fluid blur-up lazyload bg-img"
                                    alt="" /></div>
                                <div className="collection-content">
                                    <h4>(20 products)</h4>
                                    <h3>fashion</h3>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry....</p><a
                                        href="#" className="btn btn-outline">shop now !</a>
                                </div>
                            </div>
                        </Col>
                        <Col lg="3" md="6">
                            <div className="collection-block">
                                <div><Media src={nine} className="img-fluid blur-up lazyload bg-img"
                                    alt="" /></div>
                                <div className="collection-content">
                                    <h4>(20 products)</h4>
                                    <h3>fashion</h3>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry....</p><a
                                        href="#" className="btn btn-outline">shop now !</a>
                                </div>
                            </div>
                        </Col>
                        <Col lg="3" md="6">
                            <div className="collection-block">
                                <div><Media src={eleven} className="img-fluid blur-up lazyload bg-img"
                                    alt="" /></div>
                                <div className="collection-content">
                                    <h4>(20 products)</h4>
                                    <h3>fashion</h3>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry....</p><a
                                        href="#" className="btn btn-outline">shop now !</a>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </CommonLayout>
    )
}

export default Collection;