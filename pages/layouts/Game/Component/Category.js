import React, { Fragment } from 'react';
import { Media, Container, Col ,Row} from 'reactstrap';
import banner1 from '../../../../public/assets/images/game/banner/1.jpg'
import banner2 from '../../../../public/assets/images/game/banner/2.jpg'

const Category = () => {
    return (
        <Fragment>
            <section className="pb-0 banner-text-white ratio_45">
                <Container>
                    <Row className="partition2">
                        <Col md="6">
                            <a href="#">
                                <div className="collection-banner p-left text-left">
                                    <div className="img-part">
                                        <Media src={banner1} className="img-fluid bg-img blur-up lazyload" alt="" />
                                    </div>
                                    <div className="contain-banner">
                                        <div>
                                            <h4>for windows</h4>
                                            <h2>save 10%</h2>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </Col>
                        <Col md="6">
                            <a href="#">
                                <div className="collection-banner p-right text-right">
                                    <div className="img-part">
                                        <Media src={banner2} className="img-fluid bg-img blur-up lazyload" alt="" />
                                    </div>
                                    <div className="contain-banner">
                                        <div>
                                            <h4>for psp</h4>
                                            <h2>off 15%</h2>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Fragment>
    )
}

export default Category;