import React, { Fragment } from 'react';
import { Container, Row, Col ,Media} from 'reactstrap';
import banner1 from '../../../../public/assets/images/pets/banner/1.jpg';
import banner2 from '../../../../public/assets/images/pets/banner/2.jpg';
import banner3 from '../../../../public/assets/images/pets/banner/3.jpg';
import banner4 from '../../../../public/assets/images/pets/banner/4.jpg';
import banner5 from '../../../../public/assets/images/pets/banner/5.jpg';
import banner6 from '../../../../public/assets/images/pets/banner/6.jpg';

const BannerSection = () => {
    return (
        <Fragment>
            <section className="pt-0 banner-6 ratio2_1">
                <Container>
                    <Row className="partition3">
                        <Col md='4'>
                            <a href="#">
                                <div className="collection-banner p-left">
                                    <div className="img-part">
                                        <Media src={banner1}
                                            className="img-fluid blur-up lazyload bg-img" alt="" />
                                    </div>
                                    <div className="contain-banner banner-3">
                                        <div>
                                            <h2>Clothes</h2>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </Col>
                        <Col md='4'>
                            <a href="#">
                                <div className="collection-banner p-right text-right">
                                    <div className="img-part">
                                        <Media src={banner2}
                                            className="img-fluid blur-up lazyload bg-img" alt="" />
                                    </div>
                                    <div className="contain-banner banner-3">
                                        <div>
                                            <h2>Groom</h2>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </Col>
                        <Col md='4'>
                            <a href="#">
                                <div className="collection-banner p-left">
                                    <div className="img-part">
                                        <Media src={banner3}
                                            className="img-fluid blur-up lazyload bg-img" alt="" />
                                    </div>
                                    <div className="contain-banner banner-3">
                                        <div>
                                            <h2>food</h2>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </Col>
                    </Row>
                    <Row className="partition3 banner-top-cls">
                        <Col md='4'>
                            <a href="#">
                                <div className="collection-banner p-right">
                                    <div className="img-part">
                                        <Media src={banner4}
                                            className="img-fluid blur-up lazyload bg-img" alt="" />
                                    </div>
                                    <div className="contain-banner banner-3">
                                        <div>
                                            <h2>Home</h2>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </Col>
                        <Col md='4'>
                            <a href="#">
                                <div className="collection-banner p-right text-right">
                                    <div className="img-part">
                                        <Media src={banner5}
                                            className="img-fluid blur-up lazyload bg-img" alt="" />
                                    </div>
                                    <div className="contain-banner banner-3">
                                        <div>
                                            <h2>cats</h2>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </Col>
                        <Col md='4'>
                            <a href="#">
                                <div className="collection-banner p-right">
                                    <div className="img-part">
                                        <Media src={banner6}
                                            className="img-fluid blur-up lazyload bg-img" alt="" />
                                    </div>
                                    <div className="contain-banner banner-3">
                                        <div>
                                            <h2>bowls</h2>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Fragment>
    );
}

export default BannerSection;