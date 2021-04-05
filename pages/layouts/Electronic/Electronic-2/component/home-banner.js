import React from 'react';
import { Col, Media, Row ,Container} from 'reactstrap';
import one from '../../../../../public/assets/images/electronics/1.jpg';
import two from '../../../../../public/assets/images/electronics/2.jpg';
import four from '../../../../../public/assets/images/electronics/4.jpg';

const HomeBanner = () => {
    return (
        <Container className="banner-slider">
            <Row>
                <Col md="7" ><Media src={one}
                    className="img-fluid blur-up lazyload height-banner" alt="" /></Col>
                <Col md="5">
                    <Row className="row home-banner">
                        <Col sm="12">
                            <a href="#"><Media src={two} className="img-fluid blur-up lazyload"
                                alt="" /></a>
                        </Col>
                        <Col sm="12">
                            <a href="#"><Media src={four} className="img-fluid blur-up lazyload"
                                alt="" /></a>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default HomeBanner;

