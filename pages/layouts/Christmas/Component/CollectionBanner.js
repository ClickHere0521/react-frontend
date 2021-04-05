import React from 'react';
import { Container, Row ,Col, Media} from 'reactstrap';
import SubBanner1 from '../../../../public/assets/images/christmas/sub-banner1.jpg';
import SubBanner2 from '../../../../public/assets/images/christmas/sub-banner2.jpg';


const CollectionBanner = () => {
    return (
        <section className="pb-0 ratio_45">
        <Container>
            <Row className="row partition2">
                <Col md="6">
                    <a href={null}>
                        <div className="collection-banner christmas-banner p-left text-left">
                            <div className="img-part">
                                <Media src={SubBanner1}
                                    className="img-fluid bg-img blur-up lazyload" alt="" />
                            </div>
                            <div className="contain-banner">
                                <div>
                                    <h4>Christmas</h4>
                                    <h2>gift box</h2>
                                </div>
                            </div>
                        </div>
                    </a>
                </Col>
                <Col md="6">
                    <a href="#">
                        <div className="collection-banner christmas-banner p-right text-right">
                            <div className="img-part">
                                <Media src={SubBanner2}
                                    className="img-fluid bg-img blur-up lazyload" alt="" />
                            </div>
                            <div className="contain-banner">
                                <div>
                                    <h4>go christmas</h4>
                                    <h2>chocolate</h2>
                                </div>
                            </div>
                        </div>
                    </a>
                </Col>
            </Row>
        </Container>
    </section>
    )
}

export default CollectionBanner;