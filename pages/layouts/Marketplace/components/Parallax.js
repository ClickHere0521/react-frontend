import React, { Fragment } from 'react';
import { Container, Row, Col } from 'reactstrap';

const Parallax = () => {
    return (
        <Fragment>
            <section className="p-0">
                <div className="full-banner parallax text-center p-right parallax-banner28">
                    <Container>
                        <Row>
                            <Col>
                                <div className="banner-contain">
                                    <h2>sale</h2>
                                    <h3>fashion trends</h3>
                                    <h4>special offer</h4>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </section>
        </Fragment>
    )
}

export default Parallax;
