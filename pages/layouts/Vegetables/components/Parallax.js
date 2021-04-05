import React, { Fragment } from "react";
import { Container, Row, Col } from "reactstrap";

const Parallax = () => {
    return (
        <Fragment>
            <section className="p-0">
                <div className="full-banner parallax-banner15 parallax text-left p-left">
                    <Container>
                        <Row>
                            <Col>
                                <div className="banner-contain">
                                    <h2>2021</h2>
                                    <h3>food market</h3>
                                    <h4>special offer</h4>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </section>
        </Fragment>
    );
}

export default Parallax;