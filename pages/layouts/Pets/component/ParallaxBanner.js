import React from 'react';
import { Container, Col, Media ,Row} from 'reactstrap';
import dog from '../../../../public/assets/images/dog.png';

const ParallaxBanner = () => {
    return (
        <section className="p-0 pet-parallax">
            <div className="full-banner parallax parallax-banner19  text-center p-center">
                <Container>
                    <Row>
                        <Col>
                            <div className="banner-contain">
                                <h4>choose what you love</h4>
                                <h3>get upto 70% off</h3>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                                industry. Lorem Ipsum has been the industry's standard dummy text ever
                                since the 1500s, when an unknown printer took a galley of type and
                                scrambled it to make
                                        a type specimen book. </p>
                                <a href="#" className="btn btn-solid black-btn" tabIndex="0">shop now</a>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <div className="pet-decor">
                    <Media src={dog} alt="" className="img-fluid blur-up lazyload" />
                </div>
            </div>
        </section>
    );
}

export default ParallaxBanner;