import React from 'react';
import { Media, Container, Row, Col } from 'reactstrap';
import four from '../../../../public/assets/images/parallax/4.jpg';
import five from '../../../../public/assets/images/parallax/5.jpg';
import six from '../../../../public/assets/images/parallax/6.jpg';
import seven from '../../../../public/assets/images/parallax/7.jpg';

const ParallaxSection = () => {
    return (
        <div className="parallax-cls">
            <section className="p-0">
                <div className="full-banner parallax-layout parallax text-center p-left parallax-banner4">
                    <Container>
                        <Row>
                            <Col>
                                <div className="banner-contain">
                                    <h2>2021</h2>
                                    <h3>fashion trends</h3>
                                    <h4>special offer</h4>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </section>
            <section className="p-0">
                <div className="full-banner parallax-layout parallax text-center p-right parallax-banner5">
                    <Container>
                        <Row>
                            <Col>
                                <div className="banner-contain">
                                    <h2>2021</h2>
                                    <h3>the summer</h3>
                                    <h4>special offer</h4>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </section>
            <section className="p-0">
                <div className="full-banner parallax-layout parallax text-center p-left parallax-banner6">
                    <Container>
                        <Row>
                            <Col>
                                <div className="banner-contain">
                                    <h2>2021</h2>
                                    <h3>top trends</h3>
                                    <h4>special offer</h4>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </section>
            <section className="p-0">
                <div className="full-banner parallax-layout parallax text-center p-right parallax-banner7">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="banner-contain">
                                    <h2>2021</h2>
                                    <h3>new collection</h3>
                                    <h4>special offer</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ParallaxSection;