import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const TimeBanner = () => {
    return (
        <section className="game-banner">
            <Container>
                <Row className="banner-timer">
                    <Col md="6">
                        <div className="banner-text">
                            <h2>Save <span>30% off</span> Digital Watch</h2>
                        </div>
                    </Col>
                    <Col md="6">
                        <div className="timer-box">
                            <div className="timer">
                                <p id="demo"></p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default TimeBanner;