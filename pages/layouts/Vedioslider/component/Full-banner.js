import React, { Fragment } from 'react';
import { Container, Row, Col } from 'reactstrap';

const FullBanner = () => {
    return (
        <Fragment>
            <section className="p-0 advertise-section">
                <div className="full-banner parallax text-center p-center parallax-banner24">
                    <Container>
                        <Row>
                            <Col>
                                <div className="banner-contain">
                                    <h2>kids</h2>
                                    <h3>fashion trends</h3>
                                    <h4>special offer</h4>
                                    <a href="#" className="btn btn-solid">shop now</a>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </section>
        </Fragment>
    )
}

export default FullBanner;