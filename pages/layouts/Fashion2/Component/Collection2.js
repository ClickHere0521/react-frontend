import React from 'react';
import { Container, Media, Row ,Col} from 'reactstrap';
import three from '../../../../public/assets/images/fashion/3.jpg';
import four from '../../../../public/assets/images/fashion/4.jpg';


const CollectionTwo = () => {
    return (
        <section className="banner-padding banner-furniture ratio2_1">
            <Container fluid={true}>
                <Row className="partition3">
                    <Col md="6">
                        <a href={null}>
                            <div className="collection-banner p-left text-left">
                                <div className="img-part">
                                    <Media src={three} alt=""
                                        className="img-fluid blur-up lazyload bg-img" />
                                </div>
                                <div className="contain-banner">
                                    <div>
                                        <h4>save 30%</h4>
                                        <h2>sandle</h2>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </Col>
                    <Col md="6">
                        <a href={null}>
                            <div className="collection-banner p-left text-left">
                                <div className="img-part">
                                    <Media src={four} alt=""
                                        className="img-fluid blur-up lazyload bg-img" />
                                </div>
                                <div className="contain-banner">
                                    <div>
                                        <h4>save 60%</h4>
                                        <h2>kids</h2>
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

export default CollectionTwo;