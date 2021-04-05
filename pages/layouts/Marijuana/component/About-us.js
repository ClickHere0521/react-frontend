import React, { Fragment } from 'react';
import { Container, Row ,Col } from 'reactstrap';

const AboutUs = () => (
    <Fragment>
        <section>
            <Container>
                <Row>
                    <Col lg="8" className="offset-lg-2">
                        <div className="title3">
                            <h4>about us</h4>
                            <h2 className="title-inner3">welcome to multi store</h2>
                            <div className="line"></div>
                        </div>
                        <div className="about-text">
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
                        voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    </Fragment>
)

export default AboutUs;