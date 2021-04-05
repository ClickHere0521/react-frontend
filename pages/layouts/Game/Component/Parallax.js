import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const Parallax = () => {
    return (
        <section className="p-0 game-parallax effect-cls ">
            <div className="full-banner parallax text-center p-center text-center parallax-banner20">
                <Container>
                    <Row>
                        <Col>
                            <div className="banner-contain">
                                <h2>2019</h2>
                                <h3>xbox games</h3>
                                <h4>special offer</h4>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </section>
    )
}

export default Parallax;