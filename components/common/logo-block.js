import React from 'react';
import Slider from 'react-slick';
import { Slider6 } from "../../services/script";
import { Container, Row, Media ,Col } from 'reactstrap';

const LogoBlock = ({designClass}) => {
    return (
        <section className={designClass}>
            <Container>
                <Row>
                    <Col md="12">
                        <Slider {...Slider6} className="slide-6 no-arrow">
                        <div>
                                <div className="logo-block">
                                    <a href={null}>
                                        <Media src={`/assets/images/logos/1.png`} alt="" />
                                    </a>
                                </div>
                            </div>
                            <div>
                                <div className="logo-block">
                                    <a href={null}>
                                        <Media src={`/assets/images/logos/2.png`} alt="" />
                                    </a>
                                </div>
                            </div>
                            <div>
                                <div className="logo-block">
                                    <a href={null}>
                                        <Media src={`/assets/images/logos/3.png`} alt="" />
                                    </a>
                                </div>
                            </div>
                            <div>
                                <div className="logo-block">
                                    <a href={null}>
                                        <Media src={`/assets/images/logos/4.png`} alt="" />
                                    </a>
                                </div>
                            </div>
                            <div>
                                <div className="logo-block">
                                    <a href={null}>
                                        <Media src={`/assets/images/logos/5.png`} alt="" />
                                    </a>
                                </div>
                            </div>
                            <div>
                                <div className="logo-block">
                                    <a href={null}>
                                        <Media src={`/assets/images/logos/6.png`} alt="" />
                                    </a>
                                </div>
                            </div>
                            <div>
                                <div className="logo-block">
                                    <a href={null}>
                                        <Media src={`/assets/images/logos/7.png`} alt="" />
                                    </a>
                                </div>
                            </div>
                            <div>
                                <div className="logo-block">
                                    <a href={null}>
                                        <Media src={`/assets/images/logos/8.png`} alt="" />
                                    </a>
                                </div>
                            </div>
                        </Slider>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default LogoBlock;