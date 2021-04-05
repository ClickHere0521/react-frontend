import React, { Fragment } from 'react';
import { Container, Row, Col } from 'reactstrap';

const Parallax = () => {
    return (
        <Fragment>
            <section className="p-0">
                <div className="full-banner parallax parallax-banner3  text-center p-center">
                    <Container>
                        <Row>
                            <Col>
                                <div className="banner-contain">
                                    <h2>2021</h2>
                                    <h3>interior design in home</h3>
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