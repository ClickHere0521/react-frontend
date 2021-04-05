import React, { Fragment } from "react";
import { Container, Row, Col, Media } from "reactstrap";
import Slider from 'react-slick';
import {Slider4} from '../../../../services/script'
import cart1 from '../../../../public/assets/images/watch/cat1.png';
import cart2 from '../../../../public/assets/images/watch/cat2.png';
import cart3 from '../../../../public/assets/images/watch/cat3.png';

const Category = () => {

    return (
        <Fragment>
            <section className="section-b-space ratio_portrait">
                <Container>
                    <Row>
                        <Col>
                            <Slider {...Slider4} className="slide-4 category-m no-arrow">
                                <div>
                                    <div className="category-wrapper">
                                        <div>
                                            <div>
                                                <Media src={cart1}
                                                    className="img-fluid blur-up lazyload bg-img" alt="" />
                                            </div>
                                            <h4>watch models</h4>
                                            <ul className="category-link">
                                                <li><a href="#">d1 milano</a></li>
                                                <li><a href="#">damaskeening</a></li>
                                                <li><a href="#">diving watch</a></li>
                                                <li><a href="#">dollar watch</a></li>
                                            </ul>
                                            <a href="#" className="btn btn-outline">view more</a></div>
                                    </div>
                                </div>
                                <div>
                                    <div className="category-wrapper">
                                        <div>
                                            <div>
                                                <Media src={cart2}
                                                    className="img-fluid blur-up lazyload bg-img" alt="" />
                                            </div>
                                            <h4>calculator watch</h4>
                                            <ul className="category-link">
                                                <li><a href="#">Shock-resistant watch</a></li>
                                                <li><a href="#">Skeleton watch</a></li>
                                                <li><a href="#">Slow watch</a></li>
                                                <li><a href="#">Solar-powered watch</a></li>
                                            </ul>
                                            <a href="#" className="btn btn-outline">view more</a></div>
                                    </div>
                                </div>
                                <div>
                                    <div className="category-wrapper">
                                        <div>
                                            <div>
                                                <Media src={cart3}
                                                    className="img-fluid blur-up lazyload bg-img" alt="" />
                                            </div>
                                            <h4>Antimagnetic watch</h4>
                                            <ul className="category-link">
                                                <li><a href="#">Watchmaking conglomerates</a></li>
                                                <li><a href="#">Breitling SA</a></li>
                                                <li><a href="#">Casio watches</a></li>
                                                <li><a href="#">Citizen Watch</a></li>
                                            </ul>
                                            <a href="#" className="btn btn-outline">view more</a></div>
                                    </div>
                                </div>
                                <div>
                                    <div className="category-wrapper">
                                        <div>
                                            <div>
                                                <Media src={cart2}
                                                    className="img-fluid blur-up lazyload bg-img" alt="" />
                                            </div>
                                            <h4>History of watches</h4>
                                            <ul className="category-link">
                                                <li><a href="#">Manufacture d'horlogerie</a></li>
                                                <li><a href="#">Mechanical watch</a></li>
                                                <li><a href="#">Microbrand watches</a></li>
                                                <li><a href="#">MIL-W-46374</a></li>
                                            </ul>
                                            <a href="#" className="btn btn-outline">view more</a></div>
                                    </div>
                                </div>
                                <div>
                                    <div className="category-wrapper">
                                        <div>
                                            <div>
                                                <Media src={cart1}
                                                    className="img-fluid blur-up lazyload bg-img" alt="" />
                                            </div>
                                            <h4>watch models</h4>
                                            <ul className="category-link">
                                                <li><a href="#">d1 milano</a></li>
                                                <li><a href="#">damaskeening</a></li>
                                                <li><a href="#">diving watch</a></li>
                                                <li><a href="#">dollar watch</a></li>
                                            </ul>
                                            <a href="#" className="btn btn-outline">view more</a></div>
                                    </div>
                                </div>
                            </Slider>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Fragment>
    );

}

export default Category;