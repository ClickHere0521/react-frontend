import React, { Fragment } from 'react';
import { Container, Row, Col } from 'reactstrap';

const ParallaxBanner = () => {
    return (
        <Fragment>
            {/*Parallax banner*/}
            <section className="p-0">
                <div className="full-banner parallax parallax-banner11 text-center p-left">
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
            {/*Parallax banner end*/}
        </Fragment>
    );
}

export default ParallaxBanner;