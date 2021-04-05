import React, { Fragment } from "react";
import { Container, Col ,Row } from "reactstrap";

const CategoryThree = () => {

    return (
        <Fragment>
            <section className="p-0">
                <Container>
                    <Row className="background">
                        <Col>
                            <a href="#">
                                <div className="contain-bg">
                                    <h4 data-hover="size 06">size 06</h4>
                                </div>
                            </a>
                        </Col>
                        <Col>
                            <a href="#">
                                <div className="contain-bg">
                                    <h4>size 07</h4>
                                </div>
                            </a>
                        </Col>
                        <Col>
                            <a href="#">
                                <div className="contain-bg">
                                    <h4>size 08</h4>
                                </div>
                            </a>
                        </Col>
                        <Col>
                            <a href="#">
                                <div className="contain-bg">
                                    <h4>size 09</h4>
                                </div>
                            </a>
                        </Col>
                        <Col>
                            <a href="#">
                                <div className="contain-bg">
                                    <h4>size 10</h4>
                                </div>
                            </a>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Fragment>
    );
}

export default CategoryThree;