import React,{ Fragment } from "react";
import {Col, Container, Row } from "reactstrap";
import CountdownComponent from "../../../../components/common/widgets/countdownComponent";

const TimeBanner = () => {

    return (
        <Fragment>
            <section className="pt-0">
                <Container>
                    <Row className="banner-timer">
                        <Col md="6">
                            <div className="banner-text">
                                <h2>Save <span>30% off</span> Digital Watch</h2>
                            </div>
                        </Col>
                        <Col md="6">
                            <CountdownComponent />
                        </Col>
                    </Row>
                </Container>
            </section>
        </Fragment>
    );

}

export default TimeBanner;